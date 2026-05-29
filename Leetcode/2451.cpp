class Solution {
public:
    string oddString(vector<string>& words){
        unordered_map<string, vector<string>> mp;

        for (string &w : words) {
            string pattern = "";

            for (int i = 1; i < w.size(); i++) {
                pattern += to_string(w[i] - w[i - 1]) + ",";
            }

            mp[pattern].push_back(w);
        }

        for (auto &it : mp) {
            if (it.second.size() == 1) {
                return it.second[0];
            }
        }

        return "";
    }
};
    