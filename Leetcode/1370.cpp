class Solution {
public:
    string sortString(string s) {
        vector<int> freq(26, 0);

        for (char c : s) {
            freq[c - 'a']++;
        }

        string ans;

        while (ans.size() < s.size()) {

            // Increasing order
            for (int i = 0; i < 26; i++) {
                if (freq[i] > 0) {
                    ans += (char)(i + 'a');
                    freq[i]--;
                }
            }

            // Decreasing order
            for (int i = 25; i >= 0; i--) {
                if (freq[i] > 0) {
                    ans += (char)(i + 'a');
                    freq[i]--;
                }
            }
        }

        return ans;
    }
};
    