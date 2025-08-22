import React from "react";

import AboutMobile from "../../../assets/images/AboutMobile.svg";
import polygon from "../../../assets/images/backgrounds/Polygon.svg";
import polygonFilled from "../../../assets/images/backgrounds/PolygonFilled.svg";



function WhoWeAre(props) {
  return (
    <section
      id="about"
      className=" w-screen h-[94vh] overflow-y-hidden overflow-x-scroll scroll-smooth snap-x scrollbar-none grid grid-rows-[80px_calc(100%-80px)] grid-cols-1"
    >
      {/* <Tobbar /> */}
      {/* <div className="h-[30px] w-full"></div> */}
      <div className="w-screen snap-center">
        <div className="w-full h-full flex justify-around">
          <div className="flex flex-col px-10 gap-6">
            <div className="w-full lg:w-7/12 flex flex-col justify-center items-center  relative">
              <h1 className="text-[#2086FE] lg:text-xl 2xl:text-2xl  font-bold text-xl ">
                WHO ARE WE
              </h1>
              <p className="text-[#000] font-medium 2xl:text-3xl lg:text-2xl text-center items-center justify-center mt-3">
                Lines of businesses managed by multiple <br />
                business units
              </p>
              <p className="mt-5 2xl:text-2xl text-md md:text-sm font-sans relative pb-8">
                ParadigmIT consists of multiple business units managing
                different lines of businesses, delivering services in Clinical
                Trial Services (i.e., CDM, Stats, MW), Application
                Development/Maintenance, Large scale onsite deployment projects
                (SI), Staffing, Staff Augmentation spread across India & USA,
                e-Governance solutions in Central and State Government, Cyber
                Security and Smart Agri-Tech in Government and Enterprise
                sectors.
                <br />
                Our Software development center is certified with CMMI Level 5
                for development, ISO 9001, SOC 2 certifications and
                State-of-the-art infrastructure with ISO 27001 Certified
                Information Security Management, possessing for software design
                and development activities
              </p>
            </div>
            <div className="absolute bottom-0 w-[85%] flex justify-between">
              <img
                id="polygonHalo"
                alt=""
                src={polygon}
                className="aspect-square w-[40px] opacity-0 translate-y-16"
              />
              <img
                id="polygonFilled"
                alt=""
                src={polygonFilled}
                className="aspect-square w-[50px] opacity-1 -translate-y-[100px]"
              />
            </div>
            <div className="">
              <img
                src={AboutMobile}
                alt=" "
                className="w-full h-[70%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
