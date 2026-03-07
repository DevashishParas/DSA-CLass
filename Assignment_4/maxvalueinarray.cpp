#include<iostream>
using namespace std;

int solution(){
	int n;
	cin>>n;
	int arr[n];
	int max =-32767;

	for(int i =0 ;i < n; i++){
		cin>>arr[i];
	}

	for(int i =0 ;i < n; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}

	return max;

}
int main() {
	int ans ;
	ans= solution();
	cout<<ans<<endl;
	return 0;
}