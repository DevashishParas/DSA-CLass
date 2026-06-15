//Q 10

const users = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

const loginCount = users.filter(
  user => user.action === "login"
).length;

console.log("Total Logins", loginCount);