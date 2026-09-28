// Named Function

function empDetails()
{
  console.log("Teju")
  console.log(101)
}
empDetails()

//function with parameters 

 function add(a,b)
 {
   console.log(a + b)
 }
 add(20,30)

 //function with return statemnet

 function sub(a,b)
 {
    return a-b;
  }
  sub(30,20) 
  let res=sub(40,10)
  console.log(res)

  console.log(sub(50,20)) 

//Arrow Function

let multiply = ()=>{
  console.log("I am multiply function")
}
multiply(10,3)


let division = (a,b)=> a/b
console.log(division(40,5))

// callback function

let wish = ()=>{
            console.log("Happy Birthday")
          }
          let greetings = (myFunc)=>{
            myFunc()
          }
          greetings(wish)

 greetings(  ()=>{
            console.log("I am callback function")
          })
