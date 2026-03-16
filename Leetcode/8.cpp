class Solution {
public:
    int myAtoi(string s) {
        int i=0, n=s.size();
        //white spaces 

        while (i<n and s[i] == ' '){
            i++;
            continue;


        }
        //sign ke liye check kare 
        int sign =1;
        if(i<n and (s[i]=='+' or s[i]=='-')){
            if(s[i]=='-'){
                sign= -1;

            }
            i++;

        }
        
    //conversion
    long long num=0;
    while (i<n and isdigit(s[i])){
        num=num*10+(s[i]-'0');
        if(sign*num>INT_MAX){
            return INT_MAX;

        }
        if(sign*num<INT_MIN){
            return INT_MIN;

        }
        i++;

    }
    return sign*num;

    }
}