function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)]
}//this is the way...

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// function frankenSplice(arr1, arr2, n) {
//   let helperArr = arr2.slice();
//   helperArr.splice(n, 0, ...arr1)
//   return helperArr;
// }
/*looking for the most optimal => this was the initial solution I came across*/