import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold text-center text-gray-800 mb-6"
        >
          About
        </motion.h1>
        
        <Card className="max-w-3xl w-full p-6 shadow-lg rounded-2xl bg-white">
          <img 
            src="https://cms-static.wehaacdn.com/parcelindustry-com/images/Img501821080.470.widea.0.jpg" 
            alt="Parcel Management" 
            width={600} 
            height={300} 
            className="w-full rounded-lg mb-4"
          />
          <CardContent className="space-y-4 text-gray-700 text-lg">
            <p>
              Welcome to <span className="font-semibold">Parcel Management System</span>, your reliable and efficient solution for hassle-free parcel tracking and management.
            </p>
            <p>
              We understand the challenges of handling deliveries, whether you're a business managing bulk shipments or an individual expecting an important package. Our platform is designed to streamline the process, ensuring secure, transparent, and real-time tracking of your parcels.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-200 rounded-lg">
                <span className="font-semibold">🚀 Real-Time Tracking</span> – Stay updated with accurate delivery statuses.
              </div>
              <div className="p-4 bg-gray-200 rounded-lg">
                <span className="font-semibold">🔒 Secure & Reliable</span> – Your parcels are handled with utmost care.
              </div>
              <div className="p-4 bg-gray-200 rounded-lg">
                <span className="font-semibold">📦 Easy Management</span> – A user-friendly dashboard for effortless tracking.
              </div>
              <div className="p-4 bg-gray-200 rounded-lg">
                <span className="font-semibold">⚡ Fast & Efficient</span> – Optimized for quick and smooth deliveries.
              </div>
            </div>
            <p>
              At <span className="font-semibold">Parcel Management System</span>, we are committed to making parcel delivery seamless, ensuring you have complete control and visibility over your shipments. Join us today and experience a smarter way to manage parcels!
            </p>
            <div className="flex justify-center mt-6">
              <Link to='/'>
              <Button className="px-6 py-3 text-lg font-semibold rounded-lg">
                Get Started
              </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
};

export default About;