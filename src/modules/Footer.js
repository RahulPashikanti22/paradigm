import React from "react";
import RightHex from "../assets/images/RightHex.png";
import LeftHex from "../assets/images/LeftHex.png";
import { motion } from "framer-motion";

const Footer = () => {
  const coreValues = [
    "Customer Centric",
    "Respect for Individual and People",
    "Integrity",
    "Leadership",
    "Outperform",
  ];
  return (
    // <React.Fragment className="flex justify-center items-center ">
    <div className="flex justify-between items-center mt-[-30px]  overflow-hidden ">
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 5 }}
      >
        <img
          src={LeftHex}
          alt="Left Hex"
          width={20}
          height={40}
          // className=" animate-[slide-left_15s_ease-in-out_forwards]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 8 }}
      >
        {coreValues.map((value, index) => (
          <React.Fragment key={index}>
            <span className="ml-2 mr-2">{value}</span>
            {index < coreValues.length - 1 && (
              <span className="text-blue-500 ">||</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
      {/* className="overflow-hidden border-white bg-white animate-[tracking-in-expand_0.7s_cubic-bezier(0.215, 0.610, 0.355, 1.000)_both]"> */}
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 5 }}
      >
        <img
          src={RightHex}
          alt="Right Hex"
          width={20}
          height={40}
          // className=" animate-[slideRight_15s_ease-in-out_forwards]"
        />
      </motion.div>
      <style>
        {`@keyframes slideRight {
  0% {
            transform: translateX(0);
  }
  100% {
            transform: translateX(100px);
  }
}
@keyframes slide-left {
  0% {
            transform: translateX(0);
  }
  100% {
            transform: translateX(-100px);
  }
}

@keyframes tracking-in-expand {
  0% {
    width: 0;
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    width: max-content;
    opacity: 1;
  }
}

`}
      </style>
    </div>
    // </React.Fragment>
  );
};

export default Footer;
