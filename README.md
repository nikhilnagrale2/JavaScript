# JavaScript Zero To Expert

## Fundamentals Part 1

- How to open console in browser – Ctrl+ shift + J or right click+ inspect or go to view-> developer ->console

```js
alert("Hello World");
let jess = "Amazing";
if (jess === "Amazing") alert("JavaScript is fun");
let name = prompt("who are you?");
```

---

### What is JavaScript

1. High Level, Object Oriented, Multi Paradigm Programming Language
2. High Level – we don’t have to worry about complex stuff like memory management
3. Object Oriented – Based on Objects for storing most kinds of data
4. Multi Paradigm – we can use different styles for programming
5. Programming Language – Instruct Computer to do Things

---

### The Role of JavaScript

- Core of website - HTML CSS JS
- HTML - content
- CSS - presentation
- JS - Programming Language

---

### How to add JS in HTML

```js
<script>
  let js = 'amazing'; if(js === 'amazing') alert('JavaScript is FUN!");
</script>
```

---

### Command to Output Something on Console

```js
console.log("Write here anything");
```

---

### Inline Vs External Script

- In most cases, having JavaScript external is still recommended. But for certain cases, especially very small pieces of code, inlining them into the site’s HTML makes sense.

---

### How to Attach JS file to HTML

```js
<script src="script.js"></script>
```

---

### Why `<script>` tags should be placed at the end of body tag?

- As we know that HTML is loaded and executed line by line. So, when the browser encounters a `<script>` tag, it loads and executes the javascript code on the spot. This may slow down the page rendering speed and thus webpage will take more time to load.

---

### Values and Variables

- JavaScript uses reserved keyword var or let to declare a variable. A variable must have a unique name. You can assign a value to a variable using equal to (=) operator.

#### Naming Conventions

- camelCase - camelCase is useful in programming since element names cannot contain spaces. The camelCase naming convention makes compound names more readable.

1. Variable names cannot contain spaces.
2. Variable names must begin with a letter, an underscore (\_) or a dollar sign ($).
3. Variable names can only contain letters, numbers, underscores, or dollar signs.
4. Variable names are case-sensitive.
5. Certain words may not be used as variable names, because they have other meanings within JavaScript. Check out this complete list of the reserved words.

- All capital letter names must be used for constants.
- First letter capital must be used for OOP in Javascript.

[Reserved Words in Javascript](https://www.dummies.com/web-design-development/javascript/javascript-for-kids-for-dummies-cheat-sheet/)

---

### Primitive Data Types

1. Number - Floating point numbers used for decimals and integers.
2. String - Sequence of characrer used for text.
3. Boolean - Logical type that can only be true or false used for taking decisions.
4. Undefined - Value taken by a variable that is not yet defined(empty value).
5. Null - Also means empty value.
6. Symbol - Value that is unique and cannot be changed [Not useful for now].
7. BigInt - Larger integers than the Number type can hold.

- Javascript has dynamic typing - We do not have to manually define the data type of the value stored in a variable. Insead, data types are determined automatically.
- **Value has type, NOT variable.**

---

### Commenting a code

```js
// It is a comment
/* 
It is multiline comment
*/
```

---

### typeof Operator

- The typeof operator returns the data type of its operand in the form of a string. The operand can be any object, function, or variable. Syntax: typeof operand. OR typeof (operand).
- A bug in JavaScript, `typeof null` is null but it shows object.

---

### let, const and var

[Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/#:~:text=var%20declarations%20are%20globally%20scoped%20or%20function%20scoped%20while%20let,the%20top%20of%20their%20scope.)

---

<!-- ### Hoisting -->

### Basic Operators

- Mathematical - (-)(\*)(+)(/)(**) - ** is power
- Concatenate two string using +
- typeof Operator
- Assignment Operators = += ++ --
- Comparison Operators < > <= >=.

  [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---

### Strings and Template Literals

[Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```js
console.log(`Template Literal ${504-34}`);

A bug in JS
console.log('String with \n\
mulitple \n\
lines');

console.log(`String
multiple
lines with template string`);
```

---

### If else statements

[if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

```js
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// expected output: "NOT positive"
```

---

### Type Conversion and Coercion

[JavaScript type coercion explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)

[JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)

---

### Truthy and Falsy Values

- 5 Falsy values => 0, '', undefined, null, NaN.
- This values get converted to false when we try to Type cast them in Boolean value.
- other than those all are truthy values.

  [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

  [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

---

### Equality Operators == and ===

- [Equality (==)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

- [Strict equality (===)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

---

### Boolean Logic

- & - and
- | - or
- ~ - not

---

### Logical Operators

- && - and
- || - or

---

### The Switch Statement

```js
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

---

### The Conditional ( Ternary ) Operator

[Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
let greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

---

---

---

---

---

## Fundamentals Part 2

### Strict Mode

```js
"use strict";
```

[Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

---

### Functions

```js
// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
```

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

### Function Declarations Vs. Expressions

```js
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
```

- In JavaScript, however, functions are not only syntax but also values, which means they can be assigned to variables, stored in the properties of objects or the elements of arrays, passed as arguments to functions, and so on.

- A function declaration can be called before initialization. (Hoisting)

---

### Arrow Functions

[Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```js
// Traditional Function
function (a, b) {
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

---

### Functions Calling Other Functions

```js
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
```

---

### Introduction to Arrays

[Array MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
// Introduction to Arrays
// Array Declaration
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "Jonas";
//  Array inside array
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);
```

---

### Basic Array Operations

[Array Instance Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

```js
//  Create an Array
let fruits = ["Apple", "Banana"];
console.log(fruits.length); // 2

//  Access an Array item using the index position
let first = fruits[0]; // Apple
let last = fruits[fruits.length - 1]; // Banana

//  Loop over an Array
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

//  Add an item to the end of an Array
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

//  Remove an item from the end of an Array
let last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"]

//  Remove an item from the beginning of an Array
let first = fruits.shift(); // remove Apple from the front
// ["Banana"]

//  Add an item to the beginning of an Array
let newLength = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"]

//  Find the index of an item in the Array
fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf("Banana"); // 1

//  Remove an item by index position
let removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Mango"]

//  Remove items from an index position
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1;
let n = 2;

let removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]

//  Copy an Array
let shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]

//  how to check specific element is present in array
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
```

---

### Introduction to Objects

[Object MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- Array is an object too.

```js
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
```

---

### Dot Vs. Bracket Notation

[Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

```js
// Dot vs. Bracket Notation
const person1 = {};
person1["firstname"] = "Mario";
person1["lastname"] = "Rossi";

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
  firstname: "John",
  lastname: "Doe",
};

console.log(person2["lastname"]);
// expected output: "Doe"

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
```

---

### Object Methods

```js
// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
```

---

### This Keyword

- this is equal to object calling the method

  [this MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

---

### Loops and Iterations

[Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

- [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

- [do...while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

- [while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

- [label statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

- [break statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

- [continue statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

- [for...in statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

- [for...of statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

- loop in loop

```js
for (let exercise = 4; exercise >= 1; exercise--) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
```

---

### Math Object in Js

[Math Object in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

### Debugging and Tips VS Code

- alt + down arrow key => move your line up
- alt + up arrow key => move your line down
- ctrl + d => select next occurence
- prettier extension
- format on save
- npm live-server
- Google StackOverflow MDN
- Debugging Debugger in chrome
- console.table
- console.warn
- console.error
- debugger keyword
- ctrl + k - clear terminal

---

---

---

---

---

## DOM and Events Fundamentals

### What's the DOM and DOM manipulation

- **Document Object Model** - Structutred representation of HTML documents. Allows javascript to access html elements and styles to manipulate them.
- can change text, HTML attributes, and even CSS styles.
- Tree Structure, generated by browser on HTML load.
- DOM Methods and Properties for DOM Manipulation are not part of JS
- DOM Methods and Properties WEB API's

---

### Selecting and Manipulation Elements

- [Manipulating Documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

- querySelector(.class or #id)
- querySelectorAll(.class or #id) // nodelist
- .textContent
- .src for img
- .value for input likewise experiment and learn
- getElementByID(id)
- document.createElement()
- Node.appendChild()
- createTextNode()

---

### Handling Events

- [Handling Events in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

- addEventListener(type,function);
- type - keypress, keyup, keydown, click, etc.
- event object can be accessed in event handler function => function (event)

---

### Manipulation CSS Styles

- [Manipulating Styles](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#manipulating_styles)

- [Dynamic Styling](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

- .style.cssPropertyName (propertyName should be in camelCase)(Inline Style)
- .setAttribute()
- .removeAttribute()
- .getAttribute()
- .hasAttribute()
- [Element Attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

---

### Working with Classes

- .classlist.remove() // multiple classes can also be added with , and no need to add . with classname
- .classlist.add()
- .classlist.contains() // contains class or not
- .classlist.toggle() // toggle

---

### Refactoring - DRY Principle

---

---

---

---

---

## How JavaScript works behind the scenes

### High Level Overview

- Javascript is a High-Level, Prototype-Based, Object-Oriented, Multi-Paradigm, Interpreted or Just in time compiled, Dynamic, Single Threaded, Garbage Collected programming language with First-class functin and a non-blocking event loop concurrency model.

- Garbage Collected - [Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

- Interpreted or just-in-time compiled = [Just-in-time compilation](https://www.wikiwand.com/en/Just-in-time_compilation)

- Paradigm = An approach and mindset of structuring code, which will direct your coding style and technique. (Imperative vs. Declarative).

1. Procedural Programming
2. Object Oriented Programming (OOP)
3. Functional Programming (FP)

- Prototype-based object-oriented = Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.

- First-class Functions = In a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and return them from functions.

- Dynamic = JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

- [Concurrency model and the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

---

### The JavaScript Engine and Runtime

- JavaScript Engine => The JavaScript engine is an interpreter that parses and executes a JavaScript program.(Google's - V8 Engine)
- Compilation Vs. Interpretation
  - Compilation: Entire code is converted into machine code at once, and written to a binary file that can be excecuted by a computer.
  - Interpretation: Interpreter runs through the source code and executes it line by line.
- Just-in-time(JIT) compilation: Entire code is converted into machine code at once, then executed immediately.
- [Parsing and AST](https://javascript.plainenglish.io/javascript-parsing-and-code-execution-f92a08498ec1)
- compilation Execution and Optimization
- Javascript Runtime
- Web API
- Heap, CallBack, Callback Queue, Event Loop

---

### Execution Contexts and The Call Stack

#### What is an execution context?

- Creation of Global Execution context(for top level code)
- Execution Context: Environment in which a piece of JavaScript is executed. Stores all necessary information for some code to be executed.
- Execution of top-level-code(inside global EC)
- Execution of functions and waiting for callbacks
- Exactly one global execution context (EC):
  Default context, created for code that is not inside any function(top-level).
- One execution context per function: For each function call, a new execution context is created. All together make the call stack

#### What's Inside Execution Context

- generated during "creation phase", right before execution

1. Variable Environment

- let, const and var declarations
- functions
- arguments object (Not in arrow function)

2. Scope chain
3. this keyword - (Not in arrow function)

---

### Scope and Scope Chain

- Scoping: How our program's variables are organized and accessed.
- Lexical Scoping: Scoping is controlled by placement of functions and blocks in the code.
- Scope: Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope, and block scope.
- Scope of a variable: Region of our code where a certain varible can be accessed.

#### The 3 types of Scope

- Global Scope: Variable declared in global scope are accessible everywhere.
- Function Scope: Variables are accessible only inside function, not outside. Also called local scope.
  var is function scoped.
- Block Scope: Variables are accessible only inside block(block scoped).
  However, this only applies to let and const variables.
  Functions are also block scoped(only in strict mode).

#### Scope Chain

[Understanding scope and scope chain](https://blog.bitsrc.io/understanding-scope-and-scope-chain-in-javascript-f6637978cf53)

---

### Variable Environment: Hoisting and the TDZ

#### Hoisting

- Makes some types of variable accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".
- Before execution, Code is scanned for variable declarations and for each variable a new property is created in the variable environment object.
- |                                 | Hoisted? |            Initial Value             |         Scope         |
  | :------------------------------ | :------: | :----------------------------------: | :-------------------: |
  | function declarations           |  [x]Yes  |           Actual function            | Block(in strict mode) |
  | var variables                   |  [x]Yes  |              undefined               |       Function        |
  | let and const variables         |  [ ]No   | uninitialized, Temporarily dead zone |         Block         |
  | function expressions and arrows |          |  Depends if using var or let/ const  |                       |

#### TDZ let and const

```js
const myName = "Jonas";

if (myName === "Jonas") {
  console.log(`Jonas is a ${job}`); ---   we get reference error
  const age = 2037 - 1989;          ---   This three lines are TDZ for job variable
  console.log(age);                 ---
  const job = "teacher";
  console.log(x);
}
```

- **why TDZ?**

  1. Makes it easier to avoid and catch errors: accessing variables vefore declaration is bad practice and should be avoided.
  2. Makes const variables actually work.

- **Why Hoisting?**
  1. Using functions before actual declaration;
  2. var hoisting is just a byproduct.

```js
// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3));  // cannot access before initialization
console.log(addArrow);
// console.log(addArrow(2, 3)); // addArrow is not a function since addArrow is undefined. since it is var.

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
```

```js
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
```

---

### The this Keyword

- this keyword - Special variable that is created for everu execution context (every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.
- this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

- |                      |                                        this                                        |
  | :------------------: | :--------------------------------------------------------------------------------: |
  |        Method        |                      this = Object that is calling the method                      |
  | Simple function call |        this = undefined (In strict mode! otherwise: window(in the browser))        |
  |   Arrow functions    | this = this of sunrrouding function (lexical this). AF don't get own this keyword. |
  |    Event listener    |                 this = DOM element that the handler is attached to                 |
  | new,call,apply,bind  |                                                                                    |

```js
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge(); // 46

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // 20

const f = jonas.calcAge;
f(); // undefined
```

---

### Regular Functions and Arrow functions

```js
//  var firstName = "Matilda";  if we uncomment it greet will print firstName
const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year); // 46
  },

  greet: () => {
    console.log(this); //   window
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
```

```js
const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year);

    // Problem
    const isMillenial = function () {
      console.log(this); // undefined
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // calls function

    // Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self); // jonas object
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); // calls function

    // Solution 2
    const isMillenial = () => {
      console.log(this); // jonas object
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); // calls function
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
```

```js
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); // parameters
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); // arguments not for arrow functions
  return a + b;
};
addArrow(2, 5, 8);
```

---

### Primitives Vs. Objects (Primitive Vs. Reference Types)

- ```js
  // Objects vs. primitives
  let age = 30; /// stored in stack
  let oldAge = age; // points to age address
  age = 31; // age points to new value with diff address
  console.log(age); // 31
  console.log(oldAge); // 30

  const me = {
    // stored in heap
    // me points to reference address and stored in stack
    name: "Jonas",
    age: 30,
  };
  const friend = me; // points to me address
  friend.age = 27;
  console.log("Friend:", friend); // 27
  console.log("Me", me); // 27
  ```

### Prototypal Inheritance

### Event Loop

### How the DOM Really Works

---

---

---

---

---

## Data Structures, Modern Operators and Strings

### Destructuring Arrays

```js
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
//  we can also take first and second only
const [x, y] = [2, 3, 4];
console.log(x, y); // 2, 3
// if we want to skip one just make blank space for that
const [x, , z] = [2, 3, 4];
console.log(x, z); // 2, 4

// swap elements
[main, secondary] = [secondary, main];

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2,[5,6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2,5,6

// default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined
// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
```

---

### Destructuring Objects

```js
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //  passing object
  orderDelivery: function (obj) {
    console.log(obj);
  },
  // for destructuring object
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // destructuring right here
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // for having default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Destructuring Objects
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

//  Default values
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

// Object Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// {a,b}=obj; // unexpected token =
({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri } = openingHours;

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
```

---

### Spread Operator

```js
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array shallow
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);  // unexpected token

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
```

---

### Rest Pattern and Parameters

```js
//  Rest Pattern
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions - Rest Parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
```

### Short Circuiting (&& and ||)

```js
// Short Circuiting (&& and ||)

console.log("---- OR ----");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas"); // 3
console.log("" || "Jonas"); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // Jonas

console.log("Hello" && 23 && null && "jonas"); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
```

---

### The Nullish Coalescing Operator (??)

```js
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10; // 0
console.log(guestCorrect);
```

---

### Looping Arrays

- for Of Loop

```js
const menu = [1, 2, 4, 26, 52, 5, 5, 342, 342, 234, 63];
for (const item of menu) console.log(item);

console.log(...menu.entries()); // Array Iterators
```

---

### Enhanced Object Literals

```js
const openingHours = {
  th: {
    open: 2,
    close: 22,
  },
  sat: {
    open: 1,
    close: 22,
  },
};

const restaurant = {
  name: "Dhaba",
  // ES 5 way
  openingHours: openingHours,
  // ES 6 way
  openingHours,

  // function ES 5
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // function ES 6
  ordesr(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// use template literal
const weekdays = ["mon", "tue", "wed", "thu", "fri"];
const op = {
  [weedays[4]]: {
    open: 13,
    close: 23,
  },
  [`day-${3 + 21}`]: {
    open: 2,
    close: 22,
  },
};
```

---

### Optional Chaining (?.)

```js
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//   we get error
console.log(restaurant.openingHours.mon.open);

//  With Optional Chaining
cosole.log(restaurant.openingHours.mon?.open); //undefined
cosole.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");
```

---

### Looping Objects: Object keys, values and entries

```js
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
```

---

### Sets

```js
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

console.log(new Set("Jonas"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);
```

---

### Maps: Fundamentals

```js
// Maps: Fundamentals
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
```

---

### Iterating Maps

```js
// Maps: Iteration
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
```

---

### Which Data Structure to use?

#### Arrays Vs. Sets

|                               Arrays                                |                     Sets                      |
| :-----------------------------------------------------------------: | :-------------------------------------------: |
| Use when you need ordered list of values (might contain duplicates) | Use when you need to work with unique values  |
|                Use when you need to manipulate data                 | Use when high-performance is really important |
|                                                                     |     Use to remove duplicates from arrays      |

#### Objects Vs. Maps

|                       Objects                        |                     Maps                      |
| :--------------------------------------------------: | :-------------------------------------------: |
| More "traditional" key/value store("abused" objects) |              Better performance               |
|   Easier to write and access values with . and []    |          Keys can have any data type          |
|                                                      |                Easy to iterate                |
|                                                      |             Easy to compute size              |
|   Use when you need to include functions(methods)    | Use when you simply need to map key to values |
|    Use when working with JSON (can covert to map)    |  Use when you need keys that are not strings  |

---

### Strings

```js
// Working With Strings - Part 1
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));
```

- methods aare called on objects like arrays, strings beu\ing premitives js coverts behind the scene to string object.(boxing)
- after the operation it coverts back to string.

```js
// Working With Strings - Part 2

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, "gate"));
// regExp

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}
```

```js
// Working With Strings - Part 3

// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
```

---

---

---

---

---

## Closer Look at Functions

### Default Parameters

```js
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
```

---

### How Passing Arguments Works: Value vs. References

```js
// How Passing Arguments Works: Values vs. Reference
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, jonas);
// console.log(flight); // not changed
// console.log(jonas);  // changed

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
```

- JavaScript does not have pass by reference.

---

### First Class Function and Higher Order Functions

| First Class Functions                               | Higher Order Functions                                                                                                        |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| JavaScript treats functions as first-class citizens | A function that receives another function as an argument that returns a new function or both                                  |
| This means that functions are simply values         | This is only possible because of first class functions                                                                        |
| Functions are just another 'type' of object         | 1) Fuction that receives another function. Ex- addEventListner is higher order function since it receives a callback function |
| store functions in variables or properties          | 2) function that returns a new function                                                                                       |
| pass function as arguments to other functions       |                                                                                                                               |
| return functions from functions                     |                                                                                                                               |
| call methods on functions                           |                                                                                                                               |

---

### Functions Accepting Callback Functions

```js
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // function property
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);
```

- Javascript allows us to create abstraction.

---

### Functions returning Function

```js
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("Jonas");
```

- Important in functional programming paradigm.

---

### The Call and Apply Method

```js
// The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// instead of apply you can do like this
book.call(swiss, ...flightData);
```

### The Bind Method

```js
// The bind Method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// use function return function and recreate above
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
```

---

### Immediately Invoked Function Expression

```js
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
```

---

### Closures

- A function has access to the variable environment (VE) of the execution context in which it was created.
- Closure: VE attached to the function, exactly as it was at the time and place the function was created.
- A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution is gone.
- (Less Formal): A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
- (Less Formal): A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.
- (Less formal): A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
- we do not have to manually create closures, this is a javascript feature that happens automatically, we can't even access closed-over variables explicitly. A closure is not a tangible JavaScript object.

```js
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
```

```js
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // closure have higer priority over scope chain
boardPassengers(180, 3);
```

---

---

---

---

---

## Working With Arrays

- Arrays are Also Objects

### Simple Array Methods

```js
// Simple Array Methods
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE mutates original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE mutates original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));
```

---

### Looping Arrays: forEach

```js
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH ----");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
```

---

### forEach with Maps and Sets

```js
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
}); // _ unnecessary parameter
```

---

### Some Thing with DOM

- InsertAdjacentHTML()
- innerHTML
- split()

---

### Data Transformations with map, filter, reduce

#### Map

- map return a new array containing the results of applying an operation on all original array elements

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
```

#### filter

- filter returns a new array containing the array elements that passed a specific test condition.

```js
// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
```

#### reduce

- reduce boils ('reduces') all array elements down to one single value(eg. adding all elements together).

```js
// The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
```

---

### The magic of chaining methods

```js
// The Magic of Chaining Methods
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
```

---

### Find method

```js
// The find Method
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
```
