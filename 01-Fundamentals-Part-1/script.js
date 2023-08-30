/*****************Linking JS script File*********************
let js = 'Amazing';

if (js === 'Amazing') alert('JavaScript is FUN!');

console.log(80+9+6/6);*/


/*****************Values and Variables********************
let firstName = 'Bruna';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'Jonas';
let PI = '3.1415'; //constant

// best approach
let myFirstJob = 'Teacher';
let myCurrentJob = 'Programmer';

// don't use variable with
let job1 = 'Teacher';
let job2 = 'Programmer'; */

/*****************Assignment*********************/
/*
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console 


let country = 'Brazil';
let continent = 'South America';
let population = '400000 million';

console.log(country);
console.log(continent);
console.log(population); */

/*****************Data Types********************

Number: 
        Integer and Float numbers. 
        JS don't have a type from decimal numbers
String: 
        Sequence of characters. 
        Used for text
Boolean: 
        Logical type
        Can only be true or false
        Used for taking decisions.

Undefined: Value taken by a variable that is not yet defined ('empty value')

Null: 
        Also means 'empty value'. 
        JS treats Null as an Object.

BigInt: 
        Introduced ES2020
        Larger Integers than the Number type can hold.

Symbol:
        Value that is unique
        Value cannot be changed 

let javaScriptIsFun = true;
let myName = 'Bruna';
let myAge = 27;

console.log('javaScriptIsFun => ' + javaScriptIsFun);
console.log(typeof javaScriptIsFun);
// console.log(typeof myName);
// console.log(typeof myAge);

javaScriptIsFun = "Basic";

console.log(typeof javaScriptIsFun);

let year;

console.log('year 1 => ' + year);
console.log('year 1 => ' + typeof year);

year = 1996;
console.log('year 2 => ' + year);
console.log('year 2 => ' + typeof year);

// JS treats null as an Object
console.log(typeof null); */

/*****************Let, Const & Var *******************
 * Let: 
 *      it's a mutable variable, we can change/reassign values to the variable.
 *      use when you're sure the variable needs to change at some point of your code.
 * 
 * Const: it's unmutable variable, we can't change/reassign values to the variable.
 *
 *  Var: 
 *      it's an old way to declare variables prio ES6. Works as let but have some differences.
 *      used in legacy codes.
 * 
 * Good Practice: 
 *      always use const instead of let.
 *      avoid use var in your code.


let age = 29;
age = 89;

const birthDay = 1991;

// We cannot assign a new value from a constant
//birthDay = 1996;
// We cannot create an unassigned const
//const job;

var weight = 89;
weight = 69;

//Never create a variable without Let or Const
lastName = 'Girão';
console.log(lastName); */

