import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex} bg-custom-bg bg bg-cover bg-center`}
      style={{
        }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={` text-[35px] leading-[1.2] 800px:text-[60px] text-[indigo] font-[600] capitalize`}
        >
          Get all you can get<br /> here with us
        </h1>
        <p className="pt-5 text-[20px] font-[Poppins] font-[500] text-[#000000ba]">
        Discover unbeatable deals and premium<br/> quality—shop now for extraordinary value!
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
