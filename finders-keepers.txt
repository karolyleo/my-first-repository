function findElement(arr, func) {
  return arr.find(func); //find method with return => outputs the first possible 'true'
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
// function findElement(arr, func) {
//   for(let i=0;i<arr.length;i++){
//     if(func(arr[i])===true){
//       return arr[i]
//     }
//   }
// }