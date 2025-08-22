import React from "react";

function Circle({ radius = "35", onClick = () => {} }) {
  return (
    <div className="absolute z-10">
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <circle cx="55" cy="55" r="55" fill="url(#paint0_linear_13_12)" />

        <defs>
          <linearGradient
            id="paint0_linear_13_12"
            x1="34.65"
            y1="3.85"
            x2="82.5"
            y2="129.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0391993" stopColor="#2086FE" />
            <stop offset="1" stopColor="#2086FE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Circle;
