#include<iostream>
using namespace std;

void reverseArray(int * arr, int lim){
	int left = 0, right = lim -1;

	while(left < right){
		int temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}
}
int main() {
	int n;
	cin>>n;
	int arr[n];

	//input array
	for(int i = 0 ; i < n; i++){
		cin>>arr[i];
	}

	reverseArray(arr ,n);

	for(int i =0 ; i < n ; i++){
		cout<<arr[i]<<endl;
	}

	return 0;
}