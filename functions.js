
function myFirstFunction(greet) {
    return greet;
}
console.log(myFirstFunction("Greetings!!!"));


//HAS TO BE A CONST
const myVariableFunction = function() {
    console.log("Hello there...FROM AN ANONYMOUS FUNCTION");
};
myVariableFunction();


//HAS TO BE A CONST
const myArrowFunction = () => {
    console.log("F... you!!! FROM AN ARROW FUNCTION");
}
myArrowFunction();


//CALLBACK FUNCTION -- CALLS A FUNC INSIDE A FUNC
function sayHiLater(anyFunctionReference) {
    //simulates some code running
    //takes some time...
    //and more time...
    anyFunctionReference();
};
const sayHi = () => {
    console.log("Hi...")
};
sayHiLater(sayHi);


//ANOTHER WAY... -- FOR CALLBACK FUNC
function sayAnything(someFunc) {
    someFunc = () => {};
}
sayAnything(console.log("Another greet!"));


function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
};

/*function poke(s) {
    return "Poke " + s;
};*/

const poke = (s) => {
    return "Poke " + s;
};

interact(poke, "David");
interact(poke, "Marko");
interact((hug = (s) => {return "Hug " + s}), "Napster");
interact((s) => "Hug " + s, "me :((");