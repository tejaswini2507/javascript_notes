// strings 

let str1='hey'
let str2="hi"
let str3=`how   
are
you`

console.log(str1)
console.log(str2)
console.log(str3)

console.log(typeof str1)


//template literals

let a = 10;
let b = 20;
let myName = "Teju"
console.log(`the addition of ${a} and ${b} is : ${a+b}`)
console.log(`my name is : ${myName}`)

// length()

let msg = "good morning"
console.log(msg.length);

// 1..uppercase()

let str4 = "Hello"
let upper = str4.toUpperCase();
console.log(upper)

console.log(str4.toUpperCase());

console.log(str4)

// 2..lowercase()

let str5 = "HELLO"
let lower = str5.toLowerCase();
console.log(lower)

console.log(str5.toLowerCase());

console.log(str5);

// 3..trim()

let str6 = " hi "
let str7 = str6.trim()
console.log(str6.length)
console.log(str7.length)

// 4..indexOf()

let str8="hello how are you"
console.log(str8.indexOf('e'))
console.log(str8.indexOf('w'))
console.log(str8.indexOf('z'))

// 5..lastIndexOf()

console.log(str8.lastIndexOf('e'))
console.log(str8.lastIndexOf('z'))

// 6..charAt()

console.log(str8.charAt(1))

// 7..concat

console.log(str7.concat(" ",str8," ? "))

// 8..includes()

console.log(str8.includes("me"))
console.log(str8.includes("you"))

// 9..replace

let sentence = 'I am from bangalore, I love bangalore'
console.log(sentence.replace("bangalore","chennai"))

// 10..replace all

let password = "hello"
console.log(password.replaceAll("l","$"))
console.log(sentence.replaceAll("bangalore","chennai"))

// 11..split

let greet = "how are you"
console.log(greet.split(" "))
console.log(greet.split(""))
console.log(greet.split())

// 12..slice

let msg1 = "how are you"
console.log(msg1.slice(0,2))
console.log(msg1.slice(4))
console.log(msg1.slice(3,0))  // no output
console.log(msg1.slice(-3))

console.log(msg1.slice(0,-1)) // remove the last character from string

// 13..substring

console.log(msg1.substring(0,2))
console.log(msg1.substring(4))
console.log(msg1.substring(3,0))  // swap(0,3)
console.log(msg1.substring(-3))   // if starting index is -ve js changes it to 0
