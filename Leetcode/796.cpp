class Solution {
public:
    bool rotateString(string s, string goal) {

        // Lengths must match
        if (s.size() != goal.size())
            return false;

        // Check if goal is substring of s+s
        string doubled = s + s;

        return doubled.find(goal) != string::npos;
    }
};
        
    