#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;

vector <int> bestprice(vector <int> &arr, int target){
	vector<int> ans(2);
	int left = 0, right = arr.size()-1;

	while(left <right){
		int sum = arr[left] + arr[right];
		if(sum > target){
			right--;
		}
		else if(sum < target){
			left++;
		}else{
			ans[0] = arr[left];
			ans[1] = arr[right];
			left ++;
			right--;
		}
	}
	// cout<<ans[0]<<" "<<ans[1];
	return ans;
}

int main() {
	int testcase; 
	cin>>testcase;

	for(int idx= 1; idx <= testcase; idx++){
		int totalroses, money;
		cin>>totalroses;
		vector <int> roseprice(totalroses);
		vector<int> ans(2); //this will be used to store the two values

		//input roses
		for(int i = 0; i < totalroses; i++){
			cin>>roseprice[i];
		}
		//input money 
		cin>>money;

		sort(roseprice.begin(), roseprice.end());
		
		ans = bestprice(roseprice, money);
		
		cout<<"Deepak should buy roses whose prices are "<<ans[0];
		cout<<" and "<<ans[1]<<"."<<endl<<endl;
	}
	return 0;
}