var http = require('http')
var fs = require('fs')
var app = http.createServer(function(request , response){
    var template = 
    `
    <html>
    <head>
        <title>김수민</title>
    </head>
    <body>
        <h1>노드js</h1>
        <p> 첫 번째 강의</p>
    </body>
    </html>
    `
    if(request.url == "/"){
        url = '/index.html'
    }
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end(fs.readFileSync(__dirname+url))
})
app.listen(3000)