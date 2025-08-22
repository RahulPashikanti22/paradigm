import React from "react";

function HomeBG({ width = "", height = "", className = "" }) {
  return (
    <svg
      className="absolute top-0"
      width="100%"
      height="480"
      viewBox="0 0 1504 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M119.5 454.731C44 455.022 0 495.223 0 495.223V0H1504L1503.5 473.276C1503.5 473.276 1419 508.623 1303.5 511.245C1188 513.867 1167.5 445.118 1056 448.322C944.5 451.527 891.5 505.419 804.5 511.245C717.5 517.071 672.5 480.366 581 482.988C489.5 485.61 456 520.858 382 519.984C308 519.11 195 454.44 119.5 454.731Z"
        fill="url(#paint0_linear_7_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7_2"
          x1="728.5"
          y1="1031.1"
          x2="822.097"
          y2="-323.144"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#004DA7" stopOpacity="0.38" />
          <stop offset="1" stopColor="#479CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HomeBG;
