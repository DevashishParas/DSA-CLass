//Q.12

const products2 = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];

const prices = products2.map(product => product.price);

const highestPrice = Math.max(...prices);

console.log("All Prices:", prices);
console.log("Highest Price:", highestPrice);