//FUNCTIONAL LOOPING METHODS - MAP, REDUCE, FILTER

const fruits = ['apple', 'banana', 'blueberry'];

//PRINTING OUT FRUITS USING THE MAP METHOD
console.log(fruits.map(fruit => fruit));
//PRINTING OUT EVERY FRUIT SEPERATELY
fruits.map(fruit => console.log(fruit));

//CREATING A NEW ARRAY WITH COPIED ELEMENTS W/ SOME CHANGES
const copiedFruits = fruits.map(fruit => {
    return {fruit, delicious: "YESSSS"}
});
console.log(copiedFruits);

const people = [
    {
        name: "David",
        age: 50
    }, 
    {
        name: "Anders",
        age: 50
    }
];

//REDUCE LOOP
const peopleAgeSum = people.reduce((accumulator, person) => accumulator + person.age);
console.log(peopleAgeSum);