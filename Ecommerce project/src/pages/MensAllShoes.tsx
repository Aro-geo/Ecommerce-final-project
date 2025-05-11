
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Extended mock products data
const allMensProducts = [
  {
    id: '1',
    name: 'Classic Leather Derby',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal',
    description: 'Our signature Classic Leather Derby features premium calfskin, Goodyear welted construction, and cushioned insoles for elegance and all-day comfort.',
    colors: ['Black', 'Brown', 'Oxblood'],
    sizes: [7, 8, 9, 10, 11, 12, 13]
  },
  {
    id: '2',
    name: 'Urban Comfort Sneaker',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Casual',
    description: 'Blend style and comfort with our Urban Comfort Sneakers, featuring responsive cushioning, breathable materials, and versatile design for everyday wear.',
    colors: ['White', 'Black', 'Navy', 'Grey'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '3',
    name: 'Premium Oxford',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal',
    description: 'Crafted for the modern gentleman, our Premium Oxfords feature hand-finished leather, traditional cap-toe design, and leather soles for timeless sophistication.',
    colors: ['Black', 'Dark Brown'],
    sizes: [7, 8, 9, 10, 11, 12, 13]
  },
  {
    id: '4',
    name: 'Hiking Boots',
    price: 189.99,
    imageUrl: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Outdoor',
    description: 'Conquer any trail with our rugged Hiking Boots, featuring waterproof construction, advanced traction outsoles, and ankle support for challenging terrain.',
    colors: ['Brown', 'Grey/Orange', 'Black/Green'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '5',
    name: 'Business Loafer',
    price: 159.99,
    imageUrl: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Formal',
    description: 'Step into sophistication with our Business Loafers, featuring premium leather, handcrafted details, and memory foam insoles for superior comfort throughout your workday.',
    colors: ['Black', 'Brown', 'Tan'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '6',
    name: 'Casual Slip-On',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1626947346165-4c2288dadc2a?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Casual',
    description: 'Effortlessly cool and convenient, our Casual Slip-Ons feature elastic goring, padded collars, and flexible rubber soles for easy on-off wear and all-day comfort.',
    colors: ['Navy', 'Grey', 'Black', 'Tan'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '7',
    name: 'Athletic Running Shoes',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Athletic',
    description: 'Engineered for performance, our Athletic Running Shoes feature responsive cushioning, breathable mesh uppers, and supportive design for comfort at any pace.',
    colors: ['Black/White', 'Blue/Orange', 'Grey/Green'],
    sizes: [7, 8, 9, 10, 11, 12, 13]
  },
  {
    id: '8',
    name: 'Chelsea Boots',
    price: 169.99,
    imageUrl: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=500',
    category: 'Men\'s Boots',
    description: 'Versatile and stylish, our Chelsea Boots feature elastic side panels, pull tabs, and sleek silhouettes that transition effortlessly from day to night.',
    colors: ['Black', 'Brown', 'Tan'],
    sizes: [7, 8, 9, 10, 11, 12]
  }
];

const MensAllShoes: React.FC = () => {
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
    ? allMensProducts.filter(product => 
        selectedFilters.categories.includes(product.category) &&
        product.price >= selectedFilters.priceRange[0] &&
        product.price <= selectedFilters.priceRange[1]
      )
    : allMensProducts.filter(product => 
        product.price >= selectedFilters.priceRange[0] &&
        product.price <= selectedFilters.priceRange[1]
      );

  const categories = Array.from(new Set(allMensProducts.map(p => p.category)));

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
                    <Link to="/mens" className="text-gray-700 hover:text-gold">Men's</Link>
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
              <h1 className="text-3xl font-bold">Men's Shoes Collection</h1>
              <p className="text-gray-600">Discover quality footwear designed for the modern man</p>
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

export default MensAllShoes;
