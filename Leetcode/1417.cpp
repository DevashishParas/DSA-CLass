class Solution {
public:
    string reformat(string s) {
        vector<char> digits, letters;

        // Separate digits and letters
        for (char c : s) {
            if (isdigit(c))
                digits.push_back(c);
            else
                letters.push_back(c);
        }

        // Impossible case
        if (abs((int)digits.size() - (int)letters.size()) > 1)
            return "";

        string result = "";

        // Decide who starts first
        bool digitFirst = digits.size() > letters.size();

        int i = 0, j = 0;

        while (i < digits.size() || j < letters.size()) {

            if (digitFirst && i < digits.size()) {
                result += digits[i++];
            }

            if (j < letters.size()) {
                result += letters[j++];
            }

            if (!digitFirst && i < digits.size()) {
                result += digits[i++];
            }
        }

        return result;
    }
};
        
