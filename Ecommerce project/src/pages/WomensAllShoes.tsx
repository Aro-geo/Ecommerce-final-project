
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Extended mock products data
const allWomensProducts = [
  {
    id: '1',
    name: 'Elegance Stiletto',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal',
    description: 'Elevate your formal attire with our signature Elegance Stilettos. Featuring a 4-inch heel, cushioned insole, and premium leather upper for all-day comfort and sophistication.',
    colors: ['Black', 'Red', 'Nude'],
    sizes: [5, 6, 7, 8, 9]
  },
  {
    id: '2',
    name: 'Comfort Walking Flats',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual',
    description: 'Perfect for daily wear, our Comfort Walking Flats feature memory foam insoles, breathable lining, and flexible rubber outsoles to provide all-day support and ease.',
    colors: ['Black', 'Tan', 'Navy', 'Burgundy'],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
  },
  {
    id: '3',
    name: 'Chic Ankle Boots',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1611007724986-5a41a55947e7?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Boots',
    description: 'Step into style with our Chic Ankle Boots. These versatile boots feature a 2.5-inch block heel, side zipper closure, and water-resistant suede for both style and practicality.',
    colors: ['Black', 'Brown', 'Grey'],
    sizes: [5, 6, 7, 8, 9, 10]
  },
  {
    id: '4',
    name: 'Sporty Sneakers',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Athletic',
    description: 'Designed for active lifestyles, our Sporty Sneakers feature advanced cushioning technology, breathable mesh uppers, and superior traction for optimal performance and comfort.',
    colors: ['White/Pink', 'Black/Turquoise', 'Grey/Purple'],
    sizes: [5, 6, 7, 8, 9, 10]
  },
  {
    id: '5',
    name: 'Suede Pump Heels',
    price: 139.99,
    imageUrl: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Formal',
    description: 'Our Suede Pump Heels combine classic elegance with modern comfort. Featuring a 3-inch heel, padded footbed, and genuine suede upper for a luxurious look and feel.',
    colors: ['Black', 'Red', 'Blue', 'Emerald'],
    sizes: [5, 6, 7, 8, 9]
  },
  {
    id: '6',
    name: 'Leather Loafers',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1604001307862-2d953b875079?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual',
    description: 'Effortless style meets unmatched comfort in our Leather Loafers. Crafted from premium leather with a cushioned insole and flexible outsole for versatile, all-day wear.',
    colors: ['Black', 'Brown', 'Burgundy', 'Navy'],
    sizes: [5, 6, 7, 8, 9]
  },
  {
    id: '7',
    name: 'Summer Sandals',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Casual',
    description: 'Stay cool and stylish with our Summer Sandals. Featuring adjustable straps, contoured footbeds, and lightweight design for maximum comfort on warm days.',
    colors: ['Tan', 'White', 'Black', 'Gold'],
    sizes: [5, 6, 7, 8, 9, 10]
  },
  {
    id: '8',
    name: 'Winter Boots',
    price: 169.99,
    imageUrl: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?auto=format&fit=crop&q=80&w=500',
    category: 'Women\'s Boots',
    description: 'Face cold weather in style with our Winter Boots. These boots feature waterproof exterior, plush interior lining, and non-slip soles for warmth and stability.',
    colors: ['Black', 'Brown', 'Grey'],
    sizes: [5, 6, 7, 8, 9]
  }
];

const WomensAllShoes: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<{
    categories: string[];
    priceRange: [number, number];
    showFilters: boolean;
  }>({
    categories: [],
    priceRange: [0, 200],
    showFilters: false
  });

  const toggleCategory = (category: string) => {
    if (selectedFilters.categories.includes(category)) {
      setSelectedFilters({
        ...selectedFilters,
        categories: selectedFilters.categories.filter(c => c !== category)
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        categories: [...selectedFilters.categories, category]
      });
    }
  };

  const toggleFilters = () => {
    setSelectedFilters({
      ...selectedFilters,
      showFilters: !selectedFilters.showFilters
    });
  };

  const filteredProducts = selectedFilters.categories.length > 0
    ? allWomensProducts.filter(product => 
        selectedFilters.categories.includes(product.category) &&
        product.price >= selectedFilters.priceRange[0] &&
        product.price <= selectedFilters.priceRange[1]
      )
    : allWomensProducts.filter(product => 
        product.price >= selectedFilters.priceRange[0] &&
        product.price <= selectedFilters.priceRange[1]
      );

  const categories = Array.from(new Set(allWomensProducts.map(p => p.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Breadcrumb */}
          <div className="w-full mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="text-gray-700 hover:text-gold">Home</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <Link to="/womens" className="text-gray-700 hover:text-gold">Women's</Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-500">All Shoes</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden w-full mb-4">
            <Button 
              onClick={toggleFilters} 
              variant="outline"
              className="w-full flex items-center justify-between"
            >
              {selectedFilters.showFilters ? 'Hide Filters' : 'Show Filters'}
              {selectedFilters.showFilters ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </div>

          {/* Filters */}
          <div className={`md:w-1/4 ${selectedFilters.showFilters || 'hidden md:block'}`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="font-bold text-xl mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category}
                        checked={selectedFilters.categories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="mr-2"
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span>${selectedFilters.priceRange[0]}</span>
                  <span>${selectedFilters.priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={selectedFilters.priceRange[1]}
                  onChange={(e) => setSelectedFilters({
                    ...selectedFilters,
                    priceRange: [selectedFilters.priceRange[0], parseInt(e.target.value)]
                  })}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Product Listing */}
          <div className="md:w-3/4">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Women's Shoes Collection</h1>
              <p className="text-gray-600">Discover our curated selection of women's footwear for every occasion</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                    <p className="text-gray-800 mb-3">${product.price.toFixed(2)}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex mb-3">
                      <div className="mr-4">
                        <span className="text-xs text-gray-500 block mb-1">Colors</span>
                        <div className="flex space-x-1">
                          {product.colors.slice(0, 3).map(color => (
                            <span key={color} className="text-xs">{color}</span>
                          ))}
                          {product.colors.length > 3 && <span className="text-xs">+{product.colors.length - 3}</span>}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block mb-1">Sizes</span>
                        <div className="flex space-x-1">
                          {product.sizes.slice(0, 3).map(size => (
                            <span key={size} className="text-xs">{size}</span>
                          ))}
                          {product.sizes.length > 3 && <span className="text-xs">+{product.sizes.length - 3}</span>}
                        </div>
                      </div>
                    </div>
                    <Button variant="default" className="w-full">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-10">
                <h3 className="text-xl font-medium">No products match your filters</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WomensAllShoes;
