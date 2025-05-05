import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Our jewellery e-commerce platform is your destination for timeless elegance and modern craftsmanship. From dazzling diamond rings to intricate gold necklaces and trendy fashion pieces, we bring you a curated collection of fine and fashion jewellery suited for every occasion.
        </p>
        <p>
        Each piece is crafted with precision and passion, accompanied by detailed product descriptions, high-resolution images, and style variations to help you make the perfect choice. Enjoy a seamless shopping experience, secure checkout, and doorstep delivery—because luxury should be just a click away.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
