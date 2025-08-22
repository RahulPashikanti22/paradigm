import React from "react";
import { useEffect } from "react";

const Ellipse = ({ width = "696", height = "493" }) => {
  useEffect(() => {
    var e = document.querySelector("ellipse"),
      p = document.querySelector("circle");
    var rx = e.getAttribute("rx"),
      ry = e.getAttribute("ry");
    var angle = 0;
    const spin = () => {
      angle *= angle !== 180;
      var t = Math.tan((angle++ / 360) * Math.PI);
      console.log(angle, t, rx, ry, "ellipse details");
      var px = (rx * (1 - t ** 2)) / (1 + t ** 2),
        py = (ry * 2 * t) / (1 + t ** 2);
      p.setAttribute("cx", px);
      p.setAttribute("cy", py);
      requestAnimationFrame(spin);
    };
  }, []);
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx={width / 2}
        cy={height / 2}
        rx={width / 2}
        ry={height / 2}
        fill="transparent"
        // stroke="url(#paint0_linear_466_873)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_466_873"
          x1="348"
          y1="-81.4568"
          x2="348"
          y2="210.297"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252D2D" />
          <stop offset="1" stopColor="#BEBEBE" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ellipse;
