// ! how to add in localstorage

localStorage.setItem("myName","teju")
localStorage.setItem("myId",109)
localStorage.setItem("mySkills",JSON.stringify(["java","python","webtech"]))

// ! how to get data in localstorage

let myName=localStorage.getItem("myName")
console.log(myName)

let myId=Number(localStorage.getItem("myId"))
console.log(myId)
console.log(typeof myId)

let skills=JSON.parse(localStorage.getItem("skills"))
console.log(skills)

// ! how to remove data from localstorage

localStorage.removeItem("myId")

// ! how to remove all items

localStorage.clear()