var http = require('http')
var fs = require('fs')
var url = require('url')
var app = http.createServer(function(request , response){
    var _url = request.url
    var queryData = url.parse(request.url, true).query;
    var title = queryData.id
    let  body ;
    fs.readFile(`./설명/${title}`, 'utf8', (err, data) => {
        body = data
        var template = `
                    <html>
                    <head>
                        <title> node.js 수업  </title>
                    </head>
                    <body>
                        <h1>home </h1>
                        <ul>
                            <li> <a href="/?id=html"> html  </a> </li>
                            <li> <a href="/?id=css"> css </a></li>
                            <li> <a href="/?id=javascript"> javascript </a></li>
                        </ul>
                        <p> html is ~~~ </p>
                        <p> ${body} </p>
                    </body>
                </html>`
        response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
        response.end(template) 
    });
})
app.listen(3000)