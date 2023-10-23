public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int result = 0,
            count = 0;
        foreach(int num in nums) 
        {
            if(num == 1) count++;
            if(num == 0) count = 0;
            if(count >= result) result = count;
        }
        return result;
    }
}