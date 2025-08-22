import React from "react";

import Ellipse from "../../components/Ellipse";
import useWindowDimensions from "../../utils/hooks/useWindow";

import arrowRight from "../../assets/images/backgrounds/ArrowRIght.svg";


import Circle from "../../components/Circle";
import LeftBG from "../../assets/images/backgrounds/LeftBG.svg";
import RightBG from "../../assets/images/backgrounds/RightBG.svg";
import Partners from "../../modules/Partners";
import Footer from "../../modules/Footer";
import Background from "../../assets/images/backgrounds/Background.svg";
import { motion } from "framer-motion";
import gsap from "gsap";

const Index = () => {
  const { width } = useWindowDimensions();

  const onClick = (index = 5.833) => {
    console.log("Clicked");
    let panels = gsap.utils.toArray(".panel1");
    if (panels.length > 0) {
      gsap.to(window, {
        scrollTo: {
          x: index * panels[0].offsetWidth,
          autoKill: false,
        },
        duration: 1,
      });
    }
  };

  return (
    <main
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPositionY: "100%",
        backgroundSize: "cover",
      }}
      className="relative max-w-screen h-full bg-red-500 max-h-screen grid grid-rows-[75vh_19vh_6vh] grid-cols-1 m-0 p-0 border-none"
    >
      <div className="relative w-full h-full">
        <div className="absolute h-[50vh] top-4 left-0 flex w-full justify-between">
          <img src={LeftBG} alt="" className="w-auto h-full" />
          <img src={RightBG} alt="" className="w-auto h-full" />
        </div>
        <div className="absolute w-[100%] h-[95%] top-[6vh] flex justify-center">
          <div className="relative flex justify-center items-center w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[50%] translate-x-[3.33%]">
            <div className="absolute p-5" onClick={() => onClick(0)}>
              <Ellipse width={width * 0.4} height={(width * 0.4) / 1.414} />
              <div className="flex max-h-min justify-center items-center absolute max-w-min top-[20%] left-[5.5%] animate-[slide-right_10s_ease-in-out_0s_infinite_alternate]">
                <Circle radius={width / 25} />
                <span className="text-[10px]  text-white flex text-center z-[50_!important] w-[100%] xl:text-[10px] 2xl:text-md">
                  Implementation Partnering
                </span>
              </div>
            </div>
            <div className="relative p-5">
              <Ellipse width={width * 0.3} height={(width * 0.3) / 1.516} />
              <motion.div
                onClick={() => onClick(1)}
                className="flex max-h-min justify-center items-center absolute max-w-min top-[15%] left-[50%] animate-[slide-right_20s_ease-in-out_4s_infinite_alternate]"
              >
                <Circle radius={width / 50} />
                <span  className="text-[10px]  text-white flex text-center z-[50_!important] w-[100%] xl:text-[10px] 2xl:text-md">
                  IT Infra
                </span>
              </motion.div>
              <motion.div
                onClick={() => onClick(2)}
                className="flex max-h-min justify-center items-center absolute max-w-min top-[8%] left-[23%] animate-[slide-right_15s_ease-in-out_1s_infinite_alternate]"
              >
                <Circle radius={width / 30} />
                <span  className="text-[10px]  text-white flex text-center z-[50_!important] w-[100%] xl:text-[10px] 2xl:text-md">
                  Clinical Trial Services
                </span>
              </motion.div>
              <motion.div
                onClick={() => onClick(3)}
                className="flex max-h-min justify-center items-center absolute max-w-min top-[8%] left-[59.66%] animate-[slide-right_17s_ease-in-out_6s_infinite_alternate]"
              >
                <Circle radius={width / 30} />
                <span  className="text-[10px]  text-white flex text-center z-[50_!important] w-[100%] xl:text-[10px] 2xl:text-md">
                  Application Development
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute w-[calc(100%-20%)] top-[50%] left-[10%] text-center font-medium flex flex-col gap-y-1 items-center">
          <div className="text-[1em] lg:text-[1.25em] font-medium xl:text-[1.25rem] 2xl:text-[1.75em] text-[#252d2d] leading-6 lg:leading-6 xl:leading-2 2xl:leading-9">
            Global technology solutions provider focused on delivering customer
            value through high-quality processes and cost-efficient solutions
          </div>
          <div className="text-[#4B4B4B] text-xs lg:text-xs xl:text-[0.875em] 2xl:text-[1em]  lg:leading-5 xl:leading-2 2xl:leading-9">
            ParadigmIT has been one of the trendsetters in global delivery
            practices with our Client-Centric Model for customer management and
            delivery. Established in 1998, Paradigm has global clientele in
            Fortune 500 and Government Sectors.
          </div>
        </div>
        
      </div>

      <div className="w-full h-full flex justify-around items-center relative flex-col">
        <div className="w-full h-full flex justify-around items-center relative flex-col">
          <div className="flex">
            <div className="w-full text-[0.75rem] lg:text-[1.50em] xl:text-[1.5em] 2xl:text-[2em] text-center">
              Global Partners
            </div>
            <div className="absolute bottom-20 flex flex-col items-center justify-center  right-0 ">
              <img src={arrowRight} alt="Arrow" className="w-10 h-10 " />
              <h1>Scroll Up</h1>
            </div>
          </div>
          <Partners />
          <Footer />
        </div>
      </div>
      <style>
        {`
          @keyframes slide-right {
            0% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(25px);
            }
            50% {
              transform: translateY(25px) translateX(50px);
            }
            75% {
              transform: translateY(-25px) translateX(25px);
            }
            100% {
              transform: translateY(0) translateX(0);
            }
          }
        `}
      </style>
    </main>
  );
};

export default Index;

export const Head = () => <title>home</title>;
