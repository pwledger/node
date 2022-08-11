var http = require('http')
var fs = require('fs')
var app = http.createServer(function(request , response){
    fs.readdir("./hi" , 'utf-8' , (err , data)=>{
        flist = data
        console.log(data)
        var s 
        for (var i = 0 ; i < 2 ; i++){
            fs.readFile('./hi/'+ data[i], 'utf8' ,(err, data) => {
                console.log(data)   
                s += data
            })
        }
        
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end(s)
    })

})
app.listen(3000)