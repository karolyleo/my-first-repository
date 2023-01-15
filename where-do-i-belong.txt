
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}


getIndexToIns([5, 3, 20, 3], 5); getIndexToIns([2, 5, 10], 15)//getIndexToIns([2, 5, 10], 15);
// function getIndexToIns(arr, num) {
//   let newArr = arr.sort((a, b) => a-b) //console.log(newArr)
// let mapArr = arr.map(x => (x>=num))//console.log(mapArr)
// return (mapArr.indexOf(true)>= 0)? mapArr.indexOf(true):mapArr.length 
// } /* this is the way I found on my own
//Why is Kaci a grumpy girl who wear glasses