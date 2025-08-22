import React, { useEffect, useState, useRef } from "react";

import Index from "../modules/home";
import Service from "../modules/services";


import Contact from "../modules/Contact";

import Footer from "../modules/footer/Footer";
import WhoWeAre from "../modules/about/WhoWeAre";
import CoreValues from "../modules/about/CoreValues";
import OurExpertises from "../modules/about/OurExpertises";
import Team from "../modules/about/Team";
import Tobbar from "../modules/Tobbar";

import gsap from "gsap";
import useWindowDimensions from "../utils/hooks/useWindow";
import IndexPageMobile from "./mobileView/index";
import MapLocations from "../modules/MapLocations";





const IndexPage = () => {
  const [position, setPosition] = useState(0);
  const [hideFooter, setHideFooter] = useState(false);
  const [scrollTween, setScrollTween] = useState(null);
  const component = useRef(null);
  const slider = useRef(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 648) {
      let ctx = gsap.context(() => {
        let panels = gsap.utils.toArray(".panel1"),
          navs = gsap.utils.toArray(".nav");

        let scrollTween = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + slider.current?.offsetWidth,
          },
        });

        panels.forEach((panel, i) =>
          gsap.to(navs[i], {
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panels[i],
              start: "center 80%",
              end: "center 40%",
              scrub: 2,
              containerAnimation: scrollTween,
              onEnter: () => {
                setPosition(i > 1 ? (i > 4 ? (i === 5 ? i - 3 : i - 1) : 1) : i);
                setHideFooter(i === 0 ? true : false);
              },
              onEnterBack: () => {
                setPosition(i > 1 ? (i > 4 ? (i === 5 ? i - 3 : i - 1) : 1) : i);
                setHideFooter(i === 0 ? true : false);
              },
            },
          })
        );

        setScrollTween(scrollTween);

        gsap.to("#polygonHalo", {
          opacity: 1,
          y: 0,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            trigger: "#whoweare",
            containerAnimation: scrollTween,
            start: "left 70% ",
            end: "left center",
            scrub: 2,
            toggleActions: "restart none reverse pause",
          },
        });

        gsap.to("#polygonFilled", {
          opacity: 1,
          y: -28,
          duration: 3,
          ease: "none",
          scrollTrigger: {
            trigger: "#whoweare",
            containerAnimation: scrollTween,
            start: "left 60% ",
            end: "left 0%",
            scrub: 2,
            toggleActions: "restart none reverse pause",
          },
        });

        const coreValueTL = gsap.timeline();
        if (coreValueTL.fromTo) {
          coreValueTL.fromTo(
            ".core-value",
            { transform: "translateY(5px) scale(0)", opacity: 0 },
            {
              duration: 1,
              transform: "translateY(0) scale(1)",
              opacity: 1,
              stagger: 0.5,
              scrollTrigger: {
                trigger: "#corevalues",
                start: "left 50%",
                end: "left 0%",
                containerAnimation: scrollTween,
                scrub: 2,
                toggleActions: "restart none reverse pause",
              },
            }
          );
        }

        gsap.fromTo(
          ".our-odd",
          { y: 50 },
          {
            y: -10,
            duration: 50,
            ease: "none",
            scrollTrigger: {
              trigger: "#OurExpertises",
              toggleActions: "restart none reverse pause",
              containerAnimation: scrollTween,
              start: "center 98%",
              end: "center 10%",
              scrub: 3,
            },
          }
        );

        gsap.fromTo(
          ".our-even",
          { y: -50 },
          {
            y: 10,
            duration: 50,
            ease: "none",
            scrollTrigger: {
              trigger: "#OurExpertises",
              toggleActions: "restart none reverse pause",
              containerAnimation: scrollTween,
              start: "center 98%",
              end: "center 10%",
              scrub: 3,
            },
          }
        );
      }, component);
      return () => ctx.revert();
    }
  }, [component, width]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const scrollAmount = 100;
      console.log(`Key pressed: ${event.key}`);
      
      if (slider.current) {
        switch (event?.key) {
          case "ArrowDown":
          case "ArrowRight":
            slider.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            break;
          case "ArrowUp":
          case "ArrowLeft":
            slider.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <main
      className="App scrollbar-none relative w-screen h-screen"
      ref={component}
    >
      {width > 648 ? (
        <div>
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
              className="panel1 h-screen w-screen flex justify-center items-center"
            >
              <OurExpertises />
            </div>
            <div className="panel1 h-screen w-screen flex justify-center items-center">
              <Team />
            </div>
            <div className="panel1 h-screen w-screen flex justify-center items-center">
              <Service />
            </div>
            <div className="panel1 h-screen w-screen flex justify-center items-center">
           
         <MapLocations  />
            </div>
          </div>
          <div className="fixed bottom-[5%] right-[2.5%]">
            <Contact />
          </div>
          <div className="w-full fixed top-[0%]">
            <Tobbar
              tween={scrollTween}
              activeNode={position}
              setPosition={setPosition}
            />
          </div>
          <Footer isHide={hideFooter} />
        </div>
      ) : (
        <IndexPageMobile />
      )}
    </main>
  );
};

export default IndexPage;

export const Head = () =>  <title>ParadigmIT</title>

 
