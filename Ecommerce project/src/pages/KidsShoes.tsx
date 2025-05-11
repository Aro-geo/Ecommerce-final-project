
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCategory from '../components/ProductCategory';
import Footer from '../components/Footer';

// Mock products data
const kidsProducts = [
  {
    id: '1',
    name: 'Playful Sneakers',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1555584406-d6b5f48e0369?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Casual'
  },
  {
    id: '2',
    name: 'School Uniform Shoes',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1571747761126-07bbeef49bf4?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Formal'
  },
  {
    id: '3',
    name: 'Colorful Canvas',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Casual'
  },
  {
    id: '4',
    name: 'Outdoor Adventure Boots',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1599485012510-32dd92799a76?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Outdoor'
  },
  {
    id: '5',
    name: 'Light-Up Trainers',
    price: 64.99,
    imageUrl: 'https://images.unsplash.com/photo-1560870484-a5eb98abf641?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Athletic'
  },
  {
    id: '6',
    name: 'Party Shoes',
    price: 54.99,
    imageUrl: 'https://images.unsplash.com/photo-1543420629-5350879dd4cd?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Formal'
  }
];

const KidsShoes: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Kids Collection"
          description="Fun, comfortable shoes for growing feet. Our kids' collection combines durability with playful designs that children love and parents trust."
          buttonText="Shop Now"
          buttonLink="/kids/all"
          imageUrl="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1200"
        />

        {/* Popular Categories */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Shop By Age Group</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1565580726541-55fecb6ef036?auto=format&fit=crop&q=80&w=600" 
                  alt="Toddlers" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Toddlers</h3>
                    <Link 
                      to="/kids/toddler" 
                      className="inline-block text-white border-b border-white hover:text-gold hover:border-gold transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600" 
                  alt="Kids" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Kids</h3>
                    <Link 
                      to="/kids/children" 
                      className="inline-block text-white border-b border-white hover:text-gold hover:border-gold transition-colors"
                    >
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1555584406-d6b5f48e0369?auto=format&fit=crop&q=80&w=600" 
                  alt="Youth" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Youth</h3>
                    <Link 
                      to="/kids/youth" 
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
          title="Featured Kids' Shoes" 
          products={kidsProducts} 
          categoryLink="/kids/all"
        />

        {/* Promo Banner */}
        <section className="py-12 bg-light-gray">
          <div className="container">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">Back to School Special</h3>
                  <p className="text-lg mb-4">Get your kids ready for the school year with our durable and comfortable school shoes. Limited time offer: Buy one pair, get 20% off your second pair.</p>
                  <Link to="/kids/school" className="bg-gold text-white px-6 py-3 rounded inline-block hover:bg-amber-600 transition-colors">Shop School Shoes</Link>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <img 
                    src="https://images.unsplash.com/photo-1571747761126-07bbeef49bf4?auto=format&fit=crop&q=80&w=600" 
                    alt="Back to school shoes" 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KidsShoes;
