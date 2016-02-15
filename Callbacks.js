/**
 * Created by Kasper on 14-02-2016.
 */

// 1) Using existing functions that takes a callback as an argument

var names = ["Lars", "jan", "Peter", "Bo", "Frederik"];

//Filter
//Creating a filter method
var isBiggerThan = function(input){
    return input.length <= 3;
}
//Filtering the array through the method
var filtered = names.filter(isBiggerThan)

//Printing output
console.log("1) Original: " +names);
console.log("1) Filtered: " +filtered);

//Map
//Creating toUpperCase method
var upperCase = function(element){
    return element.toUpperCase();
}
//Mapping the array through the method
var mapped = names.map(upperCase);

console.log("1) Mapped:   " +mapped);
console.log("");


// 2) Implement userdefined functions that take callbacks as an argument
//The new filter function
function myFilter(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

//Calling my new filtered function with the names array and isBiggerThan function
var newFiltered = myFilter(names, isBiggerThan);

console.log("2) Original: "  + names);
console.log("2) Filtered: " + newFiltered);

//The new map function
function newMap(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

//Calling my new map function with the names array and upperCase function
var myMapped = newMap(names, upperCase);

console.log("2) Mapped:   " + myMapped);
console.log("");

// 3) Prototyping

//The new filter function
//The difference from the other filter function
//is that now we are using this, because we dont
//get the array as an argument anymore.
function prototypeFilter(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i]) === true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

Array.prototype.myFilter = prototypeFilter;
var prototypeFiltered = names.myFilter(isBiggerThan);

console.log("3) Original: " + names);
console.log("3) Filtered: " + prototypeFiltered);

//The new map function
//Same difference as with the filter function
function prototypeMap(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}

Array.prototype.myMap = prototypeMap;
var prototypeMapped = names.myMap(upperCase);

console.log("3) Mapped:   " + prototypeMapped);


//4) More user defined functions with callbacks
console.log("4) ");

var a = [1, 2, 3];
var b = [1, 2, 3];

var result = function(res) {
    console.log(res.join(","));
};


function handleNumArrays(na1, na2, callback) {
    var length = a.length;
    var nums = [];
    for (var i = 0; i < length; i++) {
        nums.push(na1[i] + na2[i]);
    }
    callback(nums);
}

handleNumArrays(a, b, result);

var sum = function (res) {
    var total = 0;
    for (var i = 0; i < res.length; i++) {
        total += res[i];
    }
    console.log(total);
    return total;
};

handleNumArrays(a, b, sum);

var multi = function (res) {

    var multiplied = res.map(function (element) {
        return element * 10;
    });
    console.log(multiplied.join(","));
};

handleNumArrays(a, b, multi);
