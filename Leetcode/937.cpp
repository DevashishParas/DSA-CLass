class Solution {
public:
    vector<string> reorderLogFiles(vector<string>& logs) {
        stable_sort(logs.begin(), logs.end(),
            [](const string& a, const string& b) {
                int posA = a.find(' ');
                int posB = b.find(' ');

                string idA = a.substr(0, posA);
                string idB = b.substr(0, posB);

                string logA = a.substr(posA + 1);
                string logB = b.substr(posB + 1);

                bool digitA = isdigit(logA[0]);
                bool digitB = isdigit(logB[0]);

                // Both are letter logs
                if (!digitA && !digitB) {
                    if (logA == logB)
                        return idA < idB;
                    return logA < logB;
                }

                // Letter log comes first
                if (!digitA && digitB)
                    return true;

                if (digitA && !digitB)
                    return false;

                // Both digit logs: keep original order
                return false;
            });

        return logs;
    }
};