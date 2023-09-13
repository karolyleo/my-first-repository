public class Solution {
    public int SearchInsert(int[] nums, int target) {
        // int i = 0; This was done in O(n)
        // foreach(int num in nums) {
        //     if(num >= target){
        //         return i;
        //     }
        //     i++;
        // }
        // return i;

        // This is O(log n)
        int left = 0, right = nums.Length - 1;

        while( left <= right) {
            int mid = left + (right - left) / 2;

            if(nums[mid] == target) {
                return mid;
            }else if(nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
}