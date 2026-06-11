class Solution {
public:
  string helper(int num){
                string digitstring[]={
                    "Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"
                };

                string teenstring[]={"Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"

                };
                
                string tenstring[]={"","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety",

                };

                string result="";
                if(num>99){
                    result+=digitstring[num/100]+" "+"Hundred ";
                }
                num=num%100;
                if(num<20 and num>9){
                    result+=teenstring[num-10]+" ";

                }
                else{

                    if(num>=20){
                        result+=tenstring[num/10]+" ";
                        num=num%10;     
                    }
                        if(num>0){
                      result+=digitstring[num]+" ";
                    }
                }
                return result;

                }

    string numberToWords(int num) {

        if(num==0){
            return "Zero";
        }

        string bigstring[]={"Thousand","Million","Billion"};
        string result=helper(num%1000);
        num=num/1000;
        for(int i=0; i<3; i++){

            if(num>0 and num%1000>0){
                result=helper(num%1000)+bigstring[i]+" "+ result;
            }
            num=num/1000;

        }

        return result.empty() ? result:result.substr(0,result.size()-1);
          
            }
    
        
    
};