import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="container text-center my-4 p-4 bg-info text-white rounded">
      <h3 className="fw-bold">📧 Subscribe for Deals!</h3>
      <input type="email" className="form-control w-50 mx-auto my-2" placeholder="Enter your email" />
      <button className="btn btn-dark px-4">Subscribe</button>
    </div>
  );
};

export default NewsletterSignup;