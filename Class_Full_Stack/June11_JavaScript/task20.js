//Q.20

const results = [
    { name: "John", marks: 80 }, 
    { name: "Emma", marks: 40 }, 
    { name: "Alex", marks: 70 } 
]

const passStudents = results
.filter(num =>num.marks >= 50)
.map(num => num.name);

console.log("Students who passed:", passStudents);