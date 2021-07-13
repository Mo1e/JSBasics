let a = ([11,22,33,44,55]);
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log(arr);
}
swap(a,1,4)
