
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
const newArray2 = [12,...numbers] //add 12 to the beginning of newArray

numbers[2] //read data

const arr = numbers.slice(0,3); //get 3 data starting with index 0
                                //without second number all data after index added

//for updating or deleting from an array slice it then put together as needed

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


/* loops
for
while
dowhile
foreach
for in
for of
*/

//unmuttable:
//use map with findelement
//filter return array of records
//find return element
//some check if exists return boolean
//every check everything exists return boolean

//reduce
const newAge = users.reduce((p, c) => {
    if(c.name === 'Virat'){
        return [...p,{...c, age: 30}]; //show the whole array and change age where name virat
    }

    return [...p,c]; //return array back if c.name not found
},[]);

//reduce ((previous,current) => {}, {}-for object, [] -for array, 0-for number)

const groupByGender = users.reduce((p, c) => {

    if(p[c.gender] === undefined) { //if c in p is undefined

        p[c.gender] = [] //create another array

    }

    p[c.gender].push(c); //add c to created array

    return p

}, {});

/* homework
// {
//    '10-19': [],
//    '20-29' : [],
//    '30-39': [],
//    '40-49': []
// }*/

const groupByAgeRange = users.reduce((p, c) => {

    if(c.age >=10 && c.age <=19){
        if(p[1] === undefined){
            p[1] = [];
        }
        p[1].push(c);
    }else if(c.age >=20 && c.age <=29){
        if(p[2] === undefined){
            p[2] = [];
        }
        p[2].push(c);
    }else if(c.age >=30 && c.age <=39){
        if(p[3] === undefined){
            p[3] = [];
        }
        p[3].push(c);
    }else {
        if(p[4] === undefined){
            p[4] = [];
        }
        p[4].push(c);
    }
    return p

}, {});

console.log(groupByGender);

/*problems with js:
    variables can be overwriten because we can define variables with same names

*/

