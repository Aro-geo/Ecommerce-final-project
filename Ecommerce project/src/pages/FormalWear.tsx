
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCategory from '../components/ProductCategory';
import Footer from '../components/Footer';

// Mock products data
const formalProducts = [
  {
    id: '1',
    name: 'Classic Leather Derby',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal'
  },
  {
    id: '2',
    name: 'Premium Oxford',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal'
  },
  {
    id: '3',
    name: 'Elegance Stiletto',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal'
  },
  {
    id: '4',
    name: 'Business Loafer',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal'
  },
  {
    id: '5',
    name: 'Suede Pump Heels',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal'
  },
  {
    id: '6',
    name: 'Sleek Office Pumps',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1573100925118-870b8efc799d?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal'
  }
];

const FormalWear: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Formal Collection"
          description="Elegance for every occasion. Our formal collection features timeless designs crafted from premium materials for sophisticated style and lasting comfort."
          buttonText="Shop Now"
          buttonLink="/formal/all"
          imageUrl="https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=1200"
        />

        {/* Shop By Category */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop Formal By Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-md group h-96">
                <img 
                  src="https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=800" 
                  alt="Men's Formal" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Men's Formal</h3>
                  <Link 
                    to="/formal/mens" 
                    className="inline-block bg-white text-charcoal px-6 py-3 rounded hover:bg-gold hover:text-white transition-colors font-medium"
                  >
                    Shop Men's Formal
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group h-96">
                <img 
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800" 
                  alt="Women's Formal" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Women's Formal</h3>
                  <Link 
                    to="/formal/womens" 
                    className="inline-block bg-white text-charcoal px-6 py-3 rounded hover:bg-gold hover:text-white transition-colors font-medium"
                  >
                    Shop Women's Formal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <ProductCategory 
          title="Featured Formal Shoes" 
          products={formalProducts} 
          categoryLink="/formal/all"
        />

        {/* Craftsmanship Section */}
        <section className="py-16 bg-light-gray">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Craftsmanship & Quality</h2>
                <p className="text-lg mb-6">
                  Each pair of our formal shoes is meticulously crafted using traditional techniques 
                  and the finest materials. From premium leather sourcing to hand-finished details, 
                  our commitment to quality is evident in every stitch.
                </p>
                <Link 
                  to="/our-craft" 
                  className="inline-block bg-charcoal text-white px-6 py-3 rounded hover:bg-gold transition-colors font-medium"
                >
                  Discover Our Craft
                </Link>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <img 
                  src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=600" 
                  alt="Shoe craftsmanship" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FormalWear;
