import React from "react";

function Gallery() {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Gallery</h2>
      
      <div className="row g-4"> 
        {[...Array(13)].map((_, i) => (
          <div className="col-6 col-md-4 col-lg-3" key={i}> 
            <div className="card shadow-sm border-0">
              <img 
                src={`src/assets/images/img${i + 1}.jpg`} 
                className="card-img-top rounded" 
                alt={`Gallery ${i + 1}`} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
