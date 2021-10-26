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

/* simplified */

function factorial() {
let a = +prompt("Найти факториал для ... (введите целое число)")
let b = [...Array(a+1).keys()]
let fact = b[2];
  if (b.length < 3) {
    fact = 1;
  }else{
    for (let i = 2; i < b.length - 1; i++) {
      fact = fact * b[i+1];
      }
  }alert(`Факториал ${a} равен ${fact}`);
  return(fact);
}

/* upgraded */
function factorial(a){
  let fact = 1;
  for (let i = 2; i <= a; i++){
    fact = fact * i;
  }
  console.log(fact);
  return(fact);
}
factorial(5)
