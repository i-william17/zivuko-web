'use client';

import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative bg-white">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50/30 to-white" />
        <div className="absolute top-20 left-0 w-72 h-72 bg-green-100/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-gray-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow animation-delay-2000" />
      </div>

      <div className={`${styles.section} relative z-10 py-16`}>
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl font-bold text-gray-900 relative z-10">
              <span className="relative inline-block">
                Featured Products
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 to-gray-900 rounded-full transform origin-left scale-x-90 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Curated selection of our finest products
            </p>
          </div>
        </motion.div>

        {/* Enhanced Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        >
          {allProducts && allProducts.length !== 0 ? (
            allProducts.map((i, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="transform transition-all duration-300"
              >
                <div className="relative group h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:from-white group-hover:to-gray-100" />
                  <div className="relative h-full p-1">
                    <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col border border-gray-100">
                      <div className="relative overflow-hidden">
                        {/* Premium hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <ProductCard data={i} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full"
            >
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <div className="mx-auto w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <svg 
                    className="w-12 h-12 text-gray-400"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  No Featured Products
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We're preparing something special. Check back soon for our exclusive collection.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* View All CTA */}
        {allProducts && allProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              View All Products
            </button>
          </motion.div>
        )}
      </div>

      {/* Add these to your global CSS */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default FeaturedProduct;