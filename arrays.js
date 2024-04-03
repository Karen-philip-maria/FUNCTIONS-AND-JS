// function add (num1 , num2){
//     const sum = num1 + num2;
//     console.log({const:sum})
//     return {"sum": sum};
// }


// console.log(add(2,3));
// add (4,5);

// //local and global scope
// // localscope{} - only inside the function
// // if you declare a variable outside the function you can access it everywhere - global scope
// function item (){
//     const names= ["Anne", "Eunice"];
//     console.log({names});
//     // console.log({inside:student});
// }
// // item();
// // console.log({inside:student});
// // child = "boy";

// // functions expressinon and the different ways to tackle using different  

// const subtract = function(num1, num2){
//     console.log(num1 - num2);
// }
// subtract(20,10);

// const multiply= (num1, num2)=> console.log(num1* num2);
// multiply (6,9);

// // const multiply= (num1, num2)=>{ console.log(num1* num2);
// // return(6,9);

// // }

// // IIFEs - it is used where you write a function and call it imediately
// (function(){
//     console.log("Helllo there");
// })();

// // Hoisting - only works when you use var
// console.log({person});
//  var person = "human";
//  console.log("person 2...",  person);
//  greet()
// // we call a function before we initialize
//  function greet(){
//     console.log("Hi person");

//  }

// //  hello();
// //  const hello = ()=> console.log("This is a greeting");

// // learn Array of objects

//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sorting (){
    const words = ['Hey','there','karen','jay'];
    console.log(words.sort());
    console.log(words.reverse());
}
sorting()
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElements() {
    const arr = [1,2,-3,-5,0,6];
    arr.forEach(num => {
        if(num >0){
            console.log(num + " positive");
        } else if(num <0){
console.log(num + " negative");
        }else{
            console.log(num + " Zero")
        };
    });
}
checkElements()
//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortBysalary(employees){
    return employees.sort((a,b) => a.salary - b.salary);
}
// an example
const employees = [
{id: 1, name: "karen", salary:4000},
{id: 2, name: "joy", salary:5000},
{id: 3, name: "faith", salary:2000}
];
const sortedEmployees = sortBysalary(employees);
console.log(sortedEmployees);
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiply([1, 2, 3, 4]);

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function changeArray2(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item + 5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray2([2, 4, 6, 8, 10, 12]);
   
