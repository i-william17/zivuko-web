'use client';

import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import Footer from "../../components/footer/footer";
import Header from "../../components/navbar/navbar";
import Loader from "../../components/Layout/Loader";
import ProductCard from "../../components/Route/ProductCard/ProductCard";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { AiFillStar } from "react-icons/ai";

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState(categoryData || "All");
  const [priceRange, setPriceRange] = useState([0, 1000000000]);
  const [selectedRating, setSelectedRating] = useState(0);

  // Extract unique categories from allProducts
  const categories = useMemo(() => {
    const cats = (allProducts || []).map((product) => product.category);
    return ["All", ...new Set(cats)];
  }, [allProducts]);

  // Determine the max price for the slider
  const maxPrice = useMemo(() => {
    if (!allProducts || allProducts.length === 0) return 0;
    return allProducts.reduce(
      (max, product) => (product.discountPrice > max ? product.discountPrice : max),
      0
    );
  }, [allProducts]);

  // Update priceRange default when allProducts change
  useEffect(() => {
    const highestPrice = maxPrice || 1000;
    setPriceRange([0, highestPrice]);
  }, [maxPrice]);

  // Filter Function
  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      let filtered = allProducts;

      // Filter by category
      if (selectedCategory !== "All") {
        filtered = filtered.filter((product) => product.category === selectedCategory);
      }

      // Filter by price
      filtered = filtered.filter(
        (product) =>
          product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1]
      );

      // Filter by rating
      if (selectedRating > 0) {
        filtered = filtered.filter((product) => product.ratings >= selectedRating);
      }

      setData(filtered);
    }
  }, [allProducts, selectedCategory, priceRange, selectedRating]);

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <div className="min-h-screen flex flex-col">
          <Header activeHeading={3} />
          <div className="flex-grow">
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
              {/* Filters Sidebar */}
              <div className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Category</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2">{category}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      range
                      min={0}
                      max={maxPrice}
                      defaultValue={[0, maxPrice]}
                      value={priceRange}
                      onChange={(value) => setPriceRange(value)}
                      trackStyle={[{ backgroundColor: "#68d284" }]}
                      handleStyle={[
                        { borderColor: "#68d284" },
                        { borderColor: "#68d284" },
                      ]}
                    />
                    <div className="flex justify-between mt-2 text-sm">
                      <span>sh {priceRange[0].toLocaleString()}</span>
                      <span>sh {priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Rating</h3>
                  <ul className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <li key={rating}>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="rating"
                            value={rating}
                            checked={selectedRating === rating}
                            onChange={() => setSelectedRating(rating)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2 flex items-center">
                            {Array.from({ length: rating }, (_, i) => (
                              <AiFillStar key={i} className="text-yellow-500" />
                            ))}
                            <span className="ml-1 text-sm">& Up</span>
                          </span>
                        </label>
                      </li>
                    ))}
                    <li>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          value={0}
                          checked={selectedRating === 0}
                          onChange={() => setSelectedRating(0)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">All Ratings</span>
                      </label>
                    </li>
                  </ul>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setPriceRange([0, maxPrice]);
                    setSelectedRating(0);
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Reset Filters
                </button>
              </div>

              {/* Products Grid */}
              <div className="w-full lg:w-3/4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {data && data.length > 0 ? (
                    data.map((product, index) => (
                      <ProductCard data={product} key={product._id || index} />
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center">
                      <h1 className="text-xl font-medium text-gray-600">
                        No products found!
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      {/* )} */}
    </>
  );
};

export default ProductsPage;