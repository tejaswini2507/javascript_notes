let input=document.querySelector("input")

let generatePassword =()=>{
  let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = caps.toLowerCase();
  let special = "!@#$%&";
  let numbers = "0123456789";
  let pass = ""

  let first = caps[Math.floor(Math.random() * caps.length)]
  let second = small[Math.floor(Math.random() * small.length)]
  let third = special[Math.floor(Math.random() * special.length)]
  let fourth = numbers[Math.floor(Math.random() * numbers.length)] 

  pass = first + second + third + fourth
  input.value = pass;
  console.log(pass)
}
let generate = document.querySelector("button")
generate.addEventListener("click", generatePassword)

let img=document.querySelector("img")
console.log(img)

img.addEventListener("click",()=>{
  if(input.type="password")
  {
    input.type="text"
    img.src="eye.close.png"
  }
  else{
    input.type="password"
    img.src="passwordGenerator/eye.open.png"
  }
  console.log("clicked")
})
let copytext =()=>{
  input.select()
  document.execCommand("copy")
  console.log("copied")
}