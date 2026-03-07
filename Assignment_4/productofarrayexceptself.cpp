#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    long arr[n];
    long leftproduct [n], rightproduct[n];

    for(int i =0 ; i < n; i++){
        cin>>arr[i];
    }
    
    long product = 1;
    for(int i =0; i < n; i++){
        leftproduct[i] = product;
        product *= arr[i];
    }
    product = 1;
    for(int i =n-1; i >= 0; i--){
        rightproduct[i] = product;
        product *= arr[i];
    }

    for(int i =0 ; i < n; i++){
        arr[i] = leftproduct[i] * rightproduct[i];
    }

    for(int i =0; i < n ; i++){
        cout<<arr[i]<<" ";
    }

return 0;
}