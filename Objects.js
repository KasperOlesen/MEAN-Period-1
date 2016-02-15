/**
 * Created by Kasper on 14-02-2016.
 */

// 1)
//Create an object with four different properties
var person = {name:"Kasper", sex:"male", hobby:"Computers", email: "Kasper@whatever.dk"};

//Showing that we cant iterate over the properties
for (property in person){
    console.log(property);
}
//Check to see if person has the hobby property
console.log("Is hobby a property: " +person.hasOwnProperty("hobby"));


//Deleting a property and iterating to show the results
delete person.hobby;
for (property in person){
    console.log(property);
}
//Check to see if person still has the hobby property
console.log("Is hobby a property: " +person.hasOwnProperty("hobby"));

// 2)
//Create a constructor function to create new Persons
//In this case I dont wanna create new persons
//I want to create new MEN!

function Man(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getInfo = function(){
        return this.firstName + " " + this.lastName + " " + this.age ;
    };
}
var myDad = new Man("Tonny", "Bonde", "33"); //Observe new
console.log(myDad.getInfo());

// 3)
// Create an object and list all properties using Object.getOwnPropertyNames(o)
console.log(Object.getOwnPropertyNames(person));