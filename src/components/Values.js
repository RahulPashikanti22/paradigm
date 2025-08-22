import React from "react";

const Values = ({ data, icon, className }) => {
  return (
    <div className="w-fit core-value">
      <div className="w-[190px]">
        <div
          className="flex flex-col  "
          style={{
            opacity: 0,
            animation: "values  1s ease-in-out forwards",
            animationDelay: data.animationDelay,
          }}
        >
          <h1 className="text-xl font-bold  ">{data.title}</h1>
          <p className="flex">{data.content}</p>
        </div>
        <div className={className}>
          <img src={icon} className="w-[60px]" alt="Icon" />
        </div>
      </div>
      <style>
        {`@keyframes values {
      0% {
        transform: translateY(5px) scale(0);
        opacity: 0;
      }
      50% {
        opacity: 0.7;
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }`}
      </style>
    </div>
  );
};

export default Values;
