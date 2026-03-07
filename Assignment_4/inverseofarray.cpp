#include<iostream>
#include<vector>
using namespace std;

vector <int> inverseArray(vector<int> &arr ,vector<int> &ans , int idx, int lim){
	if(idx == lim){
		return ans;
	}else{
		ans[arr[idx]] = idx;
		return inverseArray(arr, ans, ++idx, lim);
	}
}

int main() {
	int n;
	cin>>n;
	vector<int> arr(n);
	vector<int> ans(n);
	for(int i =0; i < n; i++){
		cin>>arr[i];
	}

	 ans= inverseArray(arr, ans, 0, n);

	for(int i = 0; i < n; i++ ){
		cout<<ans[i]<<" ";
	}
	return 0;
}