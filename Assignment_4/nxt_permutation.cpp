#include<bits/stdc++.h>
#include<iostream>
#include<algorithm>
using namespace std;
int main() {

	int n, minIdx;
	cin>>n;
	int a[n];

	for(int i =0;  i < n; i++){
		cin>>a[i];
	}
	bool swapped = false;
	int i = n-1;
	minIdx = n-1;

	//swaps the smallest element with next big element
	while(swapped == false && i > 0){

		// if(a[minIdx] > a[i]){
		// 	minIdx = i;
		// }
		if( a[i] > a[i-1]){ //here you find the moment it is in descending 
							//from the back
			swap(a[i], a[i-1]);//then swap a[i-1] with the a[minIdx] element 
			swapped =true;
		}
		i--;
	}

	//if no swapping occurs then it means it is in descending and return sorted array
	if(swapped ==false){

		for(int iidx =i; iidx < n-1; iidx++){
			int min = iidx;
			for(int jidx = iidx+1; jidx < n; jidx++){
				if (a[min] > a[jidx]){
					min = jidx;
				}
			}
			swap(a[min] , a[iidx]);
		}

	}else{

		for(int iidx =i+1; iidx < n-1; iidx++){
			int min = iidx;
			for(int jidx = iidx+1; jidx < n; jidx++){
				if (a[min] > a[jidx]){
					min = jidx;
				}
			}
			swap(a[min] , a[iidx]);
		}

	}

	for(int i = 0; i < n; i++){
		cout<<a[i]<<" ";
	}
	return 0;
}