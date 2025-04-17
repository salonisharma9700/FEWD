import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"
const products = [
  { id: 1, name: "Laptop", price: "$999", image: "laptop.jpg" },
  { id: 2, name: "Smartphone", price: "$599", image: "phone.jpg" },
  { id: 3, name: "Smartwatch", price: "$199", image: "smartwatch.jpg" } ,
];

const ProductList = () => {
  return (
    <div className="container my-4">
      <h3 className="text-center text-success fw-bold">Our Products</h3>
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;