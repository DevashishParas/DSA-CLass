#include <iostream>
using namespace std;
// No arguement and No return
void greet(){
    cout<<"hello"<<endl;
}
// Arguemnt and No return
void great(string name){
    cout<<"hello"<<" "<<name<<endl;
}
// No arguement and return
int subtract(){
    int a=5;
    int b=2;
    int c=a-b;
    return c;
}
//Arguement and return
int add(int a,int b){
    int c=a+b;
    return c;
}
int main() {
    greet();
    great("Naman");
    cout<<subtract()<<endl;
    cout<<add(5,10)<<endl;
    return 0;
}