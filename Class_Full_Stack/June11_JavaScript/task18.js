//Q.18

const users = [ 

    { name: "John", age: 25 }, 
    { name: "Emma", age: 16 }, 
    { name: "Alex", age: 20 }
];

const names = users
.filter(user => user.age >= 18)
.map(user => user.name);

console.log("Name of adult :", names);