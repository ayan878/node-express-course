// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

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

// ####################################################################################

const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// The os.uptime() method in Node.js returns the system uptime in seconds. It indicates the number of seconds the system has been running since it was last restarted or booted.
console.log(`The System Uptime is ${os.uptime} seconds`);

//
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
