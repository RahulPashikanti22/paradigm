import React, { useState } from "react";
import Tobbar from "../../modules/Tobbar";

// import aboutimg from "../../assets/images/aboutimg.png";
import aboutimg from "../../assets/images/aboutpage.svg";
import polygon from "../../assets/images/backgrounds/Polygon.svg";
import polygonFilled from "../../assets/images/backgrounds/PolygonFilled.svg";
// import polygon from "../../assets/images/backgrounds/Polygon.svg";

import CoreValues from "../../assets/images/grouping.svg";
import ourexpertise from "../../assets/images/ourVision.svg";
import sridharurl from "../../assets/images/sridhar.png";
import manoharurl from "../../assets/images/manohar.png";
import curve from "../../assets/images/companyvalues/curve.png";
import icon1 from "../../assets/images/companyvalues/icon1.png";
import icon2 from "../../assets/images/companyvalues/icon2.png";
import icon3 from "../../assets/images/companyvalues/icon3.png";
import icon5 from "../../assets/images/companyvalues/icon5.png";
import icon4 from "../../assets/images/companyvalues/icon4.png";
import Contact from "../../modules/Contact";
import { root } from "postcss";

import classNames from "classnames";

import linkedin from "../../assets/images/LinkedIn.svg";
import { handleScroll } from "../../utils/helper/HabdleScroll";
import Footer from "../footer/Footer";
import Values from "../../components/Values";

const eclipse = () => {
  return (
    <React.Fragment>
      <div className="w-full h-[200px] overflow-hidden">
        <div className="flex w-[200px] h-[200px] translate-x-[175px]">
          <div className=" flex w-full h-full bg-transparent border rounded-l-full relative justify-center items-center">
            <div className="absolute flex  top-0 left-16 -translate-x-[134px] z-50">
              <span className="text-white font-semibold text-l min-w-max text-[0.875em]">
                Customer Centric
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[25%] left-4 -translate-x-[80px] z-50">
              <span className="text-white font-semibold text-l text-[0.875em] ">
                Integrity
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[50%] left-[14px] -translate-x-[175px] z-50">
              <span className="text-white font-semibold text-l w-[150px] text-[0.875em]">
                Respect for Individual and People
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[75%] left-8 -translate-x-[94px] z-50">
              <span className="text-white font-semibold text-l text-[0.875em]">
                Leadership
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex bottom-0  left-[30%] -translate-x-[100px] z-50">
              <span className="text-white font-semibold text-l text-[0.875em]">
                Outperform
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>

            <div className="w-[50%] h-[50%] bg-[#2086FE] border rounded-l-full"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
function Index({ aboutConScrolling, setAboutConScrolling = () => {} }) {
  const gridItems = [
    {
      id: 1,
      name: "Our Mission",
      paragraph:
        "Our Mission is to create an ecosystem that invests in advanced technology, industry knowledge and the best people in order to provide quality solutions empowered with business knowledge that increases our clients’ success in highly competitive markets. ",
      imageurl: ourexpertise,
    },
    {
      id: 2,
      name: "Our Vision",
      paragraph:
        "Our Mission is to create an ecosystem that invests in advanced technology, industry knowledge and the best people in order to provide quality solutions empowered with business knowledge that increases our clients’ success in highly competitive markets.",
      imageurl: ourexpertise,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Sridhar Gadhi",
      role: "Founder and MD",
      sridharimage: sridharurl,
    },
    {
      id: 2,
      name: " Manohar Varanasi ",
      role: "Sr.Vice President, BizOps & Delivery",
      sridharimage: manoharurl,
    },
    {
      id: 3,
      name: "Sridhar Gadhi  ",
      role: "Sr.Vice President, BizOps & Delivery",
      sridharimage: sridharurl,
    },
    {
      id: 4,
      name: "Manohar Varanasi",
      role: "Founder and MD",
      sridharimage: manoharurl,
    },
  ];

  const handleAboutConScrollEnd = () => {
    // Set the flag to indicate that about-con has finished scrolling
    setAboutConScrolling(!aboutConScrolling);
  };

  return (
    <main
      id="about-con"
      onWheel={(e) => {
        const abt = document.getElementById("about-con");

        handleScroll(e, "about-con");
      }}
      className=" w-screen h-[94vh] overflow-y-hidden overflow-x-scroll scroll-smooth snap-x scrollbar-none grid grid-rows-[80px_calc(100%-80px)] grid-cols-1"
    >
      {/* <Tobbar /> */}
      <div className="h-[80px] w-full"></div>
      <div className="min-w-max h-full flex ">
        <div className="w-screen snap-center">
          <div className="w-full h-full grid grid-rows-1 grid-cols-1">
            <div className="flex px-10 gap-6">
              <div className="w-7/12 relative">
                <h1 className="text-[#2086FE] font-bold lg:text-2xl md:text-sm 2xl:text-4xl ">
                  WHO ARE WE
                </h1>
                <p className=" font-medium text-2xl text-justify mt-3">
                  Lines of businesses managed by multiple <br />
                  business units
                </p>
                <p className="mt-5 font-sans relative pb-8">
                  Lorem ipsum dolor sit amet. Aut dolorem maiores id consequatur
                  quasi hic adipisci iusto est minima distinctio! Ea repellendus
                  consectetur et numquam architecto cum aliquam quia. Et nostrum
                  reprehenderit ad tempora ratione non nisi cupiditate et
                  eligendi Quis et rerum enim et nesciunt consectetur ut tenetur
                  vitae.
                  <br />
                  Est deleniti laborum et eius aliquam id dolor perferendis et
                  doloribus quasi. Sit explicabo veritatis sit distinctio omnis
                  cum minima voluptas et quos nihil qui error saepe ea galisum
                  dolores aut eligendi nobis. Est odit unde qui architecto
                  dolores At saepe nihil eos voluptas corporis. Est odit earum
                  qui consequuntur deleniti qui enim incidunt in aperiam alias
                  vel velit tempora.
                  <div className="absolute bottom-0 w-[85%] flex justify-between">
                    <img
                      id="polygonHalo"
                      src={polygon}
                      className="aspect-square w-[40px]"
                    />
                    <img
                      id="polygonFilled"
                      src={polygonFilled}
                      className="aspect-square w-[50px] "
                    />
                  </div>
                </p>
              </div>
              <div className="w-5/12 p-5">
                <img
                  src={aboutimg}
                  alt="Image "
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen relative">
          <div className="absolute ml-auto mt-40 flex justify-center">
            <img src={curve} className="w-[70%] h-[40%]" alt="Curve"></img>
            <h1 className="font-bold absolute mt-56 text-2xl z-10">WHY US</h1>
          </div>

          <div className="relative top-0 left-[425px]">
            <Values
              data={{
                title: "INNOVATION",
                content:
                  "Innovate is at the core of our products and services and we leverage latest technologies. ",
              }}
              icon={icon3}
              className="  bg-white w-[60px] ml-12 h-[60px] p-1  rounded-full"
              index={0}
            />
          </div>
          <div className="relative left-[10px] bottom-[10px] mb-[-430px]  ">
            <Values
              data={{
                title: "OWNERSHIP",
                content:
                  "We take ownership and accountability of all projects we undertake & stand accountable for the deliverables . ",
              }}
              icon={icon1}
              className=" bg-white w-[60px] h-[60px] p-1  ml-32 rounded-full"
              index={1}
            />
          </div>
          <div className="relative left-[190px] top-[70px]   ">
            <Values
              data={{
                title: "EXPERIENCE",
                content:
                  "Decades of experience delivering products and solution to clients from small, medium and large enterprises.  ",
              }}
              icon={icon2}
              className=" bg-white w-[60px] ml-20 h-[60px] p-1  rounded-full"
              index={2}
            />
          </div>

          <div className=" flex justify-center right-[350px]  bottom-[250px] absolute ">
            <Values
              data={{
                title: "TRANSPERANCY",
                content:
                  "Proven expertise in products and solutions across multiple industries.   ",
              }}
              icon={icon4}
              className=" ml-[-30px]  bg-white w-[60px]  h-[60px] p-1  rounded-full"
              index={3}
            />
          </div>
          <div className=" flex justify-center right-[200px]  bottom-[110px] absolute ">
            <Values
              data={{
                title: " EXPERTISE",
                content:
                  "Proven expertise in products and solutions across multiple industries. ",
              }}
              icon={icon5}
              className=" ml-[-50px]  bg-white w-[60px]  h-[60px] p-1  rounded-full"
              index={4}
            />
          </div>
        </div>

        {/* <div className="w-screen ">
          <img src={curve} className="  items-center justify-center  flex  h-[60%]"></img>
          <h1 className="text-2xl font-bold absolute  flex  justify-center">WHY US</h1>
        </div> */}
        {/* 
        <div className="w-screen h-full p-5 snap-center">
          <img src={CoreValues} className="h-[85%] m-auto"></img>
        </div> */}

        <div className="w-screen h-full snap-center">
          <div className="text-center ">
            <h3 className="text-[#2086FE] text-xl"> Our Expertise</h3>
            {/* <p className="font-medium text-xl">
              25 Years of Experience in Business Consulting 
            </p>
           */}
          </div>
          <div>
            <img
              id="polygonFilled"
              src={polygonFilled}
              className="aspect-square w-[50px] opacity-1 -translate-y-[100px]"
            />
          </div>
          <div className="grid h-[90%] grid-cols-3 justify-items-center px-10 place-items-center items-end">
            {gridItems.map((item, index) => (
              <div
                key={item.id}
                className="relative group overflow-hidden transition-all duration-300 hover:-translate-y-4 h-[95%]"
                style={{ aspectRatio: 12 / 16 }}
              >
                <div
                  className={classNames("p-4 shadow-lg px-10", {
                    "bg-[#2086FE]": !(index % 2),
                    "border border-[#2086FE]": index % 2,
                  })}
                >
                  <h3
                    className={classNames("text-lg font-bold mb-2", {
                      "text-white": !(index % 2),
                      " text-[#2086FE]": index % 2,
                    })}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={classNames("text-sm", {
                      "text-white": !(index % 2),
                    })}
                  >
                    {item.paragraph}
                  </p>
                  <img src={item.imageurl} alt={item.name} className="mt-10" />
                </div>
              </div>
            ))}
            <div
              className="relative group overflow-hidden transition-all duration-300 hover:-translate-y-4 h-[90%]"
              style={{ aspectRatio: 12 / 16 }}
            >
              <div className="bg-[#2086FE] shadow-lg  text-white px-10 p-4 h-full max-h-[500px] flex flex-col">
                <h3 className="text-lg font-bold mb-2">Our Values</h3>
                <p className="text-white text-sm">
                  Our Vision is to become the world’s leading solutions
                  developer by accelerating growth of businesses through
                  innovative usage of technology
                </p>
                <p className="flex justify-end w-full h-full mt-3">
                  {eclipse()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-full snap-center">
          <div className="text-center ">
            <h1 className="font-medium text-xl"> We Have World Expert Team</h1>
            <p className="font-medium text-lg">
              We help businesses elevate their value through custom software{" "}
              <br /> development,product design, QA and consultancy services.
            </p>
          </div>
          <div className="">
            <div className="flex w-[90%] mx-auto mt-8 mb-20 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="group/item  relative group overflow-hidden transition-all duration-300 hover:scale-125 hover:translate-y-[12%] hover:last:-translate-x-2  hover:z-50 "
                >
                  <img
                    src={item.sridharimage}
                    alt={item.name}
                    className="grayscale group-hover:grayscale-0 animate-[filter]"
                  />
                  <div className="absolute bottom-0 text-white flex gap-2 ml-2 mb-2 visible group-hover/item:invisible">
                    <span className="bg-[#2086FE] px-2 py-4 mb-0"></span>
                    <div className="visible group-hover/item:invisible">
                      <h2
                        className="font-bold "
                        style={{ whiteSpace: "nowrap" }}
                      >
                        {item.name}
                      </h2>
                      <p className="" style={{ whiteSpace: "nowrap" }}>
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-[0.875em] text-white absolute left-4 w-[50%] bottom-10 h-fit bg-[#2086FE]  flex justify-start   invisible group-hover/item:visible">
                    <div className="flex flex-col h-fit p-3 gap-y-3">
                      <p className="text-[0.875em]"> {item.name}</p>
                      <p className="text-[0.75em]">
                        "Visionary with a great acumen to introduce new
                        Technologies to the world"
                      </p>
                      <span>
                        <img
                          src={linkedin}
                          width={20}
                          className={"aspect-square  shadow-lg"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
