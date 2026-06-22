const promise= new Promise((res, rej) =>{
    let s=true;
    if(s){
        res ("fulfilled");

    }
    else{
        rej("tera password galat hai");

    }
});

console.log(promise);
