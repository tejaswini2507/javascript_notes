
let Merge=()=>
{
  let a = [5,9,13]
  let b = [7,8,12,18,25,45,50]
  let c = []

  let i=0, j=0;
  while(i<a.length && j < b.length)
  {
    if(a[i] < b[i])
    {
      c[k]=a[i];
      i++;
      k++;
    }
    else{
      c[k]=b[j];
      j++;
      k++;
    }
  }
  while(i<a.length)
  {
    c[k]=a[i];
    i++;
    k++;
  }
  while(j<b.length)
  {
    c[k]=b[j];
    j++;
    k++;
  }
}