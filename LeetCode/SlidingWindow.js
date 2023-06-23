var maxSlidingWindow = function (a, wLen) {      // Define a function named maxSlidingWindow that takes two arguments, an array a and a window length wLen
    let n = a.length,                           // Initialize a variable n as the length of array a
        q = [],                                 // Initialize an empty array q
        ans = [];                               // Initialize an empty array ans
    
    for (let R = 0; R < n; R++) {                // Loop through the elements of array a with index R
        while (q.length && a[R] >= q[q.length - 1][1]) {  // While q is not empty and the current element in a is greater than or equal to the last
                                                // element in q,
            q.pop();                            // remove the last element from q
        }
        q.push([R, a[R]]);                      // Add a new array [R, a[R]] to the end of q, representing the index and value of the current element in a
        if (R < wLen - 1) continue;             // If the current index R is less than wLen - 1, skip the rest of the loop and move on to the next index
        
        while (q[0][0] <= R - wLen) {           // While the index of the first element in q is less than or equal to the difference between the current index R and the window length wLen,
            q.shift();                          // remove the first element from q
        }
        ans.push(q[0][1]);                      // Add the value of the first element in q to the end of ans
    }
    return ans;                                 // Return ans
};
