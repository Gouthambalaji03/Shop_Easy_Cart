import React, { useState, useRef, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { title, price, image, description } = product;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = image;
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(img);

    return () => {
      if (img) {
        observer.unobserve(img);
      }
    };
  }, [image]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        {!imageLoaded && !imageError && (
          <div className="product-image-loading"></div>
        )}
        <img
          ref={imgRef}
          alt={title}
          className={`product-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        {imageError && (
          <div className="product-image-error">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-gray-500 mt-1">Image unavailable</span>
          </div>
        )}
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
