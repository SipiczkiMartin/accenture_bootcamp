
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
    getName: ()=>{
        return ${this.firstName} ; //functions as a getter user.getName()
    }
}

console.log(user.firstName); //call with dot 

//array
numbers = [1,2,3,4]


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

