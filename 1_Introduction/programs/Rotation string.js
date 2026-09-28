// rotation string

let s3 = "javascript"
let s4 = "scriptjava"
console.log((s3+s4).includes(s4))

 // ( or )

function isRotation(s1,s2)
{
  if(s1.length != s2.length)
    return false;
  return (s1+s1).includes(s2);
}
let s1 = "javascript"
let s2 = "scriptjava"
console.log(isRotation(s1,s2))