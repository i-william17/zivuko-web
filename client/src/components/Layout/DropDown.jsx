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
    <div className="absolute top-full left-0 w-[800px] bg-white z-50 shadow-xl rounded-b-md border border-[#e5e5e5] overflow-hidden animate-fadeIn">
      <div className="max-h-[70vh] overflow-y-auto custom-scrollbar p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categoriesData?.map((category, index) => (
            <div
              key={index}
              className="group flex flex-col h-full border border-[#f0f0f0] hover:border-[#d4af37] rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => handleCategorySelect(category)}
            >
              <div className="relative aspect-square bg-[#f9f9f9]">
                <Image
                  src={category.image_Url}
                  alt={category.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
              
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-[#333] group-hover:text-[#d4af37] transition-colors">
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p className="text-xs text-[#888] mt-1">{category.subtitle}</p>
                    )}
                  </div>
                  <FiChevronRight className="text-[#ccc] group-hover:text-[#d4af37] transition-colors mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-[#f9f9f9] px-6 py-3 border-t border-[#e5e5e5] text-center">
        <p className="text-xs text-[#888] tracking-wider">
          SELECT A CATEGORY TO EXPLORE OUR COLLECTION
        </p>
      </div>
    </div>
  );
};

export default DropDown;