class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> mp;

        for (string path : paths) {
            stringstream ss(path);
            string root;
            ss >> root;

            string file;
            while (ss >> file) {
                int left = file.find('(');
                int right = file.find(')');

                string fileName = file.substr(0, left);
                string content = file.substr(left + 1, right - left - 1);

                string fullPath = root + "/" + fileName;
                mp[content].push_back(fullPath);
            }
        }

        vector<vector<string>> result;

        for (auto &entry : mp) {
            if (entry.second.size() > 1) {
                result.push_back(entry.second);
            }
        }

        return result;
    }
};