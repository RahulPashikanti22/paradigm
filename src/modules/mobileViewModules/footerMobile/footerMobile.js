import React from "react";

function Footer({ isHide }) {
  if (isHide) return null;
  return (
    <div className="w-full right-4 bottom-0">
      <div className=" w-full flex  text-center justify-end flex-col text-white ">
        <hr className="mt-1 border-t border-gray-500" />
        <span className="text-xs  mt-2">
          Copyright &copy; 2022 ParadigmIT, All Right Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
