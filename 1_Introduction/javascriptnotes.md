24/07/26

# JAVASCRIPT  
* *Javascript* is a programming language that is used to add functionalities to the webpages.  
* we can use javascript both in client-side and server-side.  
##  How many ways we can write javascript code :  
->we can write js code in 2 ways  
**1..INTERNAL JAVASCRIPT**  
* writing the js code in the html file is called intrnal javascript.  
* for this we need `<script></script>` tag  
* it should be written inside `<body>` tag at the end before the `</body>` tag.  

**2..EXTERNAL JAVASCRIPT**  
* first we have to create one separate javascript file by using .js extension.  
* then we have to connect the html and js file by using `<script></script>` tag.  
* in `<script></script>` tag we have to give the path of the js file in the src attribute.  
## Printing Statement in javascript  
```js
console.log()
```
## How to execute javascript program  
->we can execute js program both in the browser and outside the browser.  
**Inside Browser**  
* for executing js program inside browser we need html file.  
* we have to inspect webpage and go to console to get the output. 

**Outside Browser**  
* For this we have to install nodejs  
* nodejs is a javascript runtime environment used to execute js file outside of the browser. 

**syntax** : **node filename.js**  
## Token  
* Token is basic building blocks or smallest unit in any programming language  
## Components of Token  
*1..keywords*  
*2..identifiers*  
*3..literals*  
*4..separators*  
*5..operators*  
### KEYWORDS  
* These are pre-defined words/reserved words having some meaning.  
* keywords should be written in lowercase/small.  
### IDENTIFIERS  
* component where we can assign names.  

***rules of identifier***  
* we can't use keyword as identifier.  
* we can't give space in between the identifier.  
* we can't use special character(except $ and _ ).  
* we can't start with numbers  
### VARIABLE  
* Variable is a container where we can store the data or value. 
* In js for creating variable we need 3 keywords  
**'var'**   , **'let'**   , **'const'**  
### var keyword  
```js
    var sname;         //variable declaration
    sname = "Teju";    //variable initialization
    var sage = 21;    //v.d and v.i
    sage = 22;       //re-initialization
    var sname;      //re-declaration
```  
### let keyword  
* In let keyword re-declaration is not possible.  
```js
   let phno = 9876543210;
   let phno;  //re-declaration not possible
```  
### const keyword  
* To create any constant variable we need const keyword.  
* Declaration and initialization we have to do in the same line.  
* we cannot perform re-initialization.
```js
  const PI; //not possible
  PI = 3.14 //not possible

  const PanNo = 123456;

  PanNo = 654321; //re-initialization not possible
```
27/07/26

### DATATYPE    
* It is used to know which kind of data we want to assign in the variable.  
* in js,we have 2 types of datatypes  

**1..NUMBER DATATYPE**  
* In js both decimal and non-decimal digits belongs to number datatype.  
 
-->>***note*** : 'typeof' operator is used to know the datatype of any variable.
```js  
let age = 21;
console.log(age);         //21
console.log(typeof age);  //number

let height = 5.85;
console.log(height);
console.log(type of height);   //number
```
**2..STRING DATATYPE**  
* string is collection of single or multiple characters that is enclosed with single quote(' ') or double quotes(" ") or backticks(` `).  
```js
let sname = "Teju";
console.log(type of sname);   //string

let gender = 'female';
console.log(type of gender);   //string 

let about = `nice girl`;
console.log(type of about);   //string 
```  
**3..BOOLEAN DATATYPE**  
* It can take only two values (true / false).  
```js
let isStudent = true;
console.log(isStudent);
console.log(typeof Student);  //boolean
```  
**4..UNDEFINED DATATYPE**  
* Any variable that is declared but not initialized.  
* typeof undefined is  'undefined'.  
```js
let empNo;
console.log(empNo);         //undefined
console.log(typeof empNo)   //undefined
```  
**5..NULL DATATYPE**  
* null is, the variable is assigned with null.  
* typeof null is   'object'.
```js
let empSal = null;
console.log(empSal);    //null
console.log(typeof empSal);  //object
```  
**6..BIGINT DATATYPE**  
* If we want to take large number in js we can take bigint datatype.  
* For declaring bigint datatype we have to use 'n' as suffix.  
```js
let x=987654321234567n
console.log(n)
console.log(typeof n)  //bigint
```  
### NON PRIMITIVE DATATYPE  
* js having 3 non-primitive datatype.   
*1..function*  
*2..array*  
*3..object*   
### DECISION MAKING STATEMENT  
*1..if condition*  
*2..if else condition*  
*3..else if ladder*  
*4..switch*  
## if condition 
```js 
syntax : 
             if(condition)  
             {

              }
```  
## if else condition  
```js
syntax :   
          if(condition)
          {

          }
          else{

          }
```  
## else if ladder  
* if we want to check more than one condition then we should use this.   
* any one block is executed means it will not check the remaining block.
```js  
syntax : 
          if(condition)    // 1 time we can write if condition
          {
           
          }
          else if(condition)   //n number of times
          {

          }
          .
          .
          else{    // only 1 time we can write else condition.

          }
```  

28/07/26

### MATH OBJECT  
* This is one built-in object in javascript used to perform mathematical operations.  
**1..Math.max()**  : used to find the maximum number.  
**2..Math.min()** : used to find the minimum number.  
**3..math.abs()** : used to provide the positive value.  
**4..Math.floor()** : used to provide the floor value(before decimal  which number is there that number will print) of the number.  
**5..Math.ceil()** : used to provide the ceil value(before the decimal point which number is there but for that number it will print next value) of the number.  
**6..Math.round()** : used to provide the rounoff value of the number.  
if the decimal value is .5 or more than that it will give next value.  
if the decimal value is less than .5 it will give previous value.  
**7..Math.pow()** : used to know the power of any number.  
it takes 2 parameters (base and power).  
**8..Math.sqrt()** : used to know the square root of any number.  
**9..Math.random()** : used to generate one random number between 0.0 to 0.9999 (less than 1).

### How to generate random number between some range

Let Start = 10;  
Let end = 50;
```js
Let randomNumber = Math.floor(Math.random) * (end-start) + 1 + start)). 
```

30/07/26  
### FUNCTION  
* Function is block of code performing some specific task.  
* Function is used for code reusability.  
### NAMED FUNCTION  
* Function having name is called as **Named Function**.  
```js
syntax : 
         function functionname()
         {
          
         }
         functionname()
```  
* for executing the function we should call the function by the functioname.  
### function with parameters 
```js 
example : 
          function add(a,b)
          {
            console.log(a + b)
          }
          add(20,30)
```  
### function with return statement  
```js
example : 
        function sub(a,b)
        {
         return a-b;
        }
        sub(30,20)   //no output because we didnt print anything 
        let res=sub(40,10)   //store in variable and print
        console.log(res)                                  
                         (or)

        console.log(sub(50,20))  //call f.name inside print  
```
31/07/26  

### ANONYMOUS FUNCTION  
* Any function that does not have name is called as anonymous function.  
```js
syntax : 
         function()
         {

         }
```  
* here we can't execute the function.  
### FUNCTION WITH EXPRESSION  
```js
syntax : 
         variable = function()
                     {

                     }

example :  let add = function()
                    {
                      console.log(10 + 5);
                    }
                    add();
```  
**write a js program to check number is prime or not by using function**  
```js
let isPrime = function(n)
  {
    let count = 0;
    for(let i=1;i<=n;i++)
    {
     if(n%i==0)
          count++;
    }
    return count == 2;
  }
  console.log(isPrime(5));
  console.log(isPrime(4));

  //print prime numbers between 2 to 20

  console.log("---Prime in Range---")
  for(let i=2;i<=20;i++){
      if(isPrime(i))
        console.log(i);
      }
```
01/08/26  
### ARROW FUNCTION  
```js
syntax :  variable=()=>{

          }

example : 
          let add = (a,b)=>{
            console.log(a+b);
          }
          add();
```  
***note*** : In Arrow Function if there only one statement that time no need to use return keyword and { }.  
```js
let multiply = (a,b)=>a*b;
console.log(multiply(2,8));
```  
03/08/26
### NESTED FUNCTION  
* creating one function inside another function is called as nested function.  
```js  
example : 
           let outer = ()=>{
            console.log("I am outer function")

            let inner = ()=>{
              console.log("i am inner function")
            }
            inner();
           }
           outer();
```  
### WHAT IS LEXICAL SCOPPING  
* In Nested function inner function can access the properties of outer function but the outer function can't access the properties of inner function is calles as lexical scopping.  
```js
example : 
         let outer = ()=>{
          console.log("I am outer function")
          let a = 10;

          let inner = ()=>{
            let b = 20;
            console.log("I am inner function")
            console.log("a value is ",a)
            console.log("b value is :",b)
          }
          console.log(b);
          inner();
         }
         outer();
```  
### HIGHER ORDER FUNCTION  
* Any Function that takes/accepts any other function as parameters/arguments is called as Higher order function.
```js  
example : 
          let wish = ()=>{
            console.log("Happy Birthday")
          }
          let greetings = (myFunc)=>{
            myFunc()
          }
          greetings(wish)
```
### CALLBACK FUNCTION  
* The Function we are sending as parameter/argument to the higher order function is called as callback function.
```js 
example : 
          greetings(  ()=>{
            console.log("I am callback function")
          })
```  
04/08/26  
### Difference b/w var and let  
**1..In ' let ' keyword re-declaration is not possible, but in var keyword re-declaration is possible**  
```js 
    var a=10;
    var a;           //possible

    let b=90;
    let b;             //not possible
```  
**2..' let ' keyword having block scope but ' var ' keyword having functional scope and global scope**  
```js 
    {
      var x = 10;
      let y = 20;
      const z = 30;

      console.log(x);    // 10
      console.log(y);    // 20
      console.log(z);    // 30
    }
    console.log(x);       // 10
    console.log(y);       // not possible
    console.log(z);       // not possible

    function scope()
    {
      for(var i=1;i<=5;i++)
      {

      }
      console.log(i);  // 6
    }
    scope()
```  
**3..Variable hoisting is possible in ' var ' keyword but in ' let ' not possible**  
### VARIABLE HOISTING  
* If we declare any variable by using var keyword and we access it before its declaration.  
* The declaration will move to top and it will give the output as 'undefined'..and this process is called variable hoisting.  
```js
   console.log(x);        // undefined
   var x;            
   
   console.log(y);         // undefined
   var y = 20
```   
### IIFE (IMMEDIATE INVOKE FUNCTION EXPRESSION)  
* this function executes only once.  
```js
    (
      function()
      {
        console.log("database connected")
      }
    )();

    // we can pass arguments also in IIFE function

    (
      function(port)
      {
        console.log("server is running on port number",port)
      }
    )(3000);
```  
05/08/26  
### STRING  
* string is single or collection of characters enclosed with single quote / double quotes / backtics.  
example :  
```js
   let str1='hey'
   let str2="hi"
   let str3=`how
   are
   you`

   console.log(str1)
   console.log(str2)
   console.log(str3)
```
**note** : if we want to take multiline string then we can enclose the string by using backtick.  
### STRING INTERPOLATION / TEMPLATE LITERALS  
* Accessing the variable inside the string is called as template literals.  
* for this string should be enclosed with backtick and the variable we want to access should be written inside &{}.  
example : 
```js
let a = 10;
let b = 20;
let myName = "Teju"
console.log(`the addition of ${a} and ${b} is : ${a+b}`)
console.log(`my name is : ${myName}`)
```  
## length property  
* It is used to know the length of any string.
example : 
```js
  let msg = "good morning"
  console.log(msg.length);
```  
## string methods  
**1..toUpperCase()**  
* This method is used to convert the string into uppercase and it will return one new string.  
* it will not change the original string. 

example : 
```js
   let str4 = "Hello"
   let upper = str4.toUpperCase();
   console.log(upper)

   console.log(str4.toUpperCase());

   console.log(str4)
```

**2..LowerCase()**  
* This method is used to convert the string into lowercase and it will return one new string.  
* it will not change the original string.  

example : 
```js
   let str5 = "HELLO"
   let lower = str5.toLowerCase();
   console.log(lower)

   console.log(str5.toLowerCase());

    console.log(str5);
```
**3..trim()**  
* This method is used to remove space from both the sides of the string.  

example : 
```js
   let str6 = " hi "
   let str7 = str6.trim()
   console.log(str6.length)
   console.log(str7.length)
```  
**4..indexOf()**  
* It is used to know the index of the given character.  
* It will take the first occurance of the character.
* If the character is not present, it will return -1.  

example : 
```js
   let str8="hello how are you"
   console.log(str8.indexOf('e'))
   console.log(str8.indexOf('w'))
```  
**5..lastIndexOf()**  
* It will take the last occurance index of the character.  
* If the character is not present, it will return -1.  

example : 
```js
console.log(str8.lastIndexOf('e'))
```  
**6..charAt()**  
* This method is used to know which character is present at the given index.  

example : 
```js
console.log(str8.charAt(1))
```  
**7..concat()**  
* This method is used to combine / merge two or more than two strings and it will return one new string.  

example :
```js
console.log(str7.concat(" ",str8," ? "))
```  
**8..includes()**  
* It is used to know the given string is present or not.  
* If it is present it will return true otherwise it will return false.  

example : 
```js
console.log(str8.includes("me"))
console.log(str8.includes("you"))
```
06/08/26  

**9..replace**  
* This method is used to replace one string with another string.  
* It will replace only the first one.  

example : 
```js
let sentence = 'I am from bangalore, I love bangalore'
console.log(sentence.replace("bangalore","chennai"))
```
**10..replaceAll**  
* This method is used to replace all the string. 

example : 
```js
let password = "hello"
console.log(password.replaceAll("l","$"))
console.log(sentence.replaceAll("bangalore","chennai"))
```  
**11..split**  
* This method is used to convert string into array.  

example : 
```js
let greet = "how are you"
console.log(greet.split(" "))
console.log(greet.split(""))
console.log(greet.split())
```  
**12..slice**  
* This method is used to extract some part of another string.  
* It takes two parameters (startIndex , endIndex) it does not include endIndex value.  
* Slice can take negative index also. 
* endIndex value shoud be greater then start index value

example : 
```js
let msg1 = "how are you"
console.log(msg1.slice(0,2))        // ho
console.log(msg1.slice(4))         // are you
console.log(msg1.slice(3,0))      // no output
console.log(msg1.slice(-3))      // you
console.log(msg1.slice(0,-1))   // how are yo
```  
**13..substring**  
* This method is also used to extract some part of another string.  
* It takes two parameters (startIndex , endIndex) it does not include endIndex value.  
* here we can't provide negative value..if we are using that will be considered as zero.  
* here if we are giving endIndex value smaller than startIndex, it will swap the values and provide the output.  

example : 
```js
console.log(msg1.substring(0,2))     // ho
console.log(msg1.substring(4))      // are you
console.log(msg1.substring(3,0))   // how
console.log(msg1.substring(-3))   // how are you
```
07/08/26
### ARRAY  
* Array is one linear Data structure where we can store multiple values in continuous manner.  
* In javascript we can store both homogeneous and heterogeneous data inside array.  
* array index starts from 0.  
## How to declare array  
```js
let arr = [10,20,30]
console.log(arr)
```  
## How to Access array elements
```js
console.log(arr[0])
console.log(arr[1])
```
## How to modify array element  
```js
arr[2]=300;
```
## How to traverse array  
* we can traverse array by using any looping statement like(for,while,do-while)  
* we can traverse by using 'for of' loop and 'for in' loop.  

**for loop example :**
```js
for(let i = 0; i < arr.length; i++)
{
  console.log(arr[i])
}
```
**for of loop example :**
```js
for(let element of arr)
{
  console.log(element);
}
```
### ARRAY METHODS  
**1..push()**  
* This method is used to add element at the end of array.
```js
let marks = [75,80,95,65]
console.log(marks)

marks.push(100)
console.log(marks)
```
**2..pop()**  
* This method is used to remove the last element of the array.
```js
let food=["biriyani","maggie","dosa","curd rice"]
food.pop()
console.log(food)
```
**3..shift()**  
* This method used to remove the element from the start.
```js
let movies = ["leo","master","beast","spiderman"]
movies.shift()
console.log(movies) 
```
**4..unshift()**  
* This method used to add the element at the start.  
```js
let series = ["dark","12 monkeys","friends"]
series.unshift("money heist")
console.log(series)
```
10/08/2026

**5..indexOf()**  
* This method is used to know the first occurance index of any given element of the array.
```js
let numbers  = [50,40,10,30,20,10]
console.log(numbers.indexOf(10))
```  
**6..lastindexOf()**  
* This method is used to know the last accurance index of any given element of the array.  
```js
console.log(numbers.lastIndexOf(10))
```
**7..includes()**  
* This method is used to check element is present or not in the array.  
* It returns boolean (True / False).
```js
console.log(numbers.includes(100))
console.log(numbers.includes(30))
```
**8..concat()**  
* This method is used to combine or merge two or more than two arrays and it will return one new array.
```js
let frontend = ["html","css","javascript","react"]
let backend = ["node","express","mongodb"]

let fullstack = frontend.concat(backend)
console.log(fullstack)
```
**9..join()**  
* This method is used convert any array into string.
```js
let charArr = ['h','e','l','l','o']
let str = charArr.join("")
console.log(str)
```
**10..reverse()**  
* This method is used to reverse the original array.
```js
let arr3 = [1,2,3,4,5]
arr3.reverse()
console.log(arr3)
```
**11..splice()**  
* This method is used to modify / change the original array.  
* By using this method we can remove , replace and add the element in array.  
* It can take 3 parameters (startIndex , deleteCount , replacementValue).  

example 1 : 
```js
let arr4 = [10,20,30,40,50,60]
arr4.splice(1,2)
console.log(arr4)       // [10,40,50,60]
```
example 2 : 
```js
let arr5 = [100,200,300,400,500,600]
arr5.splice(2,2,700)
console.log(arr5)        // [ 100, 200, 700, 500, 600 ]
```
example 3 : 
```js
let arr6 = ["java","node","express","python"]
arr6.splice(2,0,"javascript")
console.log(arr6)                                       // ['java','node','javascript','express','python']
```
**12..slice()**  
* It is used to extract some part of array.   
* It will not modify the original array.  
* It takes two parameters (startIndex , endIndex) but it does not include endIndex value.  
13/08/2026  
### OBJECT  
* Anything that have physical existence is called as object.  
* In js object is key and value pairs enclosed with curly braces {}.  
* These key-value are called properties, all the properties will be separated by comma ( , ).  
* All the key-value will be separated by colon ( : ).  
* Key should be unique, value can be duplicate.  
* we can give any datatype as value (primitive , non-primitive).  
* we can create object in 3 ways in javascript  
   **1..By using object literals**  
   **2..By using class**  
   **3..By using functional constructor**  
### object by using literals  
```js
let student = {
  sname : "miller",
  sid : 101,
  isStudying : false,
  skills : ["sql","python","java","webtech"],
  address : {
           city : "chennai",
           pin : 52346
  },
  work:function() {
    console.log("likes to sleep");
  }

}
console.log(student)
```
**How to access property** 
```js 
syntax : 
          objectname.key
 
example :

          console.log(student.sname);
```  
**How to modify**
```js
syntax : 
         objectname.key = value;
example : 
          student.sid = 102;
          console.log(student)
```
**How to add new property**  
* adding new property and modifying the old property syntax is same.  
* If the key is present then it will modify, if the key is not present then it will add the property.  
```js
student.phNo = 9876543210
```
26/08/26  
**3..document.getElementBYClassName()**  
* This method is used to target the element based oon classname.  
* It will return one HTMLCollection. 

**4..document.querySelector()**  
* In this method we can pass 'id','class' and 'tagname',  
* It will target only the first element  
* For applying id we have to give '#' and for applying class we have to give '.' for tagname name of the tag.  

**5..querySelectorAll()**  
* By using this method we can target by the selectors(id/class/tag) and it will target all the elements.  
### How to apply css from javascript  
syntax : 
```js 
      element.style.cssproperty = "value"
```
example : 
```html
   <p>This is first para</p>
   <p>This is second para</p>
````
```js
let firstpara = document.querySelector("p")
firstpara.style.backgroundColor = "pink";
firstpara.style.color = "green"
```  
### InnerText and InnerHtml  
```html
 <div class = "box1">
     <h2>Iam box1</h2>
     <h3>How are you</h3>
 </div>

 <div class = "box2">
 </div>
 ```  
 **InnerText**  
 * It will give the content of any tags in text  
 ```js  
 let box1 = document.querySelector(".box1")
 console.log(box1)
 ```  
 **InnerHTML**  
 * It will give the content with tags  
 ```js
 console.log(box1.innerHtml);

 /*
    <h2> Iam box 1 </h2>
    <p> How are you </p>
*/
 ```
 ### How to add and remove the class  
 **classList**  
 * by using this 'classList' property we can get to know what are the classes are present in any element.  

 **classList.add()**  
 * It is used to add any new class in the element.  

 **classList.remove()**   
 * It is used to remove any existing class from the element.  
 ```html
 <div class = "card dark">
  </div>
```
```js
let card = document.querySelector(".card");
card.classList.remove("dark")
card.classList.add("light")
```  
### How to create any element from js  
**document.createElement()**  
* This method is used to create element.   
* Then we can write content inside that, we can apply css.  
* But this element will not display on th UI.  
* for displaying we have 4 methods  
**append()**  : It helps to insert element at the end.  
**prepend()**  : It helps to insert element at the starting.  
**before()** : It display the element before the targetted element.   
**after()** : It display the element after the targetted element.  
example : 
```html
<ol>
  <li>sql</li>
  <li>java</li>
  <li>mt</li>
</ol>
```
```js
let sub1 = document.createElement("li")
sub1.innerText = "python";

let sub1 = document.createElement("li")
sub1.innerText = "html";

let sub1 = document.createElement("li")
sub1.innerText = "css";

let sub1 = document.createElement("li")
sub1.innerText = "js";

let ol = document.querySelector("ol")
ol.append(sub1)
ol.prepend(sub2)
ol.before(sub3)
ol.after(sub4)

output :
        css 
        sql
        java
        mt
        python  
```
01/09/26

## events in javascript  
* Any action we are performing on UI is called event.  
* we can h.andle the event by using *event handler* and *event listener*  
**Main types of event**  
**1..mouse event**  
**2..keyboard event**  
**3..form event**  
**4..document event**  
### How to handle events by event handler  
```js
  let myInfo = ()=>{
    console.log("my name is teju, i am a fullstack developer");
  }
```
```html
<button onclick="myInfo()">Get my information</button>
```
### can we write multiple events in same element ?
* yes  
**note** : we can apply multiple event in the same element but the event should be different.

**example**  
```html
<div onmouseover="fun1()" onmouseout="fun2()">
  <h2>applying multiple events</h2>
</div>
```

