const addProduct = (product, products) => [...products, product];

const products = [
  { name: "Laptop", price: 999.99, quantity: 5 },
  { name: "Phone", price: 499.99, quantity: 10 },
];

const newProduct = { name: "Tablet", price: 299.99, quantity: 7 };
console.log(addProduct(newProduct, products));
