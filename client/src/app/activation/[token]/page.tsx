'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { server } from "../../../server";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../../public/1-nobg.png";

const ActivationPage = () => {
  const [error, setError] = useState<string | false>(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const { token } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      const sendRequest = async () => {
        setLoading(true);
        try {
          await axios.post(`${server}/user/activation`, { activation_token: token });
          setSuccess(true);
          setLoading(false);
          console.log("Activation token:", token);

          setTimeout(() => {
            router.push('/user-login');
          }, 5000);
        } catch (err: any) {
          setError(err.response?.data?.message || "Something went wrong");
          setLoading(false);
        }
      };
      sendRequest();
    } else {
      setError("Activation token is missing");
      setLoading(false);
    }
  }, [token, router]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-gray-50 p-4">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Image 
          src={logo} 
          alt="Company Logo" 
          width={150} 
          height={50} 
          className="object-contain"
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center max-w-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Activating Your Account</h2>
            <p className="text-gray-600 mb-6">Please wait while we verify your account details...</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center"
          >
            <div className="mx-auto mb-6 text-red-500 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Activation Failed</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
              >
                Return to Home
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/contact')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
              >
                Contact Support
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center"
          >
            <div className="mx-auto mb-6 text-green-500">
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Account Activated!</h2>
            <p className="text-gray-600 mb-6">Welcome to our Zivuko community! Your account is now ready to use.</p>
            <div className="mb-6">
              <p className="text-sm text-gray-500">You'll be redirected in 5 seconds...</p>
              <motion.div 
                className="mt-2 h-1 bg-blue-100 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5 }}
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/user-login')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all w-full sm:w-auto"
            >
              Go to Login Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center text-gray-500 text-sm"
      >
        <p>Need help? <a href="/contact" className="text-blue-600 hover:underline">Contact our support team</a></p>
        <p className="mt-1">© {new Date().getFullYear()} Zivuko Kenya. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default ActivationPage;
