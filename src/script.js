
//////////primitives//////////
//string 
var str = 'abc';
var str1 = "abc";
console.log(typeof str1);

//number
var a = 10;

//boolean
var exists = true;

//bigInt


///////nonprimitives/////

//object
const martin = {name: 'Martin', age:30}

const user = {
    firstName: 'MArtin',
    lastName: 'Sipiczki',
    get fullName() {  //getter
        return `${this.firstName}`;
      }
}

console.log(user.firstName); //call with dot 

//CRUD ops
//Mutable way
const obj = {
    a: 1,
    b:2
}

const newObj = {...obj,d: 3}; //add with spread op
const newObj = {...obj, b:4}; //update with spread operator



//array
numbers = [1,2,3,4];

numbers.push(10);
numbers.pop();
numbers.unshift(0); //add 0 to numbers[0] to the first position
numbers.shift();//remove from first place

const newArray = [...numbers]; //copy array
const newArray = {12,...numbers} //add 12 to the beginning of newArray


//!!!!!!!!!always use let instead of var because of hoisting
let a = 1;


//write functions this way because of scopes in js
(function(){
    let a;
})()

//arrow function
const add = (a,b) => a+b;  
console.log(add(1,2)); //call it normally


//use string literals
const stringname = 'Martin is the best' +
                    'in the world';





/*problems with js:
    variables can be overwriten because we can define variables with same names

*/

