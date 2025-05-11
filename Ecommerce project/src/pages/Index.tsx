
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCategory from '../components/ProductCategory';
import Footer from '../components/Footer';

// Mock product data for demonstration
const featuredProducts = [
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
    name: 'Elegance Stiletto',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal'
  },
  {
    id: '4',
    name: 'Comfort Walking Flats',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual'
  }
];

const summerCollection = [
  {
    id: '5',
    name: 'Beach Canvas Espadrilles',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '6',
    name: 'Summer Sandals',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '7',
    name: 'Tropical Sliders',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  },
  {
    id: '8',
    name: 'Breathable Mesh Trainers',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?auto=format&fit=crop&q=80&w=500',
    category: 'Summer'
  }
];

const everydayEssentials = [
  {
    id: '9',
    name: 'Classic Low-tops',
    price: 109.99,
    imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  },
  {
    id: '10',
    name: 'Everyday Leather Boots',
    price: 169.99,
    imageUrl: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  },
  {
    id: '11',
    name: 'Casual Loafers',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  },
  {
    id: '12',
    name: 'Sleek Office Pumps',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1573100925118-870b8efc799d?auto=format&fit=crop&q=80&w=500',
    category: 'Essentials'
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Elevate Your Everyday Look"
          description="Find your go-to shoes for daily wear. From comfortable sneakers to chic flats, our Everyday Essentials collection combines style and comfort for effortless everyday elegance."
          buttonText="Explore Essentials"
          buttonLink="/essentials"
          imageUrl="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1200"
        />

        {/* Featured Products */}
        <ProductCategory 
          title="Featured Collection" 
          products={featuredProducts} 
          categoryLink="/featured"
        />

        {/* Promo Banner */}
        <section className="bg-light-gray py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">Craftsmanship in Every Step</h2>
                <p className="text-lg mb-6">
                  Each pair of SoleEssence shoes is meticulously crafted using premium materials and expert techniques. 
                  Discover the difference quality makes in every step you take.
                </p>
                <Link 
                  to="/our-story" 
                  className="inline-block bg-charcoal text-white px-6 py-3 rounded hover:bg-gold transition-colors font-medium"
                >
                  Our Story
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

        {/* Summer Collection */}
        <ProductCategory 
          title="Summer Collection" 
          products={summerCollection} 
          categoryLink="/summer"
        />

        {/* Everyday Essentials */}
        <ProductCategory 
          title="Everyday Essentials" 
          products={everydayEssentials} 
          categoryLink="/essentials"
        />

        {/* Newsletter */}
        <section className="bg-charcoal text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to receive updates on new collections, exclusive offers, and style inspiration.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l text-charcoal"
                />
                <button 
                  type="submit"
                  className="bg-gold text-white px-6 py-3 rounded-r hover:bg-amber-600 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-4">
                By subscribing you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
