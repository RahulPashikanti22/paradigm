import classNames from "classnames";
import React from "react";
import ourexpertise from "../../../assets/images/ourVision.svg";


const eclipse = () => {
  return (
    <React.Fragment>
      <div className="w-full h-56 right-0 flex justify-end items-end ">
        <div className="flex  h-[90%]  items-end right-0 justify-end  2xl:w-[90%] 2xl:translate-x-[260px] 2xl:h-[300px] w-[70%] lg:translate-x-[180px] 3xl:translate-x-[150px] xl:h-[100%] xl:translate-x-[200px]">
          <div className="flex w-full  h-full bg-transparent border rounded-l-full relative justify-center items-center ">
            <div className="absolute flex  top-0 left-16 2xl:left-24 -translate-x-[134px] z-50">
              <span className="text-white font-semibold mr-1 text-l min-w-max text-[0.875em]">
                Customer Centric
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[22%] left-5 2xl:left-7 -translate-x-[80px] z-50">
              <span className="text-white  font-semibold mr-1 text-l xl:text-[0.875em] text-[0.875em] ">
                Integrity
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white  hover:scale-125 relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[48%] left-[14px] -translate-x-[175px] z-50">
              <span className="text-white font-semibold text-l w-[150px]  text-[0.875em]">
                Respect for Individual and People
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[70%] left-7 -translate-x-[94px] z-50">
              <span className="text-white font-semibold text-l mr-1 text-[0.875em]">
                Leadership
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125  relative flex justify-center items-center ">
                <div className="w-[13px] h-[13px] bg-white border  rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex bottom-[-6px] 2xl:left-[28%]    2xl:text-lg  lg:left-[34%] left-[24%]  -translate-x-[100px] z-50">
              <span className="text-white font-semibold  text-l mr-1  text-[0.875em]">
                Outperform
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125 relative flex justify-center items-center ">
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

function OurExpertises(props) {
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
        "Our Vision is to become the world’s leading solutions developer by accelerating growth of businesses through innovative usage of technology",
      imageurl: ourexpertise,
    },
  ];
  return (
    <section
      className="snap-x scrollbar-none  h-full items-center place-items-center grid grid-rows-[80px_calc(100%-80px-7vh)_7vh] grid-cols-1"
      style={{ overflowX: "hidden" }}
    >
      {/* <Tobbar /> */}
      <div className="h-[80px] w-full">
       
      </div>

      <div className=" h-full  scrollbar-none flex flex-col">
        <div className="text-center justify-center ">
          <h1 className="text-2xl font-bold text-[#2086FE]"> Our Expertise</h1>
          <p className="font-semibold text-lg">
            {" "}
            25 Years of Experience in Business Consulting
          </p>
        </div>
        <div className="w-screen h-screen mt-3 ">
          <div>
            {gridItems.map((item, index) => (
              <div
                className={classNames("p-6", {
                  "bg-[#2086FE]": !(index % 2),
                })}
              >
                <h1
                  className={classNames("text-lg font-bold mb-2  h-[20px]", {
                    "text-white": !(index % 2),
                    " text-black": index % 2,
                  })}
                >
                  {item.name}
                </h1>
                <p
                  className={classNames("text-sm ", {
                    "text-white": !(index % 2),
                  })}
                >
                  {item.paragraph}
                </p>
                <img src={item.imageurl} alt="Image Url" className="mt-3 pl-28"></img>
              </div>
            ))}
          </div>
          <div className="bg-[#2086FE] text-white p-6">
            <h1 className="text-lg font-bold mb-2"> Our Values</h1>
            <p>
              {" "}
              Our Values is to become the world’s leading solutions developer by
              accelerating growth of businesses through innovative usage of
              technology
            </p>
            <p className=" w-full h-full mt-10 ml-44 ">{eclipse()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExpertises;
