import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

const DropDown = ({ categoriesData, setDropDown }) => {
  const router = useRouter();
  
  const handleCategorySelect = (category) => {
    router.push(`/products?category=${category.title}`);
    setDropDown(false);
  };

  return (
    <div className="absolute top-full left-0 w-[320px] bg-white z-50 shadow-xl rounded-b-md border border-[#e5e5e5] overflow-hidden animate-fadeIn">
      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
        {categoriesData?.map((category, index) => (
          <div
            key={index}
            className="group flex items-center px-6 py-4 hover:bg-[#f9f9f9] transition-colors duration-300 border-b border-[#f0f0f0] last:border-0 cursor-pointer"
            onClick={() => handleCategorySelect(category)}
          >
            <div className="relative w-8 h-8 mr-4 flex-shrink-0">
              <Image
                src={category.image_Url}
                alt={category.title}
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-sm font-light text-[#333] group-hover:text-[#d4af37] transition-colors duration-300">
                {category.title}
              </h3>
              {category.subtitle && (
                <p className="text-xs text-[#888] mt-1">{category.subtitle}</p>
              )}
            </div>
            
            <FiChevronRight className="ml-2 text-[#ccc] group-hover:text-[#d4af37] transition-colors duration-300" />
          </div>
        ))}
      </div>
      
      {/* Luxury Footer */}
      <div className="bg-[#f9f9f9] px-6 py-3 border-t border-[#e5e5e5]">
        <p className="text-xs text-[#888] tracking-wider">
          SELECT A CATEGORY TO EXPLORE OUR COLLECTION
        </p>
      </div>
    </div>
  );
};

export default DropDown;