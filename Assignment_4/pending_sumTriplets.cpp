#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

void tripletsIn(vector <int> nums, int target){
	int lim = nums.size();
	for(int i = 0 ; i < lim -2; i++){
		int left = i +1;
		int right = lim -1;

		while(left < right){

			if(nums[i] + nums[left] + nums[right] == target){
				cout<<nums[i]<<", "<<nums[left]<<" and "<<nums[right]<<endl;
				left++;
				right--;
			}
			else if(nums[i] + nums[left] + nums[right] < target){
				left++;
			}
			else{
				right--;
			}
		}
	}
}
int main() {

	int n , target;
	cin>>n;
	vector<int> a(n);
	
	for(int i =0 ; i < n; i++){
		cin>>a[i];
	}
	cin>>target;
	sort(a.begin(), a.end());
	
	tripletsIn(a, target);
	
	return 0;
}