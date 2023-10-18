public class Solution {
    public int ClimbStairs(int n) {
        if (n == 1) return 1;

        int first = 1, second = 2, output = second;

        for(int i = 3; i <= n; i++)
        {
            output = first + second;
            first = second;
            second = output;
        }
        return output;
    }
}