
import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCategoryProps {
  title: string;
  products: Product[];
  categoryLink: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ title, products, categoryLink }) => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-charcoal">{title}</h2>
          <Link 
            to={categoryLink} 
            className="text-gold font-medium hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
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
      </div>
    </section>
  );
};

export default ProductCategory;
