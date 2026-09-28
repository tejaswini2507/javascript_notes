//prime number using function

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