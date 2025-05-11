
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  category
}) => {
  return (
    <Link to={`/product/${id}`} className="group product-card block">
      <div className="overflow-hidden rounded-md">
        <img 
          src={imageUrl} 
          alt={name} 
          className="product-image w-full h-64 object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-charcoal">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-lg font-semibold">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
