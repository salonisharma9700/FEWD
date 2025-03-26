import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card text-center shadow-lg p-3 mb-4 bg-white rounded product-card">
        {/* Product Image */}
        <img
          src={require(`../assets/${product.image}`)}
          alt={product.name}
          className="card-img-top product-image"
        />

        {/* Product Details */}
        <div className="card-body">
          <h5 className="card-title text-dark fw-bold">{product.name}</h5>
          <p className="card-text text-primary fs-5">{product.price}</p>
          <button className="btn btn-success w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;