function palindrome(string) {
  //remove all extra characters
  string = string.replace(/\W|_/g, '').toLowerCase();
  //reverse the string
  let reverse = string.split('').reverse().join('');
  //return a boolean comparison
  return string === reverse
}
//Used for testing
palindrome("eye");
palindrome("0_0 (: /-\ :) 0-0")
palindrome("A man, a plan, a canal. Panama")
palindrome("five|\_/|four")