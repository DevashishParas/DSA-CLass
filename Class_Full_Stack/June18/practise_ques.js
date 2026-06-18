//ques 11
//Top performing students

const students2=[
    {
          name:"Utkarsh",marks:[80,90,85]
    },

    {
          name:"Yukta",marks:[95,92,98]
    },

    {
          name:"Navneet",marks:[60,70,65]
    }
];

// calculate average marks


const topStudent = students2.reduce((top, student) => {
    if (student.marks > top.marks) {
        return student;
    }
    return top;
});

console.log("Top Performing Student:");
console.log("Name:", topStudent.name);
console.log("Marks:", topStudent.marks);
