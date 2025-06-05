'use client';

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative overflow-hidden bg-white py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/80" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow animation-delay-2000" />
      </div>

      <div className={`${styles.section} relative z-10`}>
        {/* Enhanced Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-12 text-center"
        >
          <div className="inline-block relative">
            <h1 className="text-4xl font-bold text-gray-900 relative z-10">
              <span className="relative inline-block">
                Best Deals
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 to-gray-800 rounded-full transform origin-left scale-x-75 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Our most popular products loved by customers
            </p>
          </div>
        </motion.div>

        {/* Enhanced Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {data && data.length !== 0 ? (
            data.map((i, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="transform transition-all duration-300"
              >
                <div className="relative h-full group">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:from-white group-hover:to-gray-100" />
                  <div className="relative h-full p-1">
                    <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col border border-gray-100">
                      <ProductCard data={i} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="col-span-full"
            >
              <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-10 h-10 text-gray-400"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Deals Available
                </h3>
                <p className="text-gray-600">
                  We're refreshing our deals. Check back soon for exciting offers!
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* View All CTA */}
        {data && data.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              View All Deals
            </button>
          </motion.div>
        )}
      </div>

      {/* Animation styles */}
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

export default BestDeals;