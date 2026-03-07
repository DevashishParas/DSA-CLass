#include <iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main() {

    int n;
    cin>>n;
    int a[n];

    for(int i =0; i<n; i++){
        int num; 
        cin>>num;
        a[i] = num*num;
    }

    for(int i = 0; i <n-1; i++){
        int min = i; //the reason we take index as min is to ease the swap 
                    //between two indices
        for(int j = i+1; j < n; j++){
            if(a[j] < a[min]){
                min = j;
            }
        }
        //swap
        swap(a[min], a[i]);
    }
    
    for(int i =0; i <n; i++){
        cout<<a[i]<<" ";
    }

    return 0;
}
