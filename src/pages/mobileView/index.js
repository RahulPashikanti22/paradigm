import React, { useState, useEffect, useRef } from "react";

import Index from "../../modules/mobileViewModules/homeMobile/index";
import Services from "../../modules/mobileViewModules/servicesMobile/index";
import WhoWeAre from "../../modules/mobileViewModules/aboutMobile/WhoWeAreMobile";
import CoreValues from "../../modules/mobileViewModules/aboutMobile/CoreValuesMobile";
import OurExpertises from "../../modules/mobileViewModules/aboutMobile/OurExpertiseMobile";
import Tobbar from "../../modules/Tobbar";
import Addresses from "../../modules/mobileViewModules/addressesMobile/Addresses";

const IndexPageMobile = () => {
  const [position, setPosition] = useState(0);
  const [scrollTween, setScrollTween] = useState(0); // Initial state for scrollTween
  const component = useRef({});
  const slider = useRef({});

  // Function to update scrollTween and position based on scroll
  const handleScroll = () => {
    if (slider.current) {
      const scrollPosition = slider.current.scrollLeft;
      const maxScroll = slider.current.scrollWidth - slider.current.clientWidth;
      const scrollProgress = scrollPosition / maxScroll;

      // Update scrollTween and position
      setScrollTween(scrollProgress);
      setPosition(scrollPosition / slider.current.clientWidth);
    }
  };

  // Add scroll event listener when the component mounts and clean up on unmount
  useEffect(() => {
    const sliderElement = slider.current;
    sliderElement.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      sliderElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="App scrollbar-none relative w-screen h-screen" ref={component}>
      <div
        ref={slider}
        id="wrapper"
        className="container flex flex-wrap md:flex-nowrap h-screen W-screen md:min-w-max w-fit"
      >
        <div className="description panel1 h-screen w-screen">
          <Index position={position} setPosition={setPosition} />
        </div>

        <div
          id="whoweare"
          className="panel1 h-screen w-screen flex justify-center items-center"
        >
          <WhoWeAre />
        </div>

        <div
          id="corevalues"
          className="panel1 h-screen w-screen flex justify-center items-center"
        >
          <CoreValues />
        </div>

        <div
          id="OurExpertises"
          className="panel1 h-fit w-screen flex justify-center items-center"
        >
          <OurExpertises />
        </div>

        <div className="panel1 h-screen w-screen flex justify-center items-center">
          <Services />
        </div>

        <div className="panel1 h-screen w-screen flex justify-center items-center">
          <Addresses />
        </div>
      </div>

      <div className="w-full fixed top-[0%]">
        <Tobbar
          tween={scrollTween} // Pass scrollTween as a prop to Tobbar
          activeNode={position} // Active node could be based on scroll or position
          setPosition={setPosition}
        />
      </div>
    </main>
  );
};

export default IndexPageMobile;

export const Head = () => <title>ParadigmIT</title>;
