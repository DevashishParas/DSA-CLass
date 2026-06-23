class Solution {
public:
    bool xorGame(vector<int>& nums) {
        int x=0;
        int n=nums.size();
        for(int i:nums){
            x^=i;
        }
        if(x==0)return 1;
        return n%2==0;
    }
};