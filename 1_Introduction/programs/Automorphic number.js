//automorphic number

let isAutomorphic = function(num)
{
  let sq = num * num;
  while(num > 0){
    numLd = num % 10;
    sqLd = sq %10;

    if(numLd != sqLd)
      return false;
    num = Math.floor(num / 10);
    sq = Math.floor(sq / 10);
  }
  return true;
}
console.log(isAutomorphic(25));
console.log(isAutomorphic(7));
console.log(isAutomorphic(10));