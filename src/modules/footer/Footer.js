import React from "react";
import useWindowDimensions from "../../utils/hooks/useWindow";

function Footer({ isHide }) {
  
  if (isHide) return null;
  return (
    <div className="w-full  fixed bottom-0">
      <div className="bg-[#252d2d] w-full flex justify-between text-white">
        <span className="">+91  98589 43064</span>
        <span className="text-xs items-center   mt-1">
          Copyright &copy; 2024 ParadigmIT, All Right Reserved
        </span>
        <span className=""><a href="mailto:ask@paradigmIT.com">ask@paradigmIT.com</a></span>
      </div>
    </div>
  );
}

export default Footer;
