//Q.14

const marks = [45, 80, 60, 90, 30] 

const newMarks = marks
.filter(num => num > 50)

const averageMarks = newMarks
.reduce ((sum, mark) => sum + mark,0) / newMarks.length;

console.log("Average Marks :", averageMarks);