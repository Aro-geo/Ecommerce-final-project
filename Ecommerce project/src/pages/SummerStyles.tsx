
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCategory from '../components/ProductCategory';
import Footer from '../components/Footer';

// Mock products data
const summerProducts = [
  {
    id: '1',
    name: 'Beach Canvas Espadrilles',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '2',
    name: 'Summer Sandals',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '3',
    name: 'Tropical Sliders',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '4',
    name: 'Breathable Mesh Trainers',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '5',
    name: 'Colorful Flip Flops',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1603487742504-7daf40e7e3a4?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '6',
    name: 'Boating Deck Shoes',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  }
];

const SummerStyles: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Summer Collection"
          description="Step into summer with our vibrant collection of warm-weather footwear. From beach sandals to breathable sneakers, find your perfect summer companion."
          buttonText="Shop Now"
          buttonLink="/summer/all"
          imageUrl="https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=1200"
        />

        {/* Trending Summer Styles */}
        <section className="py-12 bg-gradient-to-b from-sky-50 to-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-2 text-center">Trending This Season</h2>
            <p className="text-center text-lg mb-8 text-gray-600">Our most popular summer styles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=500" 
                  alt="Espadrilles" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Espadrilles</h3>
                  <Link to="/summer/espadrilles" className="text-gold hover:underline">Shop Now</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&q=80&w=500" 
                  alt="Sandals" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Sandals</h3>
                  <Link to="/summer/sandals" className="text-gold hover:underline">Shop Now</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=500" 
                  alt="Sliders" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Sliders</h3>
                  <Link to="/summer/sliders" className="text-gold hover:underline">Shop Now</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1603487742504-7daf40e7e3a4?auto=format&fit=crop&q=80&w=500" 
                  alt="Flip Flops" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Flip Flops</h3>
                  <Link to="/summer/flip-flops" className="text-gold hover:underline">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <ProductCategory 
          title="Featured Summer Footwear" 
          products={summerProducts} 
          categoryLink="/summer/all"
        />

        {/* Summer Lookbook */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">Summer Lookbook 2025</h2>
                <p className="text-lg mb-6">
                  Discover the latest trends in summer footwear. Our lookbook showcases versatile styles 
                  for beach days, city strolls, and summer evenings out.
                </p>
                <Link 
                  to="/summer/lookbook" 
                  className="inline-block bg-charcoal text-white px-6 py-3 rounded hover:bg-gold transition-colors font-medium"
                >
                  View Lookbook
                </Link>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1583951171188-9554278a6324?auto=format&fit=crop&q=80&w=500" 
                  alt="Summer lookbook 1" 
                  className="rounded-lg shadow-md h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1575414004758-0e1b70fecc7d?auto=format&fit=crop&q=80&w=500" 
                  alt="Summer lookbook 2" 
                  className="rounded-lg shadow-md h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1578116922645-3976907a7671?auto=format&fit=crop&q=80&w=500" 
                  alt="Summer lookbook 3" 
                  className="rounded-lg shadow-md h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500" 
                  alt="Summer lookbook 4" 
                  className="rounded-lg shadow-md h-40 object-cover"
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

export default SummerStyles;
