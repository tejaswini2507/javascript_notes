//example of higher order and callback function

let add = (a,b)=>{
  console.log("addition is ",(a+b))
}

let sub = (a,b)=>{
  console.log("subtraction is ",(a-b))
}

let mul = (a,b)=>{
  console.log("multiplication is ",(a*b))
}

let div = (a,b)=>{
  console.log("division is ",(a/b))
}

let calculator = (task,num1,num2)=>{
  task(num1,num2);
}
calculator(add,10,20)
calculator(sub,200,50)
calculator(mul,19,3)
calculator(div,100,20)

