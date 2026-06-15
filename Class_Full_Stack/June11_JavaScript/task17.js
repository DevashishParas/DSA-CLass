//Q.17

const numbers = [10, 20, 30, 40];

const add = numbers
.reduce((sum,num) => sum + num, 0);

console.log('Sum :', add);