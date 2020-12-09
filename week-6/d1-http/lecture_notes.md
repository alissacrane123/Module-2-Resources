
# HYPERTEXT TRRNSFER PROTOCALL (HTTP) BASICS


Overview
- http is critical part of world wide web
- when you surf the web, your browser sends HTTP request messages 
  for HTML page, images, scripts, stylesheets
- web servers are responsible for handling these requests by returning
  response messages that contain the requested resources



Hypertext (HT)
- "content with references to other content"
- text, images, video, any digital content
- what makes the web the "web"
- html : hypertext markup language
- hyperlinks (links) : references betweeen hypertext resources
- ability to link HT is what makes interactivity possible



Transfer Protocall (TP)
- protocall: guidelines surrounding transmission of data
- defines process of exchanging data
- much more on this to come...




HTTP
- defines process of exchanging hypertext between systems
- works betweeen clients aand servers
	- client: data consumer, usually web browser
	- server: data provider, often where app is running
- typical HTTP exchange: request/response cycle
	- client sends request to server for particular resource(webpage, img, data)
	- server sends back a response containing reseource or explanation of why it failed


Properties of HTTP
1. reliable connections
	 - messages passed btwn client & server sacrifice speed for trust
	 - can rest assured each message will be confirmed
2. stateless transfer
	 - HTTP is stateless protocall, doesnt store any info
	 - each req you send acaross HTTP connection should contain all its own context
	 - only need to read single HTTP req to understaand its inteent
	 - HTTP supports cookies to keep track of stateful data
3. intermediaries
	 - other servers or devices that pass your request along
	 - proxies: may modify req so it appears to come from different source
	 - gateways: pretend to be the resource server you requested
	 - tunnels: simply pass req along
	 - when response is sent back, "their router" acts as proxy, "your router" acts as a gateway
	 * single server may act as any of the intermediary types, depending on need of HTTP message its transmitting




# HTTP REQUESTS


Overview
- the web is made up of computers asking each other for things
- you tell your browser which website you want to access
- your browser hands that reequeset off to a server that can get what you asked for



Structure of HTTP request
```

GET /profile HTTP/1.1
Host: appacademy.io
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9

```



HTTP Verbs
1. `GET`
   - used for direct requests
   - only require server to return resources, like retrieve website
   - never have a body, any data needed must be shared via the URI
2. `POST`
   - used for creating new resources on the server
   - can have body containing data server might need to complete request (username/passwrd)
3. `PUT`
   - used to update a resource on the server
   - contain whole resource you want to update
   - updating name request will contain new name and userId and email, etc
4. `PATCH`
   - similar to `PUT` but dont require whole resource to perform update
5. `DELETE`
   - destroys resources on the server



HTTP Request Structure
1. Request-line and http verbs
2. Headers
3. Body


Request-line & HTTP Verbs
- first line, made up of three parts
  1. the method, indicated by an HTTP verb
  2. the URI (uniform resources indicator) that identifies what we've requested
  3. the HTTP version we expect to use (usually HTTP/1.1 OR HTTP/2)
  ex: `GET / HTTP/1.1`



Headers
- key/value pairs that come after request line
- control how request is processed by the server
- appear on separate lines and define metadata needed to process request
- common request headers:
  * `Host`: root path for our URI, domain we'd like to request resources from (`Host: appacademy.io`)
  * `User Agent`: info about which browser request originated from (`User-Agent: Chrome/76.0.3809.132 Safari/537.36`)
  * `Referer`: defines URL you're coming from
  * `Accept`: indicates what client can accept, commin use is `Accept: application/json` to get response in json
  * `Content-*`: define details about body of request (`Content-Type: application/json` tells format were sending body data in)


Body
- used to send data that doesn't fit in header & is too complex for URI
- comes right after headers and can be formatted multiple ways
- URL encoding: common way to format form data (ex: `name=claire&age=29&iceCream=vanilla`)
- rememeber to set `Content-Type` header so server knows how to interpret body


Sending HTTP Request from command line
- mostly discuss http requests in context of web browser but mnany different http clients you can use
- `netcat` or `nc` is utility that comes with environments like macOS
  * allows us to open direct connection with URL and manually send HTTP requests
- from command line: `nc -v appacademy.io 80`




# HTTP Responses


Structure of a response
- formatted similarly to requests
- status-line (instead of request line)
- headers: provide helpful metadata about response
- response body: representation of requested resources


Status Line
- high level overview of server's intention
- HTTP status codes: 3 digit code representing servers response
  * 100-199: informational
  * 200-299: successful
  * 300-399: redirection (there has been a change)
  * 400-499: client error (issue with request)
	  - 404: not found
		- 403: forbidden
  * 500-599: server error ("its not you its me")


Headers
- work identically to those on requests
- pieces of data server/client need to communicate
- common headers
  * `Location`: contain url client should redirect to for redirection responses
  * `Content-type`: tells client what format body is in
  * `Expires`: when response should be considered no longer valid (lets your client cache response)
  * `Set-Cookie`: sends data back to client to set  on the cookie (key/value pairs assoc. with server's domain)


Body
- assuming successful request, contains the resource youve  requested
- format of body dictated by `Content-Type` header
  * if you accidentally configure server to send `application/json` with body containing HTML, HTML wont render correctly


Using custom servers to generate responses
- web server is just a tool to generate HTTP responses




# REQUEST / RESPONSE IN THE BROWSER



letter example
- when you write letter to friend
	- put letter in envelope
	- with return address
	- with recipient address
	- postal service responsible for delivering
- when received, recipient sends letter back



![req-res](./images/req-res.png)

1. client makes a req 
- req line contains http verb, protocal version
- headers so server has data it needs to process request
- body to transmit any additional data that is necessary



2. request transmitted 
- crosses proxies, tunnels gateways
- eventually reaches server



3. server processes request
- uses headers and body
- returns response, similar to reqest you sent
- instead of req line, uses status line
- contains status code, and reason phrase
	- tells client result of req
- contains headers so client can process resp
- any resources requested in body 



HTTP is stateless
- single req returns single res
- see multiple req
	- every webpage is dependent on other resources
	- when page is loaded by browser, browser sends req to fill requirements
	- img, script, styles, etc. are separate http req




# BUILDING SIMPLE SERVER


other frameworks use node http under the hood