import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { title, price, image, description } = product;

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={image}
          alt={title}
          className="product-image"
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">
          {title}
        </h3>
        
        <p className="product-description">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="product-price">
            ₹{price.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
