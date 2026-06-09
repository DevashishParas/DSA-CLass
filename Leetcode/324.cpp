class Solution {
public:
    void wiggleSort(vector<int>& nums) {
         int n=nums.size();
         vector<int> S=nums;
         sort(S.begin(), S.end());
         int e=n-1;
         int m=(n-1)/2;
         int i=0;

         while(i<n){
            nums[i]=S[m];

            i+=2;
            m--;

         }
         i=1;
         while(i<n){

            nums[i]=S[e];
            i+=2;
            e--;
         }
        
    }
};