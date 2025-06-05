'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import Image from "next/image";

const Categories = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      {/* Branding Section */}
      <div className={`${styles.section} hidden sm:block`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="branding my-10 flex flex-wrap justify-between gap-4 w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 divide-x divide-gray-100"
        >
          {brandingData?.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="flex-1 min-w-[180px] flex items-start gap-4 p-6 group transition-all duration-300"
            >
              <span className="text-green-600 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-base text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.Description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.section} bg-white p-4 sm:p-6 rounded-2xl shadow-md mb-12 transition-all duration-300`}
        id="categories"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
          Browse Categories
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categoriesData?.map((item) => {
            const handleSubmit = () => {
              router.push(`/products?category=${item.title}`);
            };

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                onClick={handleSubmit}
                className="relative group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 shadow hover:shadow-lg border border-gray-200 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative min-h-[160px] sm:min-h-[180px] p-4 sm:p-5 flex flex-col justify-between">
                  <h5 className="text-[16px] sm:text-[18px] leading-tight font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 z-10">
                    {item.title}
                  </h5>

                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] self-end"
                  >
                    <Image
                      src={item.image_Url}
                      alt={item.title}
                      fill
                      className="object-contain transform group-hover:translate-x-2 transition-transform duration-300"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Hover Effect Overlay Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Categories;
