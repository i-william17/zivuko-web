'use client';

import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCheckCircle } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { server } from "../../server";
import { motion } from "framer-motion";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error("File size should be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        toast.success("Profile picture uploaded successfully");
      }
    };
    reader.readAsDataURL(file);
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar,
      requirements: {
        minLength: password.length >= minLength,
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    // Validate password strength
    const { isValid, requirements } = validatePassword(password);
    if (!isValid) {
      let message = "Password must contain:";
      if (!requirements.minLength) message += "\n- At least 8 characters";
      if (!requirements.hasUpperCase) message += "\n- At least one uppercase letter";
      if (!requirements.hasLowerCase) message += "\n- At least one lowercase letter";
      if (!requirements.hasNumber) message += "\n- At least one number";
      if (!requirements.hasSpecialChar) message += "\n- At least one special character";
      toast.error(message);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await axios.post(`${server}/user/create-user`, { 
        name, 
        email, 
        password, 
        avatar 
      });

      console.log("Registration response:", res.data);
      
      toast.success(
        <div className="flex items-center gap-2">
          <AiOutlineCheckCircle className="text-green-500 text-xl" />
          <span>{res.data.message}</span>
        </div>
      );

      // Reset form with animation
      setTimeout(() => {
        formRef.current.reset();
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAvatar(null);
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred during registration");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('/bg-custom-bg3.jpg')] bg-center bg-cover">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center text-3xl font-extrabold text-gray-900"
        >
          Register as a new user
        </motion.h2>
        <p className="mt-2 text-center text-sm text-gray-700">
          Create your account to get started
        </p>
      </div>
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm py-8 px-6 shadow-lg sm:rounded-xl sm:px-10 border border-gray-200"
        >
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-3 top-3 cursor-pointer text-gray-600 hover:text-gray-800"
                    size={20}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-3 cursor-pointer text-gray-600 hover:text-gray-800"
                    size={20}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              {password && (
                <div className="mt-2 text-xs text-gray-600">
                  <p>Password must contain:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className={password.length >= 8 ? "text-green-500" : ""}>At least 8 characters</li>
                    <li className={/[A-Z]/.test(password) ? "text-green-500" : ""}>One uppercase letter</li>
                    <li className={/[a-z]/.test(password) ? "text-green-500" : ""}>One lowercase letter</li>
                    <li className={/\d/.test(password) ? "text-green-500" : ""}>One number</li>
                    <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-green-500" : ""}>One special character</li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-3 top-3 cursor-pointer text-gray-600 hover:text-gray-800"
                    size={20}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-3 top-3 cursor-pointer text-gray-600 hover:text-gray-800"
                    size={20}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="mt-1 text-xs text-red-500">Passwords do not match</p>
              )}
            </div>

            <div>
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-800">
                Profile Picture
              </label>
              <div className="mt-2 flex items-center gap-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300">
                  {avatar ? (
                    <Image
                      src={avatar}
                      alt="avatar"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <RxAvatar className="h-6 w-6 text-gray-500" />
                  )}
                </div>
                <label
                  htmlFor="file-input"
                  className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-800 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <span>Choose profile photo</span>
                  <input
                    type="file"
                    id="file-input"
                    name="avatar"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">Max file size: 2MB</p>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </motion.div>
            
            <div className="text-center text-sm text-gray-700">
              <p>
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;