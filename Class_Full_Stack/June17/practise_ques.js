//ques 1
 


const names=["devansh","vishal","vidit"];
const q1 =names.map(names=> names.toUpperCase());
console.log(q1);





//ques 2

const products=[
    {id:1,name:"Laptop"},
    {id:2,name:"Phone"},
    {id:3,name:"Tablet"}
];

const a = products.map(product => product.name);
console.log(a);




//ques 3


const words=["apple","banana","cat","elephant","dog"];
const b = words.filter(word => word.length > 5);
console.log(b);





//ques 4
//filter adults

const users = [{name:"A", age:16},{name:"B", age:22}, {name:"C",age:19}];
const big = users.filter(users => users.age >= 18).map(users => users.age); 
console.log(big);





//ques 5
//total count character

const print = ["hello", "world", "javascript"];
const count1 = print.reduce((total,print) => total += print.length,0);
console.log(count1);




//ques 6
//Squer of even number


const nums =[1,2,3,4,5,6,7,8,9];
const Count = nums.filter(nums => nums %2 == 0).map(nums => nums*nums,0);
console.log(Count);





//ques 7
//salary of employees



const employees = [{name:"A",salary:30000},
    {name:"B",salary:50000},{name:"C",salary:40000}
];
const toto = employees.reduce((total,employees)=>total+=employees.salary,0);
console.log(toto);





//ques 8

const passMarks = 40;
const students = [
    { name: "A", marks: 35 },
    { name: "B", marks: 75 },
    { name: "C", marks: 45 },
    { name: "D", marks: 25 }
];

const c = students
    .filter(student => student.marks > passMarks)
    .map(student => student.name);

console.log(c);






//ques 9 


const marks = [80,90,70,60]

const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;

console.log(average);





//ques 10


const fruits =["apple","banana","orange","apple","banana","apple"];
    
const q10arr=fruits.reduce((occ,fruit)=>{occ[fruit]=(occ[fruit]||0)+1;
    return occ},{});

console.log(q10arr);


