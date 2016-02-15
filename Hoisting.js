/**
 * Created by Kasper on 14-02-2016.
 */
//Variable hoistng
// ReferenceError: noSuchVariable is not defined
console.log(noSuchVariable);

// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);


//Function hoisting
// Outputs: "Definition hoisted!"
definitionHoisted();
// TypeError: undefined is not a function
definitionNotHoisted();

function definitionHoisted() {
    console.log("Definition hoisted!");
}
var definitionNotHoisted = function () {
    console.log("Definition not hoisted!");
};
