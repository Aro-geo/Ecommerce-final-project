
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-light-gray">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-charcoal mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! We can't seem to find the page you're looking for.
          </p>
          <Link
            to="/"
            className="inline-block bg-charcoal text-white px-6 py-3 rounded hover:bg-gold transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
