function makeArray (a){
  let b = [...Array(a+1).keys()]
  return(b);
}

function factorial(a) {
  let fact = a[2];
  if (a.length < 3) {
    fact = 1;
  }else{
  for (let i = 2; i < a.length - 1; i++) {
    fact = fact * a[i+1];
    }
  }return(fact);
}
let array = makeArray(5)
console.log(array)
console.log(factorial(array))
