
//GLOBAL
//In the GLOBAL execution context (outside of any function), this refers to the global object,
// whether in strict mode or not.

console.log(this.document === document); // true

//Function
// Inside a FUNCTION, the value of this depends on how the function is called.
// In this case, the value of this is not set by the call. Since the code is not in strict mode,
// the value of this must always be an object so it defaults to the global object.

function f1(){
    return this;
}
f1() === window; // global object


// CALL ORE APPLY
// Where a function uses the this keyword in its body, its value can be bound to a particular
// object in the call using the CALL ORE APPLY methods that all functions inherit from Function.prototype.

function add(c, d){
    return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34


//BIND
// Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs
// in the original function, in the new function it is permanently bound to the first argument of bind,
// regardless of how the function is being used.

function f(){
    return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty