var http = require('http');
var fs = require('fs');
var url = require('url');
function templates(title ,description){
    var s = `
    <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ul>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>  
    `
    return s
}
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    if(queryData.id === undefined){
        var template = templates("wellcom" ," 각 각 내용에 대한 설명");
        response.writeHead(200);
        response.end(template);
    }
    else if(pathname === '/'){
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
        var template = templates(title ,description);
        response.writeHead(200);
        response.end(template);
      });
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
 
});
app.listen(3000);   