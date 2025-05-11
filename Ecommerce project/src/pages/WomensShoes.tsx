
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCategory from '../components/ProductCategory';
import Footer from '../components/Footer';

// Mock products data
const womensProducts = [
  {
    id: '1',
    name: 'Elegance Stiletto',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal'
  },
  {
    id: '2',
    name: 'Comfort Walking Flats',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual'
  },
  {
    id: '3',
    name: 'Chic Ankle Boots',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1611007724986-5a41a55947e7?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Boots'
  },
  {
    id: '4',
    name: 'Sporty Sneakers',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Athletic'
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
    name: 'Leather Loafers',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1604001307862-2d953b875079?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual'
  }
];

const WomensShoes: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Women's Collection"
          description="Discover our curated collection of women's shoes, where style meets comfort. From elegant heels to comfortable flats, find the perfect pair for any occasion."
          buttonText="Shop Now"
          buttonLink="/womens/all"
          imageUrl="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1200"
        />

        {/* Popular Categories */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop By Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600" 
                  alt="Formal Shoes" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Formal</h3>
                    <Link 
                      to="/womens/all" 
                      className="inline-block text-white border-b border-white hover:text-gold hover:border-gold transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=600" 
                  alt="Casual Shoes" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Casual</h3>
                    <Link 
                      to="/womens/all" 
                      className="inline-block text-white border-b border-white hover:text-gold hover:border-gold transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=600" 
                  alt="Athletic Shoes" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Athletic</h3>
                    <Link 
                      to="/womens/all" 
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
          title="Featured Women's Shoes" 
          products={womensProducts} 
          categoryLink="/womens/all"
        />
      </main>

      <Footer />
    </div>
  );
};

export default WomensShoes;
