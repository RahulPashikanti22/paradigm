import React from "react";
import ptc from "../assets/images/partners/PTCLogo.png";
import Quantela from "../assets/images/partners/Quantela_Logo.png";
import Recovery from "../assets/images/partners/RecoveryLogo.png";
import RXParadigm from "../assets/images/partners/RXParadigm.png";
import Welding_Pharma from "../assets/images/partners/Welding_Pharma.png";
import DassaultSystems from "../assets/images/partners/DassaultSystems.png";
import Medidata from "../assets/images/partners/Medidata.png";
// import Pathsetter from "../assets/images/partners/Pathsetter.svg"
import ameri from "../assets/images/partners/AMERI.png";
// import cyber from "../assets/images/partners/Cyber.png"
// import { motion } from "framer-motion";

function Partners(props) {
  const scrollingContainerStyle = {
    display: "flex",
    animation: "scroll 20s linear infinite", // Adjust the duration as needed
  };

  const scrollKeyframes = {
    from: {
      transform: "translateX(-100%)",
    },
    to: {
      transform: "translateX(calc(100%))", // Adjust the percentage based on the number of images
    },
  };

  return (
    <div className="w-full max-w-full h-[15vh] mb-2 flex overflow-hidden items-center relative">
      <div className="w-max absolute overflow-x-hidden top-0 left-0 animate-[moveSlideshow_10s_linear_infinite] duration-[5s] ease-linear ">
        <div
          // whileHover={{ animationPlayState: "paused" }}
          // style={scrollingContainerStyle}
          className="gap-x-10 flex items-center "
        >
          {/* Duplicate the images to create a continuous flow */}
         
          <img
            src={DassaultSystems}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Dassault Systems"
          />
          <img
            src={RXParadigm}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="RX Paradigm"
          />
          <img
            src={Quantela}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Quantela"
          />
          <img
            src={Medidata}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Medidata"
          />
          <img
            src={Welding_Pharma}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Welding Pharma"
          />
          <img
            src={ameri}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="AMERI"
          />
          <img
            src={ptc}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="PTC"
          />
          <img
            src={Recovery}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Recovery"
          />
       

          <img
            src={DassaultSystems}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Dassault Systems"
          />
          <img
            src={RXParadigm}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="RX Paradigm"
          />
          <img
            src={Quantela}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Quantela"
          />
          <img
            src={Medidata}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Medidata"
          />
          <img
            src={Welding_Pharma}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Welding Pharma"
          />
          <img
            src={ameri}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="AMERI"
          />
          <img
            src={ptc}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="PTC"
          />
          <img
            src={Recovery}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Recovery"
          />
          

          <img
            src={DassaultSystems}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Dassault Systems"
          />
          <img
            src={RXParadigm}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="RX Paradigm"
          />
          <img
            src={Quantela}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Quantela"
          />
          <img
            src={Medidata}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Medidata"
          />
          <img
            src={Welding_Pharma}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Welding Pharma"
          />
          <img
            src={ameri}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="AMERI"
          />
          <img
            src={ptc}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="PTC"
          />
          <img
            src={Recovery}
            className="w-auto h-auto inline-block align-middle m-0"
            alt="Recovery"
          />
          
        </div>

      </div>

      <style>
        {`
          @keyframes moveSlideshow {
            100% { 
              transform: translateX(-1117px);  
            }
          }
        `}
      </style>
    </div>
  );
}

export default Partners;
