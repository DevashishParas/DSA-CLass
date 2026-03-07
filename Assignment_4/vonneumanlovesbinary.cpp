#include<iostream>
#include<cmath>
using namespace std;
int main() {
	int n;
	cin>>n;

	for(int i =1; i <= n; i++){
		long bn;
		cin>>bn;
		int g =0;
		int dec =0;
		while(bn != 0){
			int ldigit = bn % 10;
			dec += ldigit * pow(2,g);
			g++; 
			bn /= 10; 
		}
		cout<<dec<<endl;
	}
	return 0;
}