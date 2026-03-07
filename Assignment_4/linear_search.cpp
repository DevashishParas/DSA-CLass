#include<iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	int arr[n];
	int flag =-1;

	for(int i =0; i < n; i++){
		cin>>arr[i];
	}
	int target ;
	cin>>target;
	for(int i= 0; i < n; i++){
		if(arr[i] == target){
			flag = i;
			break;
		}
	}
	cout<<flag;
	return 0;
}