// lightweight option parsing library 
const dash = require('dashdash');
const fetch = require('node-fetch')
const fs = require('fs')

// specifying flags user can use to customize their requests
const options = {
  allowUnknown: true,
  options: [
    {
      // first argument is `opts.KEY`
      names: ['output', 'o'],
      type: 'arrayOfString',
      help: 'file in which to store fetched content'
    },
    {
      names: ['header', 'H'],
      type: 'arrayOfString',
      help: 'an arbitrary header to set on the fetch'
    },
    {
      names: ['agent', 'A'],
      type: 'string',
      help: 'sets user agent header'
    },
    {
      names: ['referer', 'e'],
      type: 'string',
      help: 'sets the URL of the referer header'
    },
    {
      names: ['dump_header', 'dh'],
      type: 'string',
      help: 'the file to which response headers should be dumped'
    },
    {
      names: ['data', 'd'],
      type: 'string',
      help: 'data to send in body of request'
    },
    {
      names: ['method', 'X'],
      type: 'string',
      help: 'set the HTTP method to use in fetch'
    }
  ]
};

const parser = dash.createParser(options);

// all of the options provided
const opts = parser.parse(options);






// JUST GETTING A URL
// want this artii api to print that crazy font into our terminal

// terminal command: node curl.js https://artii.herokuapp.com/make?text=curl++this


// can see that _args is key, value is array of unknown args
// array conotaining any urls we've passed in
// want to extract that first url 
console.log(opts)
let urls = opts._args
let url = urls[0]



fetch(url)
  // res is this huge object, we need to call text() to get the body of this response to print
  // res.text() return a promise
  // .then(res => console.log(res))
  // need to call res.text() which fulfills a promise with the value of the initial response body
  .then(res => res.text())
  // console log that the value that the first .then fulfilled with 
  // txtRes will be the body of the initial response object
  .then(txtRes => console.log(txtRes))
  .catch(err => console.log(err))





// JUST FAILING TO GET URL

// terminal command: node curl.js https://artii.herokuFLAP.com/make?text=curl++this

let urls = opts._args
let url = urls[0]

// we can get pretty fancy with our error messages by keying int othis errory object
// error is just an object so we can key into and extract certain values
// for example, every error has a code

fetch(url)
  .then(res => res.text())
  .then(txtRes => console.log(txtRes))
  .catch(err => console.log(err))

  // we can get pretty fancy with our error messages by keying int othis errory object
// error is just an object so we can key into and extract certain values
// for example, every error has a code

  .catch(err => {
    // if error code is "ENOTFOUND" => host wasnt found 
    if (err.errno === 'ENOTFOUND') {
      // creates a url object so we can extract certain data
      // in this case all we want is the host, not the entire url
      let host = new URL(url).host;
      return console.error('curl: (6) Could not resolve host: ', host)
    }
  })






// NOW PUT IT IN A FILE
// in previous example we were just printing the response body into the terminal
// now we're taking it a step further
// the -o flag is used to specify a file to store the fetched content inside of
// data.txt will be the name of the file we create

let urls = opts._args
let url = urls[0]
const output = opts.output;

// node curl.js -o data.txt https://artii.herokuapp.com/make?text=curl++this



fetch(url)
  // still need to extract the response body 
  .then(res => res.text())
  // this is where this change
  .then(txtRes => {
    // we have our file name
    console.log(output)
    let fileName = output[0];

    // we have our response body 
    console.log(txtRes);

    // now we need to write the file and store the content inside
    return fs.promises.writeFile(fileName, txtRes )
  })
  .catch(err => {
    if (err.errno === 'ENOTFOUND') {
      let host = new URL(url).host;
      return console.error('curl: (6) Could not resolve host: ', host)
    } else {
      console.log(err)
    }
  })








// SETTING AN ARBITRARY HEADER

// Headers object allows you to store, retrieve, add, remove HTTP request/responsee headers
// can add new headers using .append() method

let headers = new fetch.Headers();

// parameters for fetch request 
const init = {
  method: 'GET',
  headers: headers
}

const arbHeaders = opts.header

if (arbHeaders) {
  arbHeaders.forEach(header => {
    let [key, val] = header.split(':')

    // trim strips white spaces
    // adding to our Headers object
    headers.append(key.trim(), val.trim())
  })
}

// terminal command: node curl.js -H headerKey:headerValue
// console.log(headers)






// SETTING SPECIAL HEADERS

const userAgent = opts.agent
if (userAgent) {
  headers.append('User-Agent', userAgent)
}

const referer = opts.referer
if (referer) {
  headers.append('Referer', referer)
}










// CAPTURING RESPONSE HEADERS
// if they use --dump_header flag
// we create a file which holds the response headers 

const dump = opts.dump_header

// terminal command: node curl.js --dump_header ./headers.txt https://artii.herokuapp.com/make?text=curl++this

fetch(url, init)
  .then(res => {
    let fileName = dump;
    // console.log(res)
    let statLine = `HTTP/1.1 ${res.status} ${res.statusText}\n`
    let headers = statLine
    res.headers.forEach((v, k) => {
      let header = `${k}: ${v}\n`
      headers += header
    })
    fs.promises.writeFile(fileName, headers)
  })
  .catch(err => {
    if (err.errno === 'ENOTFOUND') {
      let host = new URL(url).host;
      return console.error('curl: (6) Could not resolve host: ', host)
    } else {
      console.log(err)
    }
  })






// SENDING DATA

// if we've passed in data via -d flag, add to init options hash
if (opts.data) {
  init.body = opts.data
}

// OVERRIDING THE METHOD OF THE REQUEST

// if we've specified request method via -X flag, add to optionsh ash
if (opts.method) {
  init.method = opts.method
}


// terminal command: node curl.js -X 'POST' -d '{"title": "Sir", "name": "Robin"}' -H 'Content-Type: application/json' https://jsonplaceholder.typicode.com/posts


// fetch(url, init)
//   .then(res => {
//     // specified that content time will be json
//     return res.text()
//   })
//   .then(txtRes => console.log(txtRes))
//   .catch(err => {
//     if (err.errno === 'ENOTFOUND') {
//       let host = new URL(url).host;
//       return console.error('curl: (6) Could not resolve host: ', host)
//     } else {
//       console.log(err)
//     }
//   })









// PUT ALL TOGETHER

// terminal command: node curl.js -X 'POST' -d '{"title": "Sir", "name": "Robin"}' -H 'Content-Type: application/json' --dump_header ./header2.txt https://jsonplaceholder.typicode.com/posts

// console.log('url', url);
// console.log('dump', dump);

fetch(url, init)
  .then(res => {
    if (dump) {
      let statLine = `HTTP/1.1 ${res.status} ${res.statusText}\n`
      let headers = statLine
      res.headers.forEach((v, k) => {
        let header = `${k}: ${v}\n`
        headers += header
      })
      fs.promises.writeFile(dump, headers)
    }
    return res.text();
  })
  .then(textRes => {
    if (output) {
      let fileName = output[0];
      return fs.promises.writeFile(fileName, textRes)
    } else {
      console.log(textRes);
    }
  })
  .catch(err => {
    if (err.errno === 'ENOTFOUND') {
      let host = new URL(url).host;
      return console.error('curl: (6) Could not resolve host: ', host)
    } else {
      console.log(err)
    }
  })

