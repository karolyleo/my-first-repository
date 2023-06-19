function fearNotLetter(str) {
  let letters='abcdefghijklmnopqrstuvwxyz'
  let adjustedI=letters.indexOf(str[0])
  for(let i=0;i<str.length;i++){
    if (str[i] !==(letters[adjustedI+i])){
      return letters[adjustedI+i];
    }
  }
}

console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("stvwx"));
// console.log(fearNotLetter("abcdefghjklmno"));

//loop array that is searching for inequality
// function fearNotLetter(str) {
//   let letters = 'abcdefghijklmnopqrstuvwxyz'
//   return (str===letters)?(undefined):
//   letters
//   .split('')
//   [str.length-1]
// }