
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

// Mock products data for essentials
const essentialsProducts = [
  {
    id: '1',
    name: 'Classic Low-tops',
    price: 109.99,
    imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=500',
    category: 'Sneakers'
  },
  {
    id: '2',
    name: 'Everyday Leather Boots',
    price: 169.99,
    imageUrl: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=500',
    category: 'Boots'
  },
  {
    id: '3',
    name: 'Casual Loafers',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?auto=format&fit=crop&q=80&w=500',
    category: 'Loafers'
  },
  {
    id: '4',
    name: 'Sleek Office Pumps',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1573100925118-870b8efc799d?auto=format&fit=crop&q=80&w=500',
    category: 'Formal'
  },
  {
    id: '5',
    name: 'Comfort Walking Flats',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=500',
    category: 'Flats'
  },
  {
    id: '6',
    name: 'Urban Comfort Sneaker',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=500',
    category: 'Sneakers'
  },
  {
    id: '7',
    name: 'Versatile Slip-ons',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=500',
    category: 'Sneakers'
  },
  {
    id: '8',
    name: 'Daily Walking Shoes',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
    category: 'Sneakers'
  },
  {
    id: '9',
    name: 'Flexible Workplace Flats',
    price: 109.99,
    imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=500',
    category: 'Flats'
  },
  {
    id: '10',
    name: 'Classic Boat Shoes',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=500',
    category: 'Casual'
  },
  {
    id: '11',
    name: 'Minimalist Canvas Sneakers',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=500',
    category: 'Sneakers'
  },
  {
    id: '12',
    name: 'Work-to-Weekend Loafers',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500',
    category: 'Loafers'
  }
];

const EssentialsAllProducts: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([80, 180]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const categories = [...new Set(essentialsProducts.map(product => product.category))];
  
  const filteredProducts = essentialsProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesSearch && matchesPrice && matchesCategory;
  });
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="bg-charcoal text-white py-12">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Everyday Essentials</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Discover our curated collection of essential footwear that combines comfort, durability, and style for your everyday needs.
            </p>
          </div>
        </section>
        
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="text-sm">
            <ol className="flex">
              <li><Link to="/" className="text-gray-500 hover:text-gold">Home</Link></li>
              <li><span className="mx-2 text-gray-400">/</span></li>
              <li><Link to="/essentials" className="text-gray-500 hover:text-gold">Essentials</Link></li>
              <li><span className="mx-2 text-gray-400">/</span></li>
              <li className="text-gold">All Products</li>
            </ol>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-4">Search</h3>
                    <Input
                      type="text"
                      placeholder="Search essentials..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[80, 180]}
                        max={200}
                        min={0}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Category</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label htmlFor={`category-${category}`}>{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-semibold">All Essential Products</h2>
                <span className="text-gray-500">{filteredProducts.length} products</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    category={product.category}
                  />
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Essentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">All-Day Comfort</h3>
                <p className="text-gray-600">
                  Designed with premium cushioning and support to keep you comfortable from dawn to dusk.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Durable Materials</h3>
                <p className="text-gray-600">
                  Crafted from high-quality materials that withstand daily wear and tear for long-lasting performance.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Versatile Style</h3>
                <p className="text-gray-600">
                  Timeless designs that pair easily with any outfit, taking you from work to weekend with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Customer Reviews */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex text-gold mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "I wear these sneakers every day to work, and they still look brand new after 6 months. The comfort is unmatched, especially for someone who stands all day!"
                  </p>
                  <p className="font-medium">Sarah T.</p>
                  <p className="text-sm text-gray-500">Purchased Classic Low-tops</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex text-gold mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "The Comfort Walking Flats are perfect for my commute and office days. Finally found flats that don't hurt my feet by the end of the day!"
                  </p>
                  <p className="font-medium">Michelle K.</p>
                  <p className="text-sm text-gray-500">Purchased Comfort Walking Flats</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex text-gold mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "These loafers transition perfectly from work to evening. The quality is exceptional, and they required zero break-in time!"
                  </p>
                  <p className="font-medium">James B.</p>
                  <p className="text-sm text-gray-500">Purchased Casual Loafers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EssentialsAllProducts;
