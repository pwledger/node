const fs = require('fs')


var data = fs.readFileSync('./hi/test.txt' , 'utf-8')
console.log(data)

fs.writeFileSync('./hi/test.txt',"김수민:123")

var data = fs.readFileSync('./hi/test.txt' , 'utf-8')
data = data.split(':')
console.log(data)