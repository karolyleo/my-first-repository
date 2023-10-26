public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int result = 0, count = 0;
        for(int i = 0; i < nums.Length; i++)
        {
            if(nums[i] == 1) count++;
            if(nums[i] == 0) count = 0;
            if(count >= result) result = count;
        }
        return result;
    }
}