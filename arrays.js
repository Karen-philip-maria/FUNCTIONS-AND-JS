function add (num1 , num2){
    const sum = num1 + num2;
    console.log({const:sum})
    return {"sum": sum};
}


console.log(add(2,3));
add (4,5);

//local and global scope
// localscope{} - only inside the function
// if you declare a variable outside the function you can access it everywhere - global scope
function item (){
    const names= ["Anne", "Eunice"];
    console.log({names});
    // console.log({inside:student});
}
// item();
// console.log({inside:student});
// child = "boy";

// functions expressinon and the different ways to tackle using different  

const subtract = function(num1, num2){
    console.log(num1 - num2);
}
subtract(20,10);

const multiply= (num1, num2)=> console.log(num1* num2);
multiply (6,9);

// const multiply= (num1, num2)=>{ console.log(num1* num2);
// return(6,9);

// }

// IIFEs - it is used where you write a function and call it imediately
(function(){
    console.log("Helllo there");
})();

// Hoisting - only works when you use var
console.log({person});
 var person = "human";
 console.log("person 2...",  person);
 greet()
// we call a function before we initialize
 function greet(){
    console.log("Hi person");

 }

//  hello();
//  const hello = ()=> console.log("This is a greeting");

// learn Array of objects