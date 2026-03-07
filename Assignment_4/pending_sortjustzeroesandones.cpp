// sortjustzeroesandones.cpp

#include<iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	int arr[n];
	int zeroes= 0;

	for(int i =0; i < n; i++){
		cin>>arr[i];
		if(arr[i] ==0){
			zeroes++;
		}
	}
	
	for(int i= 0; i < n; i++){
		if(zeroes > 0){
			arr[i] = 0;
			zeroes --;
		}
		else{
			arr[i] = 1;
		}	
	}

	for(int i =0; i < n; i++){
		cout<<arr[i]<<" ";
	}
	return 0;
}