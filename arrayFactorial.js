function findFactorial(arr){
  let arrfactorial = [];
  for (let i = 0; i < arr.length; i++){
    let b = [...Array(arr[i] + 1).keys()]
    let fact = b[2];
    if (b.length < 3) {
      fact = 1;
    } else {
      for (let i = 2; i < b.length - 1; i++){
        fact = fact * b[i+1];
      }
    }arrfactorial.push(fact);
  }console.log(arrfactorial)
}
findFactorial([2,4,6,0])

//*updated*//

let arr = [1,0,3,5,4,5];
let factArr = [];
for (let i = 0; i < arr.length; i++){
  let fact = 1;
  if (arr[i] < 2) {
    fact = 1;
    factArr.push(fact)
  } else {
  for(let j = 2; j <= arr[i];j++){
    fact = fact * j; 
  }factArr.push(fact)
 }
}
console.log(factArr);
