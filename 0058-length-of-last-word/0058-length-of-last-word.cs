using System.Text.RegularExpressions;
public class Solution {
    public int LengthOfLastWord(string s) {
        string[] words = Regex.Split(s.TrimEnd(), @"\s+");
        return words[words.Length - 1].Length;
    }
}