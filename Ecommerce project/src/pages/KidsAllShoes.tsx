
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Extended mock products data
const allKidsProducts = [
  {
    id: '1',
    name: 'Playful Sneakers',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1555584406-d6b5f48e0369?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Casual',
    description: 'Fun and functional, our Playful Sneakers feature light-up soles, secure hook-and-loop closures, and colorful designs kids love.',
    colors: ['Blue/Green', 'Red/Black', 'Pink/Purple'],
    sizes: [10, 11, 12, 13, 1, 2, 3],
    ageGroup: 'Youth'
  },
  {
    id: '2',
    name: 'School Uniform Shoes',
    price: 69.99,
    imageUrl: 'https://images.unsplash.com/photo-1571747761126-07bbeef49bf4?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Formal',
    description: 'Durable and comfortable shoes designed for everyday school wear. Scuff-resistant leather, cushioned insoles, and non-marking soles for all-day comfort.',
    colors: ['Black', 'Brown'],
    sizes: [10, 11, 12, 13, 1, 2, 3, 4],
    ageGroup: 'Youth'
  },
  {
    id: '3',
    name: 'Colorful Canvas',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Casual',
    description: 'Bright and versatile canvas shoes with easy-on elastic laces or hook-and-loop closures. Washable materials make cleanup a breeze.',
    colors: ['Rainbow', 'Blue', 'Pink', 'Green'],
    sizes: [5, 6, 7, 8, 9, 10],
    ageGroup: 'Toddler'
  },
  {
    id: '4',
    name: 'Outdoor Adventure Boots',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1599485012510-32dd92799a76?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Outdoor',
    description: 'Rugged and weather-resistant boots with non-slip soles and reinforced toes for extra protection during outdoor play.',
    colors: ['Brown', 'Navy/Orange', 'Black/Green'],
    sizes: [10, 11, 12, 13, 1, 2, 3],
    ageGroup: 'Youth'
  },
  {
    id: '5',
    name: 'Light-Up Trainers',
    price: 64.99,
    imageUrl: 'https://images.unsplash.com/photo-1560870484-a5eb98abf641?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Athletic',
    description: 'These eye-catching trainers light up with each step. Featuring cushioned soles and breathable materials for active play all day.',
    colors: ['Black/Multi', 'White/Multi', 'Blue/Multi'],
    sizes: [10, 11, 12, 13, 1, 2, 3],
    ageGroup: 'Kids'
  },
  {
    id: '6',
    name: 'Party Shoes',
    price: 54.99,
    imageUrl: 'https://images.unsplash.com/photo-1543420629-5350879dd4cd?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Formal',
    description: 'Special occasion shoes with just the right amount of sparkle and shine. Comfortable design ensures kids can celebrate in style.',
    colors: ['Silver', 'Gold', 'Black', 'Pink'],
    sizes: [8, 9, 10, 11, 12, 13, 1, 2],
    ageGroup: 'Kids'
  },
  {
    id: '7',
    name: 'First Walker Shoes',
    price: 44.99,
    imageUrl: 'https://images.unsplash.com/photo-1555584406-d6b5f48e0369?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' First Steps',
    description: 'Designed specifically for new walkers with flexible soles, ankle support, and wide toe boxes to help develop balance and confidence.',
    colors: ['White', 'Blue', 'Pink'],
    sizes: [3, 4, 5, 6, 7],
    ageGroup: 'Toddler'
  },
  {
    id: '8',
    name: 'Water Play Sandals',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=500',
    category: 'Kids\' Outdoor',
    description: 'Quick-drying sandals with protected toes and secure straps, perfect for beach days, pool parties, and water park adventures.',
    colors: ['Blue', 'Pink', 'Green', 'Orange'],
    sizes: [10, 11, 12, 13, 1, 2, 3],
    ageGroup: 'Kids'
  }
];

const KidsAllShoes: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<{
    categories: string[];
    ageGroups: string[];
    priceRange: [number, number];
    showFilters: boolean;
  }>({
    categories: [],
    ageGroups: [],
    priceRange: [0, 100],
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

  const toggleAgeGroup = (ageGroup: string) => {
    if (selectedFilters.ageGroups.includes(ageGroup)) {
      setSelectedFilters({
        ...selectedFilters,
        ageGroups: selectedFilters.ageGroups.filter(a => a !== ageGroup)
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        ageGroups: [...selectedFilters.ageGroups, ageGroup]
      });
    }
  };

  const toggleFilters = () => {
    setSelectedFilters({
      ...selectedFilters,
      showFilters: !selectedFilters.showFilters
    });
  };

  const filteredProducts = allKidsProducts.filter(product => {
    // Filter by price range
    const priceMatch = product.price >= selectedFilters.priceRange[0] && product.price <= selectedFilters.priceRange[1];
    
    // Filter by category (if any selected)
    const categoryMatch = selectedFilters.categories.length === 0 || selectedFilters.categories.includes(product.category);
    
    // Filter by age group (if any selected)
    const ageGroupMatch = selectedFilters.ageGroups.length === 0 || selectedFilters.ageGroups.includes(product.ageGroup);
    
    return priceMatch && categoryMatch && ageGroupMatch;
  });

  const categories = Array.from(new Set(allKidsProducts.map(p => p.category)));
  const ageGroups = Array.from(new Set(allKidsProducts.map(p => p.ageGroup)));

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
                    <Link to="/kids" className="text-gray-700 hover:text-gold">Kids'</Link>
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

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Age Group</h3>
                <div className="space-y-2">
                  {ageGroups.map(ageGroup => (
                    <div key={ageGroup} className="flex items-center">
                      <input
                        type="checkbox"
                        id={ageGroup}
                        checked={selectedFilters.ageGroups.includes(ageGroup)}
                        onChange={() => toggleAgeGroup(ageGroup)}
                        className="mr-2"
                      />
                      <label htmlFor={ageGroup}>{ageGroup}</label>
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
                  max="100"
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
              <h1 className="text-3xl font-bold">Kids' Shoes Collection</h1>
              <p className="text-gray-600">Fun, comfortable shoes designed for growing feet</p>
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
                    <div className="flex justify-between mb-2">
                      <p className="text-gray-500 text-sm">{product.category}</p>
                      <p className="text-gray-500 text-sm">{product.ageGroup}</p>
                    </div>
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

export default KidsAllShoes;
