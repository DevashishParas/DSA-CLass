class Solution {
public:
    string entityParser(string text) {
        unordered_map<string, string> mp = {
            {"&quot;", "\""},
            {"&apos;", "'"},
            {"&amp;", "&"},
            {"&gt;", ">"},
            {"&lt;", "<"},
            {"&frasl;", "/"}
        };

        string ans;
        int n = text.size();

        for (int i = 0; i < n; ) {
            bool found = false;

            if (text[i] == '&') {
                for (auto &p : mp) {
                    const string &entity = p.first;

                    if (i + entity.size() <= n &&
                        text.substr(i, entity.size()) == entity) {
                        ans += p.second;
                        i += entity.size();
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                ans += text[i];
                i++;
            }
        }

        return ans;
    }
};
    