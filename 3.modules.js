// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const ayan = "ayan";
const raza = "raza";

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};
sayHi("Ayan");
sayHi("ayan");
sayHi("raza");

// module - it is also an object which has some properties {id:'.',path:"",export:{},filename:" ",children:[],paths:[' ']}
console.log(module);
