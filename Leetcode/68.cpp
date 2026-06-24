class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
    vector<string> cur; 
    vector<string> res; 
    int nol=0; 
    for(string word:words){ 
        if(word.size()+cur.size()+nol>maxWidth){ 
            for(int i=0;i<maxWidth-nol;i++){ 
                cur[i%(cur.size()-1?cur.size()-1:1)]+=' '; 
                
    } 
    
    res.push_back(""); 
    
    for(string s:cur){ 
        
    res.back()+=s; 
    
    } 
    
    cur.clear(); 
    
    nol=0; 
    
    } 
    cur.push_back(word); 
    
    nol+=word.size(); 
} 

 string ll=""; 

 for(string s:cur) ll+=s+" "; 

 ll=ll.substr(0,ll.size()-1); // right side ki trailing spaces hatt jayegi 

  while(ll.size()<maxWidth){ 

         ll+=' '; 

  } 

  res.push_back(ll); 

  return res; 
    }
};