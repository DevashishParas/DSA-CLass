function greet (name , callback){
    console.log('Hello ${name}');
    callback();

}

function goodbye(){
    console.log("goodbye")

}
greet ("shivam", goodbye);
