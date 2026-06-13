const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] },
  { name: "Alex", marks: [60, 70, 65] }
];

const averages = students.map(student => ({
  name: student.name,
  average:
    student.marks.reduce((sum, mark) => sum + mark, 0) /
    student.marks.length
}));

console.log(averages);




const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] },
  { name: "Alex", marks: [60, 70, 65] }
];

const qualifiedStudents = students.filter(student => {
  const average =
    student.marks.reduce((sum, mark) => sum + mark, 0) /
    student.marks.length;

  return average >= 85;
});

console.log(qualifiedStudents);


const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] },
  { name: "Alex", marks: [60, 70, 65] }
];

const sortedNames = students
  .map(student => ({
    name: student.name,
    average:
      student.marks.reduce((sum, mark) => sum + mark, 0) /
      student.marks.length
  }))
  .sort((a, b) => b.average - a.average)
  .map(student => student.name);

console.log(sortedNames);