public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        //Create a Dictionary that holds lists (value) and alphabetical order of word (key)
        Dictionary<string, List<string>> sortedGroups = new Dictionary<string, List<string>>();

        for(int i = 0; i < strs.Length; i++)
        {
            char[] charArr = strs[i].ToCharArray();
            Array.Sort(charArr);

            string alphabetized = new string(charArr);

            Console.WriteLine(alphabetized);

            if(!sortedGroups.ContainsKey(alphabetized))
            {
                sortedGroups[alphabetized] = new List<string>();
            }
            sortedGroups[alphabetized].Add(strs[i]);
        }
        IList<IList<string>> result = new List<IList<string>>();
        foreach(IList<string> anagramGroup in sortedGroups.Values) result.Add(anagramGroup);
        return result;

    }
}