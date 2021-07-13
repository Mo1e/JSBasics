let array1 = [1,3,5,7,9];
let n = array1.length;
function reverseArrays(arr, n){
  let rev = new Array(n);
  for(let i = 0; i < arr.length; i++) {
    rev[n-i-1] = arr[i];
  }
  for (let i = 0; i < arr.length; i++){
    arr[i] = rev[i];
  }
  console.log(arr);
}
reverseArrays(array1, n);
