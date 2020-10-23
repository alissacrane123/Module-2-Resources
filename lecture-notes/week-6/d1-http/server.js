// construct framework for very simple webserver
// could expand to include many other response codes


// built into node runtime, dont need to npm install
const http = require('http');
const fs = require('fs')

// accepts function that takes request & response params
// http server lives between req from client & res server sends
// inside func is where we will construct the res we will send back to client
const server = http.createServer(function(request, response) {
	
	// request.url returns resource requested by client
	// sets up route for requested resource, "/200"
	if (request.url === '/200') {
    // console logs will show up in server terminal
    // console.log(request)

    // response.writeHead(statusCode, headersObject)
    // use to set response code sent back
    // use to set content type being sent back (webpage)
    response.writeHead(200, { "Content-Type": "text/html" });

    // add simple html content to body
    // reason for code 200 is 'OK'
    response.write("<h1>OK</h1>");

    // can be called multiple times
    response.write("<h1>Hello world</h1>");

  // sets up route for requested resource, "/dog"
  } else if (request.url === '/dog') {

		// reads file and returns content
		// accepts path to content as an argument
		let img = fs.readFileSync('./images/dog1.jpg');

		// set the content type to image
		response.writeHead(200, { 'Content-Type': 'image/jpg' })

		// send image in request body 
		response.write(img);

	} else {

		// universal code for not found is 404
		// no additional meta data needed
		response.writeHead(404);
	}

	// close the response
	// if you dont close, browser will wait and wait, eventually timeout
	response.end()
})

const port = 8080

// tell our server to listen for requests on port 8080
server.listen(port, () => {
	console.log(`Listening for requests on port ${port}`)
})



// netcat is command line tool used for reading & writing data across network
// - use to send request to server to see if it is running

// command: nc localhost 8080`
// - nc: netcat command
// - localhost: reference for local system
// - 8080: port number


// follow up with request line 
// - ex: GET /200 HTTP/1.1


// can alternatively navigate to `localhost:8080/200` to view response