
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">SoleEssence</h3>
            <p className="text-gray-300">
              Premium footwear for every occasion. Quality materials, timeless designs, unmatched comfort.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/womens" className="text-gray-300 hover:text-white transition-colors">Women's Shoes</Link></li>
              <li><Link to="/mens" className="text-gray-300 hover:text-white transition-colors">Men's Shoes</Link></li>
              <li><Link to="/kids" className="text-gray-300 hover:text-white transition-colors">Kids' Shoes</Link></li>
              <li><Link to="/formal" className="text-gray-300 hover:text-white transition-colors">Formal Wear</Link></li>
              <li><Link to="/essentials" className="text-gray-300 hover:text-white transition-colors">Everyday Essentials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/sizing" className="text-gray-300 hover:text-white transition-colors">Sizing Guide</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <form className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Subscribe to our newsletter</label>
              <div className="flex">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l text-dark-gray flex-grow"
                />
                <button 
                  type="submit"
                  className="bg-gold text-white px-4 py-2 rounded-r hover:bg-amber-500 transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SoleEssence. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
