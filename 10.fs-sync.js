// File Module  fs (there are two flavour 1. synchronouse:non blocking ,2. asynchronous:bloking )

// The fs module in Node.js provides an API for interacting with the file system. It offers both synchronous and asynchronous methods for file operations, each with its own characteristics:1. synchronouse:non blocking ,2. asynchronous:bloking

// Synchronous
const { readFileSync, writeFileSync } = require("fs");
const { isUtf8 } = require("buffer");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// writeFileSync('path','value','optional:'a':append)
writeFileSync(
  "./content/result-sync.txt/",
  `Here  is the result : ${first},${second}`,
  { flag: "a" }
);
