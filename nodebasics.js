const {EventEmitter} = require("events");
const {readFile,readFileSync} = require("fs");

const eventEmitter = new EventEmitter();

eventEmitter.on("helloworld",function () {
    console.log("helloworld");
})

eventEmitter.emit("helloworld");
eventEmitter.emit("helloworld");

//An asynchronous operation
readFile("./hello.txt","utf8",(err,text) => {
    console.log(text,"text from file operation");
})

//Synchronous operation
const text = readFileSync("./hello.txt","utf-8");

console.log(text,"text from synchronous operation");

console.log("logging after the file operation");