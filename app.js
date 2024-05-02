// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { Module } = require("module");

// const names = require("./4.name");
// // destructuring
// const { john, peter } = require("./4.name");

// const sayHi = require("./5.utils");
// const data = require("./6.alternative-flavour");
// require("./7.mind-granade");

// console.log(names);
// sayHi("Ayan");

// // call by using properties
// sayHi(names.john);
// sayHi(names.peter);

// // call direct with help of destructing
// sayHi(john);
// sayHi(peter);

// console.log(data); // { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

// #########################################################################################################################################

// // OS Module
// const os = require("os");

// // info about current user
// const user = os.userInfo();
// console.log(user);

// // The os.uptime() method in Node.js returns the system uptime in seconds. It indicates the number of seconds the system has been running since it was last restarted or booted.
// console.log(`The System Uptime is ${os.uptime} seconds`);

// //
// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

// ############################################################################################################################################

// // File Module  fs (there are two flavour 1. synchronouse:non blocking ,2. asynchronous:bloking )

// // The fs module in Node.js provides an API for interacting with the file system. It offers both synchronous and asynchronous methods for file operations, each with its own characteristics:1. synchronouse:non blocking ,2. asynchronous:bloking

// // Synchronous
// const { readFileSync, writeFileSync } = require("fs");
// const { isUtf8 } = require("buffer");
// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

// // writeFileSync('path','value','optional:'a':append)
// writeFileSync(
//   "./content/result-sync.txt/",
//   `Here  is the result : ${first},${second}`,{flag:'a'}
// );

// Asynchronous
const { readFile, writeFile, writeFileSync } = require("fs");
const { error } = require("console");

readFile("./content/first.txt", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
// result <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 73 74 20 66 69 6c 65>

// A buffer in Node.js is a temporary storage area in memory used to hold data while it is being transferred from one place to another. It is particularly useful when dealing with binary data, such as reading from or writing to files, network sockets, or interacting with streams.

// To convert this buffer into a human-readable string, you can use the toString() method:
const buffer = Buffer.from("hello this is first test file");
console.log(buffer.toString());

// To overcome these problem we have to specify 'utf-8' as second argument in readFile()
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "/content/result-async.txt",
      `Here is the result: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
