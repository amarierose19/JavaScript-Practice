  // Strings, Numbers, Boolean, Undefined, Null

  const name = 'john';
  const age = 30;
  
  //Concatenation addition (+ sign is the concatenation)
console.log('My name is ' + name + ' and i am '+ age );

//Template String 
const hello = (`My name is ${name} and I am ${age}`);

console.log(hello);


// s.split function
const s = 'technology, computers, it, code';

console.log(s.split(',') );


// ARRAYS - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

//add item to array
fruits.push('mangos');

// add item to the front of array
fruits.unshift('strawberries');

//removes last item from array
fruits.pop();

//check to see if there is an array or if it is an array
console.log(Array.isArray(fruits))

//Find index of certain items in array
console.log(fruits.indexOf('oranges'))

//calliing fruits
console.log(fruits);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA',
  }
}

//how to access values 
console.log(person.firstName, person.lastName);

// how to get specific values from objects and arrays
console.log(person.address.city); //or console.log(person.address[1])

//how to create variables and pull out objects- destructoring 
const {firstName, lastName, address: {city}} = person;

console.log(firstName, lastName, city);

// how to add new objects to array
person.email = 'john@gmail.com';

console.log(person)

const todos =  [
{
  id: 1,
  text: 'take out trash',
  iscompleted: true
},
{
  id: 2,
  text: 'Meeting with boss',
  iscompleted: true
},
{
  id: 3,
  text: 'Dentist appt',
  iscompleted: true
},
];

//how to log specific objects within a variable
console.log(todos[0].text);

//how to convert into JSON within the script/ how to send data to a server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// FOR LOOPS
for(let i = 0; i < 10; i++) {
  console.log(`For Loop number: ${i}`);
}

// WHILE
let i = 0;
while(i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// How to For Loop through Arrays
for(let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// Better way to For Loop through Arrays
for(let todo of todos) {
  console.log(todo.text)
}

// High order array methods: forEach, map, filter
// forEach allows you to Loop through array
todos.forEach(function(todo) {
console.log(todo.text);
});

// Map allows you to create new arrays from existing arrays/ target each index of the array
const todoText = todos.map(function(todo) {
  return todo.text;
  });
//console.log(todo.todoText);

// Filter allows you to create new arrays based on a condition
const todoCompleted = todos.filter(function(todo) {
  return todo.iscompleted === true;
  }).map(function(todo) { // How to chain on other array methods
    return todo.text;
  }); 

console.log(todoCompleted);

//CONDITIONALS
const x = 10;
const y = 10;

if(x === 10) {
  console.log('X is 10');
} else if(x > 10) {
  // if x is set to anything less the 10, the log will say "x is less than 10"
 console.log('X is greater than 10');
} else {
  console.log('x is NOT 10'); 
  //so if x changes from anything other than 10, it will show up not true
}

if(x > 5 || y > 10) {
  console.log('X is more than 5 or y is more than 10');
} else if(x > 10) {
  // if one of the variables are true it will be logged as true 
  // if you replace || with && (and) then both x and y must be true in order for it to be logged as true 
 console.log('X is greater than 10');
} else {
  console.log('x is NOT 10'); 
  //so if x changes from anything other than 10, it will show up not true
}

//terinary operator
const a = 10;

// '?' means then, ':' means else
const color = a > 10 ? 'red' : 'blue';

console.log(color);

//switches- another way to right if, else if, and else conditionals 

switch(color) {
  case 'red';
    console.log('color is red');
    break;
    case 'blue';
      console.log('color is blue');
      break;
      default:
        console.log('color is NOT or blue');
        break;
}

//FUNCTION 
function addNums(num1, num2) {
  return num1 + num2;
}

console.log(addNums(5, 4)); //if there are no numbers in the parameters, it will show NaN (not a number) in the concsole log

// Turn the about code into an arrow function
const addNums = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};

console.log(addNums(5, 4));

// or
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5, 4));

// or 
const addNums = num1 => num1 + 5;

console.log(addNums(5));

// example with .forEach 

todos.forEach((todo) => console.log(todo));

//OOP OBJECTED ORIENTED PROGRAMMING 

// CONSTRUCTOR FUNCTION

function Person(Namefirst, Namelast, dob) {
  this.Namefirst = Namefirst;
  this.Namelast = Namelast;
  this.dob = dob;
}

// INSTANTIATE OBJECT 

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');


console.log(person1); // shows the string of new person made above
console.log(person2);