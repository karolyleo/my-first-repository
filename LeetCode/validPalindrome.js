//Given a string s, return true if the s can be palindrome after deleting at most one character from it.
//
//
//
// Example 1:
//
// Input: s = "aba"
// Output: true
// Example 2:
//
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:
//
// Input: s = "abc"
// Output: false
var validPalindrome = function(string) {
    let left = 0
    right = string.length -1;
    while(left<right){
        if(string[left]!==string[right]){
            return innerPalindrome(string, left+1,right) || innerPalindrome(string, left, right-1);
        }
        left++;
        right--;
    }

    function innerPalindrome(innerString, left, right){
        while(left<right){
            if(innerString[left]!==innerString[right]) return false;
            left++, right--;
        }
        return true;
    }

    return true;
};
//25 Jan 2023