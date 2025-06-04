import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();

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
          className={`
            branding my-12 flex justify-between w-full 
            bg-white rounded-xl shadow-lg 
            transform hover:shadow-xl transition-all duration-300
            divide-x divide-gray-100
          `}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 flex items-start p-6 group transition-all duration-300"
                key={index}
              >
                <span className="text-indigo-600 transform group-hover:scale-110 transition-transform duration-300">
                  {i.icon}
                </span>
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {i.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {i.Description}
                  </p>
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
        className={`
          ${styles.section} bg-white p-8 rounded-xl shadow-lg mb-12
          transform hover:shadow-xl transition-all duration-300
        `}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };

              return (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className={`
                    relative overflow-hidden rounded-xl cursor-pointer
                    bg-gradient-to-r from-gray-50 to-gray-100
                    group transition-all duration-300
                    shadow-sm hover:shadow-md
                    border border-gray-100
                  `}
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative h-[140px] p-6 flex items-center justify-between">
                    <h5 className={`
                      text-[18px] leading-[1.3] font-semibold
                      text-gray-800 group-hover:text-indigo-600
                      transition-colors duration-300
                      relative z-10
                    `}>
                      {i.title}
                    </h5>

                    <motion.img
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      src={i.image_Url}
                      className="w-[120px] object-cover transform group-hover:translate-x-2 transition-transform duration-300"
                      alt={i.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </>
  );
};

export default Categories;