import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import CartModal from './components/CartModal.jsx';
import Alert from './components/Alert.jsx';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '' });
  const [loading, setLoading] = useState(true);

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        
        // Preload first 4 images for better perceived performance
        data.slice(0, 4).forEach((product) => {
          const img = new Image();
          img.src = product.image;
        });
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setAlert({ show: true, message: 'Item already added to the cart' });
      setTimeout(() => setAlert({ show: false, message: '' }), 3000);
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update product quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // Get total cart count
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total cart price
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartCount={getCartCount()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Products
        </h1>
        
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <ProductGrid products={products} onAddToCart={addToCart} />
        )}
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        total={getCartTotal()}
      />

      <Alert show={alert.show} message={alert.message} />
    </div>
  );
}

export default App;
