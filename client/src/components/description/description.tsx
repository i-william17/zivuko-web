'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'
import { FiCheckCircle, FiTruck, FiShield, FiCreditCard } from 'react-icons/fi';

const Description = () => {
  const features = [
    {
      icon: <FiTruck className="w-6 h-6 text-primary" />,
      title: "Fast Nationwide Delivery",
      description: "Get your orders delivered within 2-3 business days across Kenya"
    },
    {
      icon: <FiShield className="w-6 h-6 text-primary" />,
      title: "Secure Shopping",
      description: "Your data is always protected with our 256-bit encryption"
    },
    {
      icon: <FiCreditCard className="w-6 h-6 text-primary" />,
      title: "Flexible Payments",
      description: "Pay with M-Pesa, credit cards, or mobile banking"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image with Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/product-showcase.png"
                alt="Zivuko Shopping Experience"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating elements with animations */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 -top-8 bg-white p-4 rounded-xl shadow-lg z-10 hidden md:block"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <FiCheckCircle className="text-green-600 w-5 h-5" />
                </div>
                <span className="text-sm font-medium">10,000+ Happy Customers</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -right-8 -bottom-8 bg-white p-4 rounded-xl shadow-lg z-10 hidden md:block"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FiTruck className="text-blue-600 w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Free Delivery in Nairobi</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-primary">Zivuko</span> Shopping Experience
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Discover Kenya's premier online marketplace with seamless shopping, 
              secure payments, and lightning-fast delivery. Zivuko brings you 
              the best products from trusted sellers nationwide.
            </p>
            
            {/* Key Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button with Hover Animation */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:bg-primary-dark transition-colors"
              >
                Explore Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { text: "100% Secure Payments", color: "text-green-500" },
            { text: "7-Day Returns", color: "text-blue-500" },
            { text: "24/7 Support", color: "text-purple-500" },
            { text: "Authentic Products", color: "text-orange-500" }
          ].map((badge, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className={`text-2xl font-bold mb-2 ${badge.color}`}>
                {index === 0 && "🔒"}
                {index === 1 && "🔄"}
                {index === 2 && "📞"}
                {index === 3 && "✔️"}
              </div>
              <p className="text-gray-700 font-medium">{badge.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Description;