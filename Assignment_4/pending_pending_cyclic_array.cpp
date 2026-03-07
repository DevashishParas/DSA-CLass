#include<iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	int arr[n];
	int sum = 0;

	for(int i =0; i < n; i++){
		cin>>arr[i];
	}

	int testcase;
	cin>>testcase;

	int x;
	for(int i = 1; i <= testcase; i++){
		cin>>x;		//this is the difference in index we need to add

		int temp[n];//this makes a temp array like rotating the array 
		for(int i =x; i < n+x; i++){ 	//assigns in temp from x to n+x 
			temp[i%n] = arr[i-x];		//ans i%n takes care of overflow from 
										//n+x making it cyclic;
		}
		

		//then we add temp and arr at i
		for(int i =0 ; i< n; i++){
			arr[i] = arr[i] + temp[i];
		}

	}

	for(int i = 0; i < n; i++){
			sum += arr[i];
	}

	for(int i = 0; i < n; i++){
			cout<< arr[i]<<" ";
	}
	// cout<<sum<<endl;
	// cout<<sum%(10^9+7)<<endl;
	return 0;
}