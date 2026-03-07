#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main() {
	int testcases;
	cin>>testcases;

	for(int idx =1; idx <= testcases; idx++){
		int maxpath =0;
		int sizeA, sizeB;
		cin>>sizeA>>sizeB;
		int a[sizeA], b[sizeB];
		vector <int> asumvector;
		vector <int> bsumvector;

		for(int i =0; i < sizeA; i++){
			cin>>a[i];
		}
		for(int i =0; i < sizeB; i++){
			cin>>b[i];
		}

		//find sum until same element 
		int i =0, j =0, asum = 0, bsum =0;
		while(i < sizeA && j < sizeB){
			if(a[i] == b[j]){
				asum += a[i];
				bsum += b[j];
				asumvector.push_back(asum);
				bsumvector.push_back(bsum);
				i++;j++;
				asum =0;
				bsum =0;

			}
			else if(a[i] < b[j]){
				asum += a[i];
				i++;
			}else{
				bsum += b[j];
				j++;
			}
		}

		while(i < sizeA){
			asum += a[i];
			i++;
		}
		asumvector.push_back(asum);

		while(j < sizeB){
			bsum += b[j];
			j++;
		}
		bsumvector.push_back(bsum);


		for(int k =0; k < asumvector.size(); k++){
			maxpath += max(asumvector[k], bsumvector[k]);
		}

		cout<<maxpath<<endl;
	}
	return 0;
}