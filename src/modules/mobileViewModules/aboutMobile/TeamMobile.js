import React, { useRef } from "react";
import sridharurl from "../../assets/images/sridhar.png";
import manoharurl from "../../assets/images/manohar.png";
import Vikasurl from "../../assets/images/vikas.jpg";
import srinivasurl from "../../assets/images/srinivas.png";
import siddeshurl from "../../assets/images/Siddesh.png";
import vishnuurl from "../../assets/images/vishnu.jpeg";
import linkedin from "../../assets/images/LinkedIn.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Team(props) {
  const carouselRef = useRef(null);
  const data = [
    {
      id: 1,
      name: "Sridhar Gadhi",
      role: "Founder and MD",
      sridharimage: sridharurl,
      adiitionalinfo:
        "Visionary with a great acumen to introduce new Technologies to the world ",
    },

    {
      id: 2,
      name: "  Manohar Varanasi ",
      role: "Sr.Vice President, BizOps & Delivery​",
      sridharimage: manoharurl,
      adiitionalinfo:
        "A Leader who believes in Technology development for Human life betterment ",
    },
    {
      id: 3,
      name: "Siddesh MV",
      role: "Practice Head Clinical Data Management",
      sridharimage: siddeshurl,
      adiitionalinfo:
        "Envisioning the Technology adoption in Clinical Research activities ",
    },
    {
      id: 4,
      name: " Vishnu Varma K ",
      role: "Practice Lead - Cybersecurity",
      sridharimage: vishnuurl,
      adiitionalinfo:
        "On a quest to make cyber security accessible and affordable ",
    },

    {
      id: 5,
      name: " Vikas Nigam",
      role: " Vice President-Govt BU",
      sridharimage: Vikasurl,
      adiitionalinfo:
        " An Evolutionary Leader Transforming Citizens Livelihood through creation and Digital Transformation",
    },
    {
      id: 6,
      name: " Srinivas Pothkanuri",
      role: " Associate Vice President – Professional Services",
      sridharimage: srinivasurl,
      adiitionalinfo:
        " A passionate leader to build the capabilities with focus on strategy and drive the execution",
    },
    {
      id: 7,
      name: " Vijay Kovvuri",
      role: " Director - IT infrastructure & Cloud services",
      sridharimage: sridharurl,
      adiitionalinfo:
        "An Evolutionary Leader Transforming Citizens Livelihood through creation and Digital Transformation",
    },
  ];



  


  const handlePrevClick = () => {
    carouselRef.current.slidePrev();
    console.log("Prev");
  };
  const handleNextClick = () => {
    carouselRef.current.slideNext();
    console.log("Next");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const customArrowStyles = {
    color: "gray",
  };
  return (
    <section
      id="about"
      className=" w-screen h-[94vh]  overflow-y-hidden overflow-x-scroll scroll-smooth snap-x scrollbar-none grid grid-rows-[80px_calc(100%-80px)] grid-cols-1"
    >
      {/* <Tobbar /> */}
      <div className="h-[80px] w-full"></div>
      <div className="w-screen px-10 flex justify-center  h-full snap-center  flex-col gap-5">
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-medium 2xl:text-2xl lg:text-xl">
            We Have World Expert Team
          </h1>
          <p className="font-normal text-base">
            We help businesses elevate their value through custom software{" "}
            <br /> development,product design, QA and consultancy services.
          </p>
        </div>

        <Slider {...settings} className="z-50 mb-[50px] ">
          {data.map((item, index) => (
            <div
              key={index}
              className=" group/item relative  group  duration-300 h-[258.81px] "
            >
              <img
                src={item.sridharimage}
                alt={item.name}
                className="grayscale hover:scale-125  transition-all hover:z-50 hover:translate-y-10  group-hover:grayscale-0 animate-[filter] h-full w-full"
              />
              <div className="absolute bottom-0 text-white h-auto  flex gap-2 ml-2 mb-2 visible group-hover/item:invisible">
                <span className="bg-[#2086FE] px-2  py-4 mb-0"></span>
                <div className="visible group-hover/item:invisible">
                  <h2 className="font-bold " style={{ whiteSpace: "nowrap" }}>
                    {item.name}
                  </h2>
                  <p className="break-words">{item.role}</p>
                </div>
              </div>
              <div className="text-[0.875em] text-white absolute left-4 w-[50%] bottom-10 h-fit bg-[#2086FE]  flex justify-start   invisible group-hover/item:visible">
                <div className="flex flex-col h-fit p-3 gap-y-3">
                  <p className="text-[0.875em]"> {item.name}</p>
                  <p className="text-[0.75em]">{item.adiitionalinfo}</p>
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
        </Slider>
      </div>
    </section>
  );
}

export default Team;
