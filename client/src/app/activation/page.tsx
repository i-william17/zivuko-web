'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { server } from "../../server";
import { useRouter } from "next/navigation";

const ActivationPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const activation_token = searchParams.get('activation_token');
  const router = useRouter();

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        setLoading(true);
        try {
          const res = await axios.post(`${server}/user/activation`, { activation_token });
          console.log(res);
          setLoading(false);
          
          // Redirect after successful activation
          setTimeout(() => {
            router.push('/login');
          }, 3000);
        } catch (err) {
          setError(err.response?.data?.message || "Something went wrong");
          setLoading(false);
        }
      };
      sendRequest();
    } else {
      setError("Activation token is missing");
      setLoading(false);
    }
  }, [activation_token, router]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-700">Activating your account...</p>
        </div>
      ) : error ? (
        <div className="text-center">
          <div className="mx-auto mb-4 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-lg font-medium text-gray-700">{error}</p>
          <button 
            onClick={() => router.push('/')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="mx-auto mb-4 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Account Activated Successfully!</h2>
          <p className="text-gray-600 mb-6">You will be redirected to the login page shortly.</p>
          <button 
            onClick={() => router.push('/login')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Login Now
          </button>
        </div>
      )}
    </div>
  );
};

export default ActivationPage;