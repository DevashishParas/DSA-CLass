#include<iostream>
using namespace std;
int min(int a, int b){
	if(a < b){
		return a;
	}
	else{
		return b;
	}
}
int solution(){
	int someROrC =0;
	int totalcostofrickshaws =0;
	int totalcostofcabs= 0;
	int finalcost =0;
	

	int c1, c2, c3, c4;
	cin>>c1>>c2>>c3>>c4;

	int rickshawsToBeUsed, cabsToBeUsed; 
	cin>>rickshawsToBeUsed>>cabsToBeUsed;

	//rickshaw usage entry 
	for(int i =0; i < rickshawsToBeUsed; i++){
		int n;
		cin>>n;
		someROrC += min(n * c1, c2);
	}
	totalcostofrickshaws = min(someROrC,c3);

	someROrC =0;
	//cab usage entry
	for(int i =0 ; i <cabsToBeUsed; i++){
		int n;
		cin>>n;
		someROrC += min(n * c1, c2);
	}

	totalcostofcabs = min(someROrC, c3);

	finalcost = min(totalcostofcabs + totalcostofrickshaws, c4);
	return finalcost;

}
int main() {
	int testcase; 
	cin>>testcase;

	for(int i =1; i <= testcase; i++){

		int ans = solution();
		cout<<ans<<endl;
	}
	return 0;
}