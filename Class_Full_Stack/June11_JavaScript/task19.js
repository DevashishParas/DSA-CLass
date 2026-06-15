//Q.19 Product Discount

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const discountedProducts = products.map(product => {
    return {
        name: product.name,
        price: product.price * 0.9
    };
});

console.log("After discount :", discountedProducts);