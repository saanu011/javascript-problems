var fs = require("fs");

// reading the input file
var items = Number(fs.readFileSync("/test/javascript-assignment/problem-1/input1.txt")); // reading from this location

var seconds = items % 60

items -= seconds
items /= 60

var minutes = items%60

items -= minutes
items /= 60

var hours = items

// output on console
console.log(`Hours = ${hours}, minutes = ${minutes}, seconds = ${seconds}`)

// output file
fs.writeFile('/test/output1.txt',`Hours = ${hours}, minutes = ${minutes}, seconds = ${seconds}` , (err) => { 
      
    if (err) throw err; 
})

