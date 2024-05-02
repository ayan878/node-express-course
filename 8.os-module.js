const path = require("path");

console.log(path.sep); // result forward slash /

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath); // \content\subfolder\text.txt

const base = path.basename(filePath);
console.log(base); // text.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
