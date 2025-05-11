
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCategory from '../components/ProductCategory';
import Footer from '../components/Footer';

// Mock products data
const mensProducts = [
  {
    id: '1',
    name: 'Classic Leather Derby',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal'
  },
  {
    id: '2',
    name: 'Urban Comfort Sneaker',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Casual'
  },
  {
    id: '3',
    name: 'Premium Oxford',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal'
  },
  {
    id: '4',
    name: 'Hiking Boots',
    price: 189.99,
    imageUrl: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Outdoor'
  },
  {
    id: '5',
    name: 'Business Loafer',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal'
  },
  {
    id: '6',
    name: 'Casual Slip-On',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Casual'
  }
];

const MensShoes: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Men's Collection"
          description="From boardroom to weekend adventures, our men's shoe collection combines quality craftsmanship with contemporary design for the modern gentleman."
          buttonText="Shop Now"
          buttonLink="/mens/all"
          imageUrl="https://images.unsplash.com/photo-1614252235318-9d386285d284?auto=format&fit=crop&q=80&w=1200"
        />

        {/* Popular Categories */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop By Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=600" 
                  alt="Formal Shoes" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Formal</h3>
                    <Link 
                      to="/mens/formal" 
                      className="inline-block text-white border-b border-white hover:text-gold hover:border-gold transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=600" 
                  alt="Casual Shoes" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Casual</h3>
                    <Link 
                      to="/mens/casual" 
                      className="inline-block text-white border-b border-white hover:text-gold hover:border-gold transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=600" 
                  alt="Outdoor Shoes" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Outdoor</h3>
                    <Link 
                      to="/mens/outdoor" 
                      className="inline-block text-white border-b border-white hover:text-gold hover:border-gold transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <ProductCategory 
          title="Featured Men's Shoes" 
          products={mensProducts} 
          categoryLink="/mens/all"
        />
      </main>

      <Footer />
    </div>
  );
};

export default MensShoes;
