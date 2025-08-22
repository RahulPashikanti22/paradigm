import classNames from "classnames";
import React from "react";
import ourexpertise from "../../assets/images/ourVision.svg";
import Poly from "../../assets/images/backgrounds/Polygon.svg"
import polygonfeild from "../../assets/images/backgrounds/PolygonFilled.svg";
import useWindowDimensions from "../../utils/hooks/useWindow";


const eclipse = () => {
  return (
    <React.Fragment>
      <div className="w-full h-56">
        <div className="flex h-[90%] 2xl:w-[90%] 2xl:translate-x-[260px] 2xl:h-[300px] w-[70%] lg:translate-x-[180px] 3xl:translate-x-[150px] xl:h-[100%] xl:translate-x-[200px]">
          <div className="flex w-full h-full bg-transparent border rounded-l-full relative justify-center items-center">
            <div className="absolute flex top-0 left-20 2xl:left-28 -translate-x-[138px] z-50">
              <span className="text-white  mr-2 text-l min-w-max text-[0.825em]">
                Customer Centric
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125 relative flex justify-center items-center">
                <div className="w-[13px] h-[13px] bg-white border rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex mb:pl-20 top-[22%] left-6 2xl:left-7 -translate-x-[80px] z-50">
              <span className="text-white  mr-1 text-l xl:text-[0.875em] text-[0.825em]">
                Integrity
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125 relative flex justify-center items-center">
                <div className="w-[13px] h-[13px] bg-white border rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[48%] left-3  -translate-x-[175px] z-50">
              <span className="text-white  text-l w-[150px] text-[0.825em]">
                Respect for Individual and People
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125 relative flex justify-center items-center">
                <div className="w-[13px] h-[13px] bg-white border rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex top-[72%] left-8 -translate-x-[94px] z-50">
              <span className="text-white  text-l mr-1 text-[0.825em]">
                Leadership
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125 relative flex justify-center items-center">
                <div className="w-[13px] h-[13px] bg-white border rounded-full"></div>
              </div>
            </div>
            <div className="absolute flex -bottom-1 2xl:left-[28%] 2xl:text-lg   lg:left-[45%] left-[40%] -translate-x-[100px] z-50">
              <span className="text-white  text-l mr-1 text-[0.825em]">
                Outperform
              </span>
              <div className="w-[25px] h-[25px] border rounded-full border-white hover:scale-125 relative flex justify-center items-center">
                <div className="w-[13px] h-[13px] bg-white border rounded-full"></div>
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
  const { width } = useWindowDimensions();
  const gridItems = [
    {
      id: 1,
      name: "Our Mission",
      paragraph:
        "Our Mission is to create an ecosystem that invests in advanced technology, industry knowledge and the best people in order to provide quality solutions empowered with business knowledge that increases our clients’ success in highly competitive markets.",
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
    <section className="snap-x scrollbar-none h-full items-center place-items-center grid grid-rows-[80px_calc(100%-80px-7vh)_7vh] grid-cols-1">
      <div className="h-[80px] w-full"></div>
      <div className="w-screen h-full flex items-center">
        <div className="p-5 w-[25%] relative h-full text-center flex flex-col justify-center">
          <div className="absolute mb:pb-40">
            <h3 className="text-[#2086FE] text-2xl ">Our Expertise</h3>
            <p className="  text-lg">
              25 Years of Experience in Business Consulting
            </p>
          </div>
          <div className="relative">
            <div className="mb-72">
              <img
                id="polygonFilled"
                alt=""
                src={Poly}
                className="aspect-square absolute w-[50px] opacity-1 -translate-y-[100px]"
              />
            </div>
            <div className="pl-40">
              <img
                id="polygonFilled"
                alt=""
                src={polygonfeild}
                className="aspect-square absolute w-[50px] opacity-1 -translate-y-[100px]"
              />
            </div>
          </div>
        </div>
        {gridItems.map((item, index) => (
          <div
            key={item.id}
            className={classNames(
              "relative w-[25%] group overflow-hidden    mb:w-[25%] transition-all duration-300 h-[90%]  top-2 flex flex-col justify-center",
              {
                "bg-[#2086FE]": !(index % 2),
                "md:w-[33%] lg:w-[25%]": width >= 820 && width <= 1180,
              }
            )}
          >
            <div
              className={classNames("p-4 xl:p-4 px-10     h-fit flex flex-col", {
                "our-odd  ": !(index % 2),
                "our-even  ": index % 2,
              })}
            >
              <h3
                className={classNames("   mb-2 h-[28px]", {
                  "text-white lg:text-2xl ": !(index % 2),
                  "text-[#2086FE]  lg:text-2xl ": index % 2,
                })}
              >
                {item.name}
              </h3>
              <p
                className={classNames("text-sm h-[120px]", {
                  "text-white ": !(index % 2),
                })}
              >
                {item.paragraph}
              </p>
              <img src={item.imageurl} alt={item.name} className="mt-20 xl:mt-5 lg:pt-5" />
            </div>
          </div>
        ))}
        <div className="relative md:w-[50%]  lg:w-[27%] group overflow-hidden transition-all duration-300 bg-[#2086FE] h-[90%] top-2 flex flex-col justify-center">
          <div className="text-white px-6 md:px-10 h-fit flex flex-col our-odd">
            <h3 className="text-lg md:text-xl xl:text-xl 2xl:text-xl lg:text-2xl  md:mb-2 h-[28px]">
              Our Values
            </h3>
            <p className="text-white text-sm   h-[120px]">
              These values, which have been part of the group's beliefs and convictions from its inception, continue to guide and drive the business decisions of ParadigmIT.
            </p>
            <p className="w-full h-full  mt-3">{eclipse()}</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default OurExpertises;
