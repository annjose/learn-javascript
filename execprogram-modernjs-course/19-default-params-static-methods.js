'use strict';

function add(x, y = 0) {
    return x + y;
}
console.log([add(2, 1), add(2)]);   // [3, 2]

const randomNum = 10;
function multiply(x, y = 10 * 2) {
    return x * y;
}
console.log([multiply(2, 1), multiply(2)]);   // [2, 40]

function fun(x, y = x) {
    return x + y;
}
console.log([fun(2, 1), fun(2), fun(1)]);   // [3, 4, 2]

class User {
    constructor(name, isAdmin = false) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}
console.log([new User('Amy', true).isAdmin, new User('Betty').isAdmin]);    // [true, false]

// Destructure with default params
function addObjects(xContainer, yContainer = { y: 0 }) {
    return xContainer.x + yContainer.y;
}
console.log(addObjects({ x: 2 }, { y: 3 }));    // 5
console.log(addObjects({ x: 2 }));              // 2  (= 2+0)

function addObjects_2({ x }, yContainer = { y: x }) {
    return x + yContainer.y;
}
console.log(addObjects_2({ x: 2 }, { y: 3 }));    // 5
console.log(addObjects_2({ x: 2 }));              // 4 (= 2+2)

// ------------------------ Static methods --------------
console.log("------------------------ Static methods --------------");

class Person {
    static votingAge() {
        return 18;
    }
}
console.log("voting age:", Person.votingAge()); // voting age: 18
// console.log(new Person().votingAge());          // error TypeError: (intermediate value).votingAge is not a function

// Static getters and setters
class Customer {
    static get defaultPlan() {
        return "Basic"
    }
    constructor(plan = Customer.defaultPlan) {
        this.actualPlan = plan;
    }
    get plan() {
        return this.actualPlan;
    }
}
console.log("Customer.defaultPlan:", Customer.defaultPlan); // Customer.defaultPlan: Basic
console.log([new Customer("Advanced)").plan], new Customer().plan);  // ["Advanced", "Basic"]



/// Computed methods and accessors
let methodName = "sayHello";
class Employee {
    constructor(name) {
        this.name = name;
    }

    [methodName]() { return "hello"; }

    get ['user' + 'Name']() { return this.name; }

    static [['get', 'Default', 'Name'].join('')]() { return "Default Name"; }
}
const emp = new Employee("Amy");
console.log([emp.sayHello(), emp.userName]);    // ['hello', 'Amy']
console.log(Employee.getDefaultName());         // Default Name

// Coding challenge
// Write a function named getRecipe. It should take one argument: dish, and return a class with a method
//  whose computed method name comes from dish.For example, if dish is 'pasta', then the class should have a pasta method.
//  The method should return `a recipe for ${dish}`.
function getRecipe(dish) {
    return class {
        [dish]() {
            return `a recipe for ${dish}`;
        }
    }
}
const Recipe = getRecipe('pasta');
const recipe = new Recipe();
console.log(recipe.pasta());        // a recipe for pasta

const recipe2 = new (getRecipe('burger'))();
console.log(recipe2.burger());      // a recipe for burger

const recipes = [
    new (getRecipe('pasta'))().pasta(),
    new (getRecipe('cake'))().cake(),
];
console.log(recipes);

//--------------------- Symbol basics ------------------------
console.log("--------------------- Symbol basics ------------------------");

const sym_1 = Symbol("sym_1");
const sym_2 = Symbol("sym_2");

console.log([sym_1.description, sym_2.description]);  // [sym_1, sym_2]

console.log([sym_1 === sym_1, sym_1 === sym_2, sym_2 === sym_2]);     // [true, false, true]
console.log(Symbol("sym3") === Symbol("sym_3"));    // false

const nameSymbol = Symbol("name");
const obj = {
    nameSymbol: "value of string key",
    [nameSymbol]: "value of symbol key"
}
console.log([obj.nameSymbol, obj[nameSymbol]]);   // ['value of string key', 'value of symbol key']