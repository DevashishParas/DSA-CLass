#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
bool isPowerOfTwo(int n) {
    return n>0 and (n&(n-1))==0;
}
int main() {
    cout<<isPowerOfTwo(16)<<endl;
    return 0;
}