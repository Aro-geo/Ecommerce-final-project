
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-charcoal">
          SoleEssence
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/womens" className="nav-item text-charcoal hover:text-gold transition-colors">
            Women's Shoes
          </Link>
          <Link to="/mens" className="nav-item text-charcoal hover:text-gold transition-colors">
            Men's Shoes
          </Link>
          <Link to="/kids" className="nav-item text-charcoal hover:text-gold transition-colors">
            Kids' Shoes
          </Link>
          <Link to="/summer" className="nav-item text-charcoal hover:text-gold transition-colors">
            Summer Styles
          </Link>
          <Link to="/formal" className="nav-item text-charcoal hover:text-gold transition-colors">
            Formal Wear
          </Link>
          <Link to="/essentials" className="nav-item text-charcoal hover:text-gold transition-colors">
            Everyday Essentials
          </Link>
        </nav>

        {/* User and Cart */}
        <div className="flex items-center space-x-4">
          <Link to="/account" className="text-charcoal hover:text-gold transition-colors" aria-label="User account">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-charcoal hover:text-gold transition-colors" aria-label="Shopping cart">
            <ShoppingCart size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md animate-slide-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/womens" 
              className="text-charcoal hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Women's Shoes
            </Link>
            <Link 
              to="/mens" 
              className="text-charcoal hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Men's Shoes
            </Link>
            <Link 
              to="/kids" 
              className="text-charcoal hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kids' Shoes
            </Link>
            <Link 
              to="/summer" 
              className="text-charcoal hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Summer Styles
            </Link>
            <Link 
              to="/formal" 
              className="text-charcoal hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Formal Wear
            </Link>
            <Link 
              to="/essentials" 
              className="text-charcoal hover:text-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Everyday Essentials
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
