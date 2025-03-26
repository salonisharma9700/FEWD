import React from "react";

const categories = [
  { name: "Laptops", image: "src/assets/laptop.jpg" },
  { name: "Mobiles", image: "src/assets/phone.jpg" },
  { name: "Smartwatch", image: "src/assets/smartwatch.jpg" }
];

const Categories = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center fw-bold text-primary mb-4">Categories</h3>
      <div className="row g-4 justify-content-center">
        {categories.map((category, index) => (
          <div className="col-6 col-md-3" key={index}>
            <div className="card shadow-sm border-0">
              <img
                src={category.image}
                className="card-img-top"
                alt={category.name}
              />
              <div className="card-body text-center">
                <button className="btn btn-outline-primary w-100">
                  {category.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
