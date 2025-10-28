import React from 'react';

const CartModal = ({ isOpen, onClose, cart, onUpdateQuantity, total }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="modal-backdrop"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="modal-container">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h2 className="modal-title">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="modal-close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Content */}
          <div className="modal-body">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <svg className="empty-cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8M17 18a2 2 0 100 4 2 2 0 000-4zM9 18a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <p className="empty-cart-text">Your cart is empty</p>
                <p className="empty-cart-subtext">Add some products to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-image"
                      loading="lazy"
                    />

                    {/* Product Details */}
                    <div className="cart-item-details">
                      <h3 className="cart-item-title">
                        {item.title}
                      </h3>
                      <p className="cart-item-price">₹{item.price.toFixed(2)} each</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="quantity-button"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="quantity-button"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>

                    {/* Total Price */}
                    <div className="cart-item-total">
                      <p className="cart-item-total-price">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => onUpdateQuantity(item.id, 0)}
                      className="remove-button"
                      title="Remove from cart"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="modal-footer">
              <div className="cart-total">
                <span className="cart-total-label">Total:</span>
                <span className="cart-total-price">₹{total.toFixed(2)}</span>
              </div>
              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
