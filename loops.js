const multiply = (num) => {
    let newArry = [];

    for(let i = 0; i<num.length; i++){
        const multiplyByTwo = num[i]* 2;
        newArry.push(multiplyByTwo);
    }
    return newArry;
}

// for loop returns the index
console.log(multiply([2,3,4,5,6,7,8]));

const totalSum = (numbers) => {
    let sum = 0;
    for (let num of numbers){ 
        //console.log(num); - - used when you want to get the index of each value
        sum+=num;
    }
    return sum;
}
console.log(totalSum([2,3,4,5,6,7]));

const students = (studentNames) =>{
    while(studentNames.length > 2){
        console.log("Teach students");
        studentNames.pop();
        if(studentNames.length ===2){
            console.log("You are left with two students")
            break;
        }
    }
};
  students(["ema", "eve","ann","judith"])


  const  kickBall = (leg) =>{
    do{
        console.log("Kick the ball");
    }while (leg);
  };
  //kickBall(true)
  kickBall(false)

  