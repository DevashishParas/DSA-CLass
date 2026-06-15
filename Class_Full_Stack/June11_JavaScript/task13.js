//Q.13

const even = [1, 2, 3, 4, 5, 6]

const squared = even
.filter(num => num % 2 === 0)
.map(num => num*num);

console.log("Sqaures of even numbers only :", squared);