
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCategory from '../components/ProductCategory';
import Footer from '../components/Footer';

// Mock products data
const essentialProducts = [
  {
    id: '1',
    name: 'Classic Low-tops',
    price: 109.99,
    imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  },
  {
    id: '2',
    name: 'Everyday Leather Boots',
    price: 169.99,
    imageUrl: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  },
  {
    id: '3',
    name: 'Casual Loafers',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  },
  {
    id: '4',
    name: 'Sleek Office Pumps',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1573100925118-870b8efc799d?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  },
  {
    id: '5',
    name: 'Comfort Walking Flats',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual'
  },
  {
    id: '6',
    name: 'Urban Comfort Sneaker',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Casual'
  }
];

const Essentials: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Everyday Essentials"
          description="Find your go-to shoes for daily wear. From comfortable sneakers to chic flats, our Everyday Essentials collection combines style and comfort for effortless everyday elegance."
          buttonText="Shop Now"
          buttonLink="/essentials/all"
          imageUrl="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1200"
        />

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Essential Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=500" 
                    alt="Sneakers" 
                    className="max-h-full rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Sneakers</h3>
                <p className="text-gray-600 mb-4">Casual comfort for everyday wear</p>
                <Link 
                  to="/essentials/all" 
                  className="inline-block bg-charcoal text-white px-5 py-2 rounded hover:bg-gold transition-colors"
                >
                  View Collection
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=500" 
                    alt="Flats" 
                    className="max-h-full rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Flats</h3>
                <p className="text-gray-600 mb-4">Elegant comfort for work and beyond</p>
                <Link 
                  to="/essentials/all" 
                  className="inline-block bg-charcoal text-white px-5 py-2 rounded hover:bg-gold transition-colors"
                >
                  View Collection
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?auto=format&fit=crop&q=80&w=500" 
                    alt="Loafers" 
                    className="max-h-full rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Loafers</h3>
                <p className="text-gray-600 mb-4">Versatile style for any occasion</p>
                <Link 
                  to="/essentials/all" 
                  className="inline-block bg-charcoal text-white px-5 py-2 rounded hover:bg-gold transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <ProductCategory 
          title="Best Selling Essentials" 
          products={essentialProducts} 
          categoryLink="/essentials/all"
        />

        {/* Comfort Technology */}
        <section className="py-12 bg-light-gray">
          <div className="container">
            <div className="rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-charcoal text-white p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4">Comfort Technology</h2>
                  <p className="mb-6 text-lg">
                    Our everyday essentials incorporate innovative comfort technology, 
                    designed to support your feet through long days. From cushioned insoles 
                    to breathable materials, we prioritize both style and all-day wearability.
                  </p>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Memory foam cushioning
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Arch support technology
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Breathable materials
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span> Flexible, lightweight construction
                    </li>
                  </ul>
                  <Link 
                    to="/essentials/all" 
                    className="inline-block bg-white text-charcoal px-6 py-3 rounded hover:bg-gold hover:text-white transition-colors font-medium"
                  >
                    Shop Essentials
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=800" 
                    alt="Comfort technology" 
                    className="w-full h-full object-cover"
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

export default Essentials;
