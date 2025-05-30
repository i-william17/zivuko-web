// components/ShopOnboarding.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Loader2 } from 'lucide-react';

export default function ShopOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Welcome to Your Shop Dashboard",
      description: "Let's get your online store set up in just a few easy steps.",
      bg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    },
    {
      id: 2,
      title: "Add Your Products",
      description: "Upload your product catalog with images, descriptions, and prices.",
      bg: "bg-gradient-to-br from-amber-500 to-pink-500",
    },
    {
      id: 3,
      title: "Set Up Payment Methods",
      description: "Connect Stripe, PayPal, or other payment processors to accept payments.",
      bg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      title: "Customize Your Storefront",
      description: "Choose colors, fonts, and layout that match your brand.",
      bg: "bg-gradient-to-br from-blue-500 to-cyan-400",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setCompleted(true);
      }, 1500);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden text-center p-8"
        >
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">Setup Complete!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your shop is ready to go! Start managing your products and orders from your dashboard.
          </p>
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
            onClick={() => window.location.href = '/dashboard'}
          >
            Go to Dashboard
          </button>
        </motion.div>
      </div>
    );
  }

  const currentStepData = steps.find(step => step.id === currentStep);

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${currentStepData?.bg}`}>
      <div className="max-w-4xl w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* Sidebar with progress */}
          <div className="md:w-1/3 bg-gray-50 dark:bg-gray-700 p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Shop Setup</h2>
            
            <div className="space-y-4">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${currentStep === step.id ? 'bg-white dark:bg-gray-600 shadow-md' : 'hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full mr-3 ${currentStep >= step.id ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-500 text-gray-600 dark:text-gray-300'}`}>
                    {step.id}
                  </div>
                  <div>
                    <h3 className={`font-medium ${currentStep === step.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300'}`}>
                      {step.title.split(' ').slice(0, 3).join(' ')}...
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white dark:bg-gray-600 p-4 rounded-lg shadow-inner">
              <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2">Pro Tips</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Use high-quality product images (1000x1000px)</li>
                <li>• Set up tax rates before adding products</li>
                <li>• Enable multiple payment options</li>
                <li>• Configure shipping zones early</li>
              </ul>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:w-2/3 p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                Step {currentStep} of {steps.length}
              </span>
            </div>
            
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                {currentStepData?.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {currentStepData?.description}
              </p>
              
              {/* Step-specific content */}
              <div className="mb-8">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="p-6 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl text-center">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">Upload your shop logo</p>
                      <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm font-medium">
                        Select Image
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Shop Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          placeholder="My Awesome Shop"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Shop URL</label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm">
                            myshop.com/
                          </span>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            placeholder="your-shop"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="p-6 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                        <button className="w-16 h-16 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                          <span className="text-2xl text-gray-400">+</span>
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Premium T-Shirt"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                              placeholder="29.99"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Inventory</label>
                            <input 
                              type="number" 
                              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                              placeholder="100"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                          <textarea 
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Describe your product..."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
                      + Add another product
                    </button>
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                            <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none">
                              <path d="M6 15.5L12 9.5L18 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">Stripe</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Credit cards, Apple Pay, Google Pay</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer transition-colors">
                        <div className="flex items-center">
                          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-2 rounded-lg mr-3">
                            <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">PayPal</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">PayPal, Venmo, credit cards</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                      <h3 className="font-medium text-gray-800 dark:text-white mb-3">Test Mode</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        While in test mode, you can use the following test card numbers to simulate payments.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Card Number</span>
                          <span className="font-mono text-gray-700 dark:text-gray-200">4242 4242 4242 4242</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Expiry</span>
                          <span className="font-mono text-gray-700 dark:text-gray-200">Any future date</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">CVC</span>
                          <span className="font-mono text-gray-700 dark:text-gray-200">Any 3 digits</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['indigo', 'rose', 'emerald', 'amber'].map((color) => (
                        <div key={color} className="cursor-pointer group">
                          <div className={`h-20 rounded-lg mb-2 bg-gradient-to-br from-${color}-500 to-${color}-600 group-hover:opacity-90 transition-opacity`}></div>
                          <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-300 capitalize">
                            {color}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Primary Font</label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white">
                          <option>Inter (Default)</option>
                          <option>Poppins</option>
                          <option>Montserrat</option>
                          <option>Roboto</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Secondary Font</label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white">
                          <option>Inter (Default)</option>
                          <option>Poppins</option>
                          <option>Montserrat</option>
                          <option>Roboto</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                      <h3 className="font-medium text-gray-800 dark:text-white mb-3">Preview</h3>
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-8 bg-gray-200 dark:bg-gray-600 flex items-center px-3">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg">Your Shop Name</h3>
                            <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md">
                              Cart (0)
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="border rounded-lg overflow-hidden">
                                <div className="h-32 bg-gray-100 dark:bg-gray-700"></div>
                                <div className="p-3">
                                  <h4 className="font-medium mb-1">Product {i}</h4>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">$29.99</p>
                                  <button className="w-full py-1 bg-indigo-600 text-white text-sm rounded-md">
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg ${currentStep === 1 ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex items-center px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Processing...
                  </>
                ) : (
                  <>
                    {currentStep === steps.length ? 'Complete Setup' : 'Next Step'}
                    <ChevronRight className="ml-2" size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}