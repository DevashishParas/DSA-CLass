#include<iostream>
#include<vector>
using namespace std;
void sortpatients(vector <int> &a){
	int zeroes =0; 
	int ones = 0;
	int lim = a.size();

	for(int i =0 ; i < lim; i++){
		if(a[i] == 0)
			zeroes++;
		else if(a[i] == 1)
			ones++;
	}

	for(int i =0; i < lim; i++){
		if(zeroes> 0){
			a[i] = 0;
			zeroes--;
		}else if(ones >0){
			a[i] = 1;
			ones--;
		}else{
			a[i] = 2;
		}
	}
}
int main() {

	int n;
	cin>>n;
	vector<int> a(n);

	for(int i =0; i < n; i++){
		cin>>a[i];
	}

	sortpatients(a);

	for(int i =0; i < n; i++){
		cout<<a[i]<<endl;
	}
	return 0;
}