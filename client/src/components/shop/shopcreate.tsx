"use client";

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import ShopCreate from "./shop-signup";

const ShopCreatePage = () => {
  const router = useRouter();
  const { isSeller, seller } = useSelector((state: any) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      router.push(`/shop/${seller._id}`);
    }
  }, [isSeller, seller, router]);

  return (
    <div>
        <ShopCreate />
    </div>
  )
}

export default ShopCreatePage;