// You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:
//
//     If nums[i] is positive, move nums[i] steps forward, and if nums[i] is negative, move nums[i] steps backward. Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and moving backwards from the first element puts you on the last element. A cycle in the array consists of a sequence of indices seq of length k where:
//     Following the movement rules above results in the repeating index sequence seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...
// Every nums[seq[j]] is either all positive or all negative. ||  k > 1  ||  Return true if there is a cycle in nums, or false otherwise.
// ------
//     Example 1: Input: nums = [2,-1,1,2,2] || Output: true
// Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward. We can see the cycle 0 --> 2 --> 3 --> 0 --> ..., and all of its nodes are white (jumping in the same direction).
//---
// Example 2: Input: nums = [-1,-2,-3,-4,-5,6] || Output: false
// Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward. The only cycle is of size 1, so we return false.
//---
//     Example 3: Input: nums = [1,-1,5,1,4] || Output: true
// Explanation: The graph shows how the indices are connected. White nodes are jumping forward, while red is jumping backward.
//     We can see the cycle 0 --> 1 --> 0 --> ..., and while it is of size > 1, it has a node jumping forward and a node jumping backward, so it is not a cycle. We can see the cycle 3 --> 4 --> 3 --> ..., and all of its nodes are white (jumping in the same direction).
//---
// Constraints: 1 <= nums.length <= 5000   ||  -1000 <= nums[i] <= 1000 || nums[i] != 0

var circularArrayLoop = function(nums) {
    const visited = Array.from({ length: nums.length }, () => 0);    // SHALLOW COPY: Create an array of the same length as nums and fill it with 0s. This array will be used to mark if an element in nums has been visited.
    const N = nums.length; // Save the length of nums as a constant

    // Create constants for the different states of an element in visited
    const VISITING = 1;
    const VISITED = 2;

    // Iterate through original array
    for (let i = 0; i < nums.length; i++) {
        if (visited[i] === VISITED) continue;        // If the current index has already been visited, skip it
        if (traverse(i)) return true;        // Call traverse with the current index. If it returns true, return true
    }
    return false;    // If no loop is found, return false

    // Define the traverse function, which takes in the current index (slow)
    function traverse(slow) {
        const fast = (slow + (nums[slow] % N) + N) % N;    // Calculate the next index (fast)
        if (visited[slow] === VISITING) return true;                // If the current index has been visited before, return true
        visited[slow] = VISITING;    // Mark the current index as being visited

        if (slow === fast || nums[slow] * nums[fast] < 0) {        // If the current index is the same as the next index, or the current and next elements have different signs
            visited[slow] = VISITED;
            return false;        // Mark the current index as visited and return false
        }
        // Recursively call traverse with the next index.  If it returns true, return true
        if (traverse(fast)) return true;

        visited[slow] = VISITED;        // Mark the current index as visited
        return false;
        // Return false
    }
};

export function circularArrayLoopS(nums){
    const visited = Array.from( { length: nums.length } , () => 0 ),
        N = nums.length;
    let VISITING = 1, 
    VISITED=2;
    for(let i = 0 ; i < nums.length; i++ ) {
        if ( visited[i] === VISITED ) continue;
        if ( traverse(i) ) return true;
    }
    return false;
    function traverse(slow) {
        const fast = ( slow + ( nums[slow] % N ) + N ) % N;
        if ( visited[slow] === VISITING ) return true;
        visited[slow] = VISITING;
        if ( slow === fast || nums[slow] * nums[fast] < 0 ) {
            visited[slow] = VISITED;
            return false;
        }
        if ( traverse(fast) ) return true;
        visited[slow] = VISITED;
        return false;
    }
}