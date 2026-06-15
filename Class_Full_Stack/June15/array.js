

 let array=["Apple", "Banana", "Mango", "Litchi","Guava"];

 

 // length
 //array ka size batayega

 console.log(array.length);

 //push
 //array ke andar element daal dega  last me 

 array.push("Watermelon");
 console.log(array);


 // pop
 // element remove kar dega last me \
 

 array.pop();
 console.log(array);

 

 //unshift 
// element ko shuru me daal dega 


array.unshift("Watermelon");
console.log(array);




// shift 
// pehle wala element hata dega 


array.shift();
console.log(array);




//includes 
// check item is present or not true or false 

console.log(array.includes("Mango"));
console.log(array.includes("Watermelon"));




//indexof 
// particular element ka index return kar dega


console.log(array.indexOf("Mango"));




//join
// saare elements join kar degi 




console.log(array.join("-"));




//slice 
// index ke bich me kitne index hein 


console.log(array.slice(1,3));



//splice
// all indexes are included which user will give



console.log(array.splice(1,4));




//normal for loop


 array=["Apple", "Banana", "Mango", "Litchi","Guava"];

console.log("for loop")
for(var i=0; i<array.length; i++){
console.log(array[i]);

}



//for of loop

console.log("for of loop")
for(let i of array){
    console.log(i);

}


//for each 

console.log("for each")
array.forEach(function(i){
    console.log(i);
})







//Advanced Array Method 

//Map
// Saare elements par conditions apply kar dega 

array=[1,2,3,4,5,6,7,8,9,10];

const double=array.map(function(x){

    return x*2;

});

 console.log(double);



 // filter 
// tumhari condition check karega jo bhi element condition pass hoga vo new array me aa jayega 

const even=array.filter(function(x){

    return x%2==0;
});

const evendemo=array.filter(x=>x%2==0);
console.log(even);
console.log(evendemo);


const odddemo=array.filter(x=>x%2!=0);
console.log(odddemo);


// reduce 
// saare elements ko ek variable me convert kar dega


const sum=array.reduce(function(sum,x){
    return sum+x;

},0);

const sum1=array.reduce(function(sum,x){
    return sum+x;
});

const sum2=array.reduce((sum,x)=>sum+x,0);
const sum3=array.reduce((sum,x)=>sum+x);
console.log(sum);
console.log((sum1));
console.log((sum2));
console.log((sum3));



// find
// jese hi condition satisfy hui vese hi return kar diyaa

const f=array.find(function(x){
    return x>3;
})
const fdemo=array.find(x=>x>3);
console.log(f);
console.log(fdemo);


//some

const s=array.some(function(x){
    return x>3;
    });

 const sdemo=array.some(x=>x>3);
    console.log(s);
    console.log(sdemo);


    //every 
    // saare elements condition satisfy karenge to true dega varna nahi dega 

 const e=array.every(function(x){
        return x>5;
 });

const edemo=array.every(x=>x>5);
console.log(e);
console.log(edemo);    