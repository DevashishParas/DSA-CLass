function add(x,y){
    return x+y;
}

console.log(add(7,8));
console.log(add("10",5))


// function declaration.... function calling....

function greet(){
    console.log("Welcome to SIP")
}

greet();

//arguments -> the values which are passed in an function (here)
//parameter -? the values which are used inside the function definition 


function greet(name){
    console.log("Hello" + " " + name);
}

function user(add){
    console.log(add); 
}

user(add(10.5)) 