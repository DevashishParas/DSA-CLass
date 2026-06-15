
for(let i = 1; i <= 5; i++){
    str = "";
    for(let j = 1; j <= i; j++){
        if(j % 2 == 0){
            str+=(10 - i) + " ";
        }
        else{
            str+=i+" ";
        }
    }
    
    for(let j = 1; j <= 10 - i * 2; j++){
            str+="  ";
    }
    
    for(let j = 1; j <= i; j++){
         if(j % 2 == 0){
            str+=i+" ";
        }
        else{
            str+=(10 - i) + " ";
            
        }
    }
    
    console.log(str)
    
}


for(let i = 4; i >= 1; i--){
    str = "";
    for(let j = 1; j <= i; j++){
        if( j% 2 != 0){
            str+=(10 - i) + " ";
        }
        else{
            str+=i+" ";
        }
    }
    
    for(let j = 1; j <= 10 - i * 2; j++){
            str+="  ";
    }
    
    for(let j = 1; j <= i; j++){
         if(j % 2 != 0){
            str+=i+" ";
        }
        else{
            str+=(10 - i) + " ";
            
        }
    }
    console.log(str)
}