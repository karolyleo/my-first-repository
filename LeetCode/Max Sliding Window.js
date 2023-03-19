function maxSlidingWindow(arr, wLen){
    let queue = [], ans = [];
    for(let index = 0; index < arr.length; index++){
        while(queue.length && arr[index] >= queue[queue.length - 1][1]){
            queue.pop();
        }
        queue.push( [index, arr[index] ] );
        if (index < wLen -1) continue;

        while( queue[0][0] <= index-wLen ) {
            queue.shift();
        }
        ans.push(queue[0][1]);
    }
    return ans;
}