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
    <div className="relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/30 via-transparent to-indigo-50/30" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-3xl" />

      <div className={`${styles.section} relative z-10`}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className={`${styles.heading} relative inline-block`}>
            <h1 className="text-3xl font-bold text-gray-800 relative z-10">
              Featured Products
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transform origin-left" />
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg opacity-50 blur" />
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12"
        >
          {allProducts && allProducts.length !== 0 && (
            <>
              {allProducts.map((i, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="transform transition-all duration-300"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="relative group">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <ProductCard data={i} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>

        {/* Empty State */}
        {(!allProducts || allProducts.length === 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 px-4"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center">
              <svg 
                className="w-16 h-16 mx-auto mb-4 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No Featured Products
              </h3>
              <p className="text-gray-600">
                Check back soon for our featured product collection
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;