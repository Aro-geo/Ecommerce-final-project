
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl
}) => {
  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="container relative h-full flex items-center">
        <div className="max-w-2xl text-white z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl mb-8">{description}</p>
          <Link 
            to={buttonLink}
            className="inline-block bg-white text-charcoal px-6 py-3 rounded hover:bg-gold hover:text-white transition-colors font-medium"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
