
//by requiring my javascript file I now have access to the functions I exported
var myModule = require("./ReusableModules2.js");


//Displaying available functions
console.log(myModule);


// example

//use of the add two numbers
console.log(+myModule.addTwoNumbers(5,5));
