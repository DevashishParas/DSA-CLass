//Q.15

const shopping = [ 
                    { item: "Book", price: 200 }, 
                    { item: "Pen", price: 20 }, 
                    { item: "Bag", price: 500 } 
                 ];

const totalCartValue = shopping
.reduce((sum,val) => sum + val.price ,0);

console.log("Total Cart Value :", totalCartValue);