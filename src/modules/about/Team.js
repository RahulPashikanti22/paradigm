import React, { useRef } from "react";
import sridharurl from "../../assets/images/sridhar.png";
import manoharurl from "../../assets/images/manohar.png";

import srinivasurl from "../../assets/images/srinivas.png";
import siddeshurl from "../../assets/images/Siddesh.png";
import vijay from "../../assets/images/vijaykovuri.png";
import linkedin from "../../assets/images/LinkedIn.svg";
import nitisha from "../../assets/images/nitisha.jpg";
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
      image: sridharurl,
      adiitionalinfo:
        "Visionary with a great acumen to introduce new Technologies to the world",
      linkedin: "https://www.linkedin.com/in/sridhargadhi/",
    },
    {
      id: 2,
      name: "Manohar Varanasi",
      role: "Sr.Vice President, BizOps & Delivery​",
      image: manoharurl,
      adiitionalinfo:
        "A Leader who believes in Technology development for Human life betterment",
      linkedin: "https://www.linkedin.com/in/vm2017/",
    },
    // {
    //   id: 3,
    //   name: "Siddesh MV",
    //   role: "Practice Head Clinical Data Management",
    //   image: siddeshurl,
    //   adiitionalinfo:
    //     "Envisioning the Technology adoption in Clinical Research activities",
    //   linkedin: "https://www.linkedin.com/in/siddesh-mv-020a5622a/",
    // },
    {
      id: 4,
      name: "Srinivas Pothkanuri",
      role: "Associate Vice President – Professional Services",
      image: srinivasurl,
      adiitionalinfo:
        "A passionate leader to build the capabilities with focus on strategy and drive the execution",
      linkedin: "https://www.linkedin.com/in/spi8/",
    },
    {
      id: 5,
      name: "Vijay Kovvuri",
      role: "Director - IT infrastructure & Cloud services",
      image: vijay,
      adiitionalinfo:
        "An Evolutionary Leader Transforming Citizens Livelihood through creation and Digital Transformation",
      linkedin: "https://www.linkedin.com/in/vijay-kovvuri-bb74b812/",
    },
    {
      id: 6,
      name: "Nitisha Baalay",
      role: "HR Vice President",
      image: nitisha,
      adiitionalinfo:
        "An Evolutionary Leader Transforming Citizens Livelihood through creation and Digital Transformation",
      linkedin: "https://www.linkedin.com/in/nitisha-baalay/",
    },
  ];

  

  const handleLinkedInClick = (url) => {
    console.log("LinkedIn profile clicked:", url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <section
      id="about"
    
      className="w-screen h-[94vh] overflow-y-hidden overflow-x-scroll scroll-smooth snap-x scrollbar-none grid grid-rows-[80px_calc(100%-80px)] grid-cols-1"
    >
      <div className="h-[80px] w-full"></div>
      <div className="w-screen px-10 flex justify-center h-full snap-center flex-col gap-5">
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-medium 2xl:text-2xl lg:text-2xl ">
            We Have World Expert Team
          </h1>
          <p className="font-normal text-base ">
            We help businesses elevate their value through custom software{" "}
            <br /> development, product design, QA and consultancy services.
          </p>
        </div>

        <Slider {...settings} className="z-50 " ref={carouselRef}>
          {data.map((item, index) => (
            <div
              key={index}
              className="group/item relative cursor-pointer  group duration-100 h-[200px]"
            >
              <img 
                src={item.image}
                alt={item.name}
                className="grayscale transition-transform duration-100 animate-[filter] h-full w-[280px]"
              />
              {/* <div className="">
                <div>

                <h1 className="font-bold">{item.name}</h1>
                <p className="font-medium">{item.role}</p>
                </div>
              </div> */}
              <div className=" bottom-0 h-auto flex pr-2 flex-col gap-2 ml-2   ">
              
                    <h2 className="font-bold" style={{ whiteSpace: "nowrap", }}>
                      {item.name}
                    </h2>
                  <div className=" flex  w-full justify-between">
                    <div className="w-11/12">

                    <p className="break-words ">{item.role}</p>
                    </div>

                    <span onClick={() => handleLinkedInClick(item.linkedin)}>
                      <img
                        src={linkedin}
                        width={20}
                        alt=""
                        className={
                          "aspect-square shadow-lg cursor-pointer bg-[#2086FE]"
                        }
                      />
                    </span>
                 
               
                </div>
               
              </div>
              <div className="text-[0.875em]  left-4 w-[50%] bottom-10 h-fit  flex  ">
                <div className="flex  h-fit p-3 gap-y-3"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Team;
