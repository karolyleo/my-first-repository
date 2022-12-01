function bouncer(arr) {
  return arr.filter(Boolean) //introduction to filter
}

bouncer([7, "ate", "", false, 9]);

// function bouncer(arr) {
//   let newArr =[];
//   for(let i= 0; i<arr.length;i++){
//     if(arr[i]) newArr.push(arr[i])
//   } return(newArr)
// }    //this was the initial but not the most effective