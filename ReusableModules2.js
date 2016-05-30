
//    When you import (require() )  it you can assign the returned object to a variable
//    and use it again and again.

//    Note!
//    -----
//if you are importing a local file you should type the local folder literal before you files name
//like this : require("./myFile.js");
//THIS EXAMPLE!!!!

//        In this example I will make a reusable module in this file and require it in
//        ReusableModules.js



function myHiddenFunction(a,b){
    return a+b;
}
var exports = module.exports = {
    addTwoNumbers: function (a, b) {
        return myHiddenFunction(a, b);
    }
};