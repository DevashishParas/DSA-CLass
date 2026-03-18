class Solution {
public:
    int lengthOfLastWord(string s) {
            int l=0;
            for(int i=s.size()-1; i>=0; i--){
                if(s[i]==' ' and l==0){
                    continue;

                }
                if(s[i]!=' '){
                    l++;
                }
                else {
                    break;

                }
            }
            return l;
        
        
    }
};