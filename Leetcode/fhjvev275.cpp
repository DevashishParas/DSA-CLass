class Solution {
public:
    int hIndex(vector<int>& citations) {
        int n=citations.size();
        int s=0;
        int e=n-1;
        int ans=0;
        while(s<=e){
            int m=s+(e-s)/2;
            if(citations[m]>=n-m){
                ans=max(ans,n-m);
                e=m-1;

            }
            else{
                s=m+1;

            }
        }
        return ans;
        
    }
};