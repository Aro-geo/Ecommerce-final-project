
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Account: React.FC = () => {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    joinDate: 'March 2023'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">My Account</h1>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-xl font-semibold">Account Information</h2>
                    <p className="text-gray-600 mt-1">Manage your personal information</p>
                  </div>
                  <Link to="/account/edit" className="mt-4 md:mt-0 bg-charcoal text-white px-4 py-2 rounded hover:bg-gold transition-colors">
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Name</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Member Since</p>
                    <p className="font-medium">{user.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Order History</h2>
                  <p className="text-gray-600 mt-1">View and track your orders</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">No recent orders.</p>
                  <Link to="/shop" className="text-gold hover:underline font-medium">
                    Start Shopping
                  </Link>
                </div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Saved Addresses</h2>
                  <p className="text-gray-600 mt-1">Manage your shipping addresses</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">No addresses saved.</p>
                  <Link to="/account/addresses" className="text-gold hover:underline font-medium">
                    Add New Address
                  </Link>
                </div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Wishlist</h2>
                  <p className="text-gray-600 mt-1">Products you've saved for later</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Your wishlist is empty.</p>
                  <Link to="/shop" className="text-gold hover:underline font-medium">
                    Browse Products
                  </Link>
                </div>
              </div>
              
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Payment Methods</h2>
                  <p className="text-gray-600 mt-1">Manage your payment options</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">No payment methods saved.</p>
                  <Link to="/account/payment" className="text-gold hover:underline font-medium">
                    Add Payment Method
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
