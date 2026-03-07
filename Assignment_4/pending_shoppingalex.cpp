#include<iostream>
using namespace std;

int gcdof(int a, int b){
	if(b ==0)
		return a;
	else
		return gcdof(b, a%b);
}

int lcmOf(int a, int b){
	int gcd = gcdof(a,b);
	int product = a*b;

	return product/gcd;
}

int lcmOfarray(int arr[] , int size){	
	int lcm = arr[0];

	for(int i =1; i < size; i++){
		lcm = lcmOf(lcm, arr[i]);
	}
	return lcm;
}

int main() {

	int size;
	cin>>size;

	int itemsprice[size];

	for(int i = 0; i < size;  i++){
		cin>>itemsprice[i];
	}

	int lcm = lcmOfarray(itemsprice, size);
	int noOfQueries;
	cin>>noOfQueries;

	for(int i =1; i <= noOfQueries; i++){
		int money, k ;
		cin>>money;
		cin>>k;
		if(money % lcm == 0 || lcm % money ==0){
			cout<<"Yes"<<endl;
		}else{
			cout<<"No"<<endl;
		}
	}

	return 0;
}