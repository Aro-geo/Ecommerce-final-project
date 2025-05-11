
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Trash2 } from 'lucide-react';

// Mock cart items
const initialCartItems = [
  {
    id: '1',
    name: 'Classic Leather Derby',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=500',
    quantity: 1,
    size: '9.5',
    color: 'Brown'
  },
  {
    id: '3',
    name: 'Elegance Stiletto',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500',
    quantity: 1,
    size: '7',
    color: 'Black'
  }
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
              <Link to="/" className="bg-gold text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors inline-block font-medium">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-semibold">Items ({cartItems.length})</h2>
                  </div>
                  
                  <div className="divide-y">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex py-6 px-6">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        
                        <div className="ml-6 flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-lg font-medium">{item.name}</h3>
                              <p className="text-gray-600 mt-1">Size: {item.size} | Color: {item.color}</p>
                            </div>
                            <p className="font-semibold">${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border rounded">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 border-r"
                              >
                                -
                              </button>
                              <span className="px-4 py-1">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 border-l"
                              >
                                +
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gold text-white py-3 rounded-md font-medium hover:bg-amber-600 transition-colors">
                    Checkout
                  </button>
                  
                  <div className="mt-6 text-center">
                    <Link to="/" className="text-blue-600 hover:underline">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
