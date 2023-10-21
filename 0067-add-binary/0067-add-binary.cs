public class Solution {
    public string AddBinary(string a, string b) {
        if( a.Length > b.Length )
        {
            b = new string('0', a.Length-b.Length) + b;
        } 
        else 
        {
            a = new string('0', b.Length-a.Length) + a;
        }

        var result = string.Empty;
        Record(a, b, a.Length - 1, ref result);
        return result;
    }
    public string Record(string a, string b, int index, ref string result, int c=0)
    {
        if(index < 0 )
        {
            if(c == 1) result = 1 + result;
            return result;
        }

        var aNum = Convert.ToInt32(a[index].ToString());
        var bNum = Convert.ToInt32(b[index].ToString());
        var sum = aNum + bNum + c;
        if(sum > 1)
        {
            result = (sum % 2 == 0) ? 0 + result : 1 + result;

            Record(a, b, index - 1, ref result, 1);
        }
        else if ( sum == 1 )
        {
            result = 1 + result;
            Record(a, b, index - 1, ref result);
        }
        else 
        {
            result = 0 + result;
            Record(a, b, index - 1, ref result);
        }

        return result;
    }
}