'use client';

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const DropDown = ({ categoriesData, setDropDown }) => {
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setDropDown]);

  const submitHandle = (i) => {
    router.push(`/products?category=${i.title}`);
    setDropDown(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={dropdownRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute z-50 w-full sm:w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
      >
        <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
          {categoriesData?.map((i, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
              className="flex items-center px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => submitHandle(i)}
            >
              <div className="relative flex-shrink-0 w-8 h-8 rounded-md overflow-hidden bg-gray-50 border border-gray-200">
                <Image
                  src={i.image_Url}
                  width={32}
                  height={32}
                  className="object-contain p-1"
                  alt={i.title || "Category icon"}
                  onError={(e) => {
                    e.target.src = '/default-category.png';
                  }}
                />
              </div>
              
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {i.title}
                </p>
                {i.subtitle && (
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {i.subtitle}
                  </p>
                )}
              </div>
              
              <FiChevronRight className="ml-2 text-gray-400 flex-shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center font-medium tracking-wide">
            SELECT CATEGORY TO EXPLORE
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DropDown;