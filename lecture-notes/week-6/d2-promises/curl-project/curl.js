// Use Promises to write more maintainable asynchronous code
// Use the fetch API to make Promise - based API calls

// lightweight option parsing library
const dash = require("dashdash");
const fetch = require("node-fetch");
const fs = require("fs");

const options = {
  allowUnknown: true,
  options: [
    {
      // first argument in names array is `opts.KEY`
      // whatever follows flag is what will be stored at key "output"
      names: ["output", "o"],
      type: "arrayOfString",
      help: "file in which to store fetched content",
    },
    {
      names: ["header", "H"],
      type: "arrayOfString",
      help: "an arbitrary header to set on the fetch",
    },
    {
      names: ["agent", "A"],
      type: "string",
      help: "sets user agent header",
    },
    {
      names: ["referer", "e"],
      type: "string",
      help: "sets the URL of the referer header",
    },
    {
      names: ["dump_header", "dh"],
      type: "string",
      help: "the file to which response headers should be dumped",
    },
    {
      names: ["data", "d"],
      type: "string",
      help: "data to send in body of request",
    },
    {
      names: ["method", "X"],
      type: "string",
      help: "set the HTTP method to use in fetch",
    },
  ],
};

const parser = dash.createParser(options);

// all of the options provided
const opts = parser.parse(options);

let urls = opts._args;

let url = urls[0];

const output = opts.output;






// JUST GETTING A URL

// terminal command: node curl.js https://artii.herokuapp.com/make?text=curl++this

// console.log('opts', opts)
// console.log('urls', urls)
// console.log('url', url)

// fetch(url)
//   .then(res => res.text())
//   .then(txtRes => console.log(txtRes))
//   .catch(err => console.log(err))









// JUST FAILING TO GET URL
// terminal command: node curl.js https://artii.herokuFLAP.com/make?text=curl++this

// error message we want = "curl: (6) Could not resolve host:  artii.herokuflap.com"

// fetch(url)
//   .then(res => res.text())
//   .then(txtRes => console.log(txtRes))
//   // .catch(err  => console.log('curl error:', err))
//   .catch(err => {
//     if (err.code === 'ENOTFOUND') {
//       let host = new URL(url).host;
//       return console.error('curl: (6) Could not resolve host: ', host)
//     }
//   })








// NOW PUT IT IN A FILE
// command: node curl.js -o data.txt https://artii.herokuapp.com/make?text=curl++this

// fetch(url)
//   .then(res => res.text())
//   .then(txtRes => {
//     console.log(txtRes)
//     let fileName = output[0];
//     console.log(fileName)

//     return fs.promises.writeFile(fileName, txtRes )
//   })
//   .catch(err => console.log('curlError:', err.message))








// SETTING AN ARBITRARY HEADER

// Headers object allows you to store, retrieve, add, remove HTTP request/responsee headers
// can add new headers using .append() method

let headers = new fetch.Headers();

// parameters for fetch request
const init = {
  method: "GET",
  headers: headers,
};

const arbHeaders = opts.header;

if (arbHeaders) {
  arbHeaders.forEach((header) => {
    let [key, val] = header.split(":");

    // trim strips white spaces
    // adding to our Headers object
    headers.append(key.trim(), val.trim());
  });
}

// terminal command: node curl.js -H headerKey:headerValue
// console.log(headers)









// SETTING SPECIAL HEADERS

const userAgent = opts.agent;
if (userAgent) {
  headers.append("User-Agent", userAgent);
}

const referer = opts.referer;
if (referer) {
  headers.append("Referer", referer);
}







// CAPTURING RESPONSE HEADERS

const dump = opts.dump_header;

// HTTP / 1.1 200 OK
// Connection: keep - alive
// Content - Type: text / plain
// Content - Length: 319
// Server: Goliath
// Date: Tue, 03 Feb 2019 05: 52: 55 GMT
// Via: 1.1 vegur

// terminal command: node curl.js --dump_header ./headers.txt https://artii.herokuapp.com/make?text=curl++this

// fetch(url, init)
//   .then(res => {
//     let fileName = dump;
//     let statLine = `HTTP/1.1 ${res.status} ${res.statusText}\n`
//     // console.log(statLine)
//     // console.log(res.headers)
//     let headers = statLine
//     res.headers.forEach((v, k) => {
//       let header = `${k}: ${v}\n`
//       console.log(header)
//       headers += header
//     })
//     fs.promises.writeFile(fileName, headers)
//   })
//   .catch(err => console.log('curlError: ', err.message))











// SENDING DATA
// terminal command: node curl.js -X 'POST' -d '{"title": "Sir", "name": "Robin"}' -H 'Content-Type: application/json' https://jsonplaceholder.typicode.com/posts

// if we've passed in data via -d flag, add to init options hash
if (opts.data) {
  init.body = opts.data;
}






// OVERRIDING THE METHOD OF THE REQUEST

// if we've specified request method via -X flag, add to optionsh ash
if (opts.method) {
  init.method = opts.method;
}

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

// fetch(url, init)
//   .then(res => {
//     if (dump) {
//       let statLine = `HTTP/1.1 ${res.status} ${res.statusText}\n`
//       let headers = statLine
//       res.headers.forEach((v, k) => {
//         let header = `${k}: ${v}\n`
//         headers += header
//       })
//       fs.promises.writeFile(dump, headers)
//     }
//     return res.text();
//   })
//   .then(textRes => {
//     if (output) {
//       let fileName = output[0];
//       return fs.promises.writeFile(fileName, textRes )
//     } else {
//       console.log(textRes);
//     }
//   })
//   .catch(err => {
//     if (err.errno === 'ENOTFOUND') {
//       let host = new URL(url).host;
//       return console.error('curl: (6) Could not resolve host: ', host)
//     } else {
//       console.log(err)
//     }
//   })
