import React, { useEffect, useRef, useState } from "react";
import aboutpage from "../../assets/images/aboutpage.svg";
import polygon from "../../assets/images/backgrounds/Polygon.svg";
import polygonFilled from "../../assets/images/backgrounds/PolygonFilled.svg";


import infraImage from "../../assets/images/backgrounds/infraImage.png";
import popupImage from "../../assets/images/backgrounds/Infrastructure.png";

import gsap from "gsap";

const x = ["CoreValues", "OurExpertises", "Team"];

function WhoWeAre(props) {
  const mainTagRef = useRef(null);
  const popupRef = useRef(null);
  const backdropRef = useRef(null);
  const tagWidth = 120;
  const gap = 10;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const mainTag = mainTagRef.current;
    const tags = mainTag.querySelectorAll(".tag");

    const tl = gsap.timeline({ paused: true });

    tl.to(tags, {
      x: (index) => `+=${(index + 1) * (tagWidth + gap)}`,
      duration: 0.5,
      ease: "power2.inOut",
    });

    mainTag.addEventListener("mouseenter", () => tl.play());
    mainTag.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      mainTag.removeEventListener("mouseenter", () => tl.play());
      mainTag.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  const onClick = (index = "") => {
    gsap.to(window, {
      scrollTo:
        1.17 * (index + 2) * document.getElementById("whoweare").offsetWidth,
      duration: 1,
    });
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      // Disable body scroll when popup is open
      document.body.style.overflow = "hidden";

      // Show the backdrop with a fade-in effect
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Popup entry animation: Scale and fade in
      gsap.fromTo(
        popupRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50, // Start slightly below
        },
        {
          opacity: 1,
          scale: 1,
          y: 0, // Move to its original position
          duration: 0.7,
          ease: "back.out(1.7)",
        }
      );
    } else {
      // Re-enable body scroll when popup is closed
      document.body.style.overflow = "auto";

      // Popup exit animation: Scale down and fade out
      gsap.to(popupRef.current, {
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 0.5,
        ease: "back.in(1.7)",
      });

      // Hide backdrop after the popup closes
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isPopupOpen]);

  return (
    <section
      id="about"
      className="w-screen h-[94vh] overflow-y-hidden overflow-x-scroll scroll-smooth snap-x scrollbar-none grid grid-rows-[80px_calc(100%-80px)] grid-cols-1"
    >
      <div className="h-[80px] w-full"></div>
      <div className="w-screen snap-center">
        <div className="w-full h-full grid grid-rows-1 ">
          <div className="flex px-10 gap-6">
            {/* Apply the hidden class here */}
            <div
              className={`w-[60%] lg:w-7/12 relative ${isPopupOpen ? 'hidden' : ''}`}
            >
              <h1 className="text-[#2086FE] lg:text-2xl 2xl:text-2xl font-bold text-xl ">
                WHO ARE WE
              </h1>
              <h1 className="2xl:text-3xl lg:text-xl pt-2">
                Lines of businesses managed by multiple <br />
                business units
              </h1>
              <div className="2xl:text-2xl font-nexa-regular text-lg md:text-sm pt-2 relative">
                <p>
                  ParadigmIT consists of multiple business units managing
                  different lines of businesses, delivering services in Clinical
                  Trial Services (i.e., CDM, Stats, MW), Application
                  Development/Maintenance, Large scale onsite deployment
                  projects (SI), Staffing, Staff Augmentation spread across
                  India & USA, e-Governance solutions in Central and State
                  Government, Cyber Security and Smart Agri-Tech in Government
                  and Enterprise sectors.
                </p>

                <br />
                <p>
                  Our Software development center is certified with CMMI Level 5
                  for development, ISO 9001, SOC 2 certifications and
                  State-of-the-art infrastructure with ISO 27001 Certified
                  Information Security Management, possessing for software
                  design and development activities
                </p>

                <br />
                <p>
                  Our flagship Clinical trial services practice under Life
                  sciences division offers solutions & services to global
                  Pharmaceutical, Biological, and Device organizations. For
                  their clinical trials EDC build, CDM process automations
                  focused on trial conduct phase for better quality and TAT in
                  data delivery.
                </p>
                <div className="absolute bottom-0 w-[85%] flex justify-between">
                  <img
                    id="polygonHalo"
                    src={polygon}
                    alt="Polygon"
                    className="aspect-square w-[40px] opacity-0 translate-y-16"
                  />
                  <img
                    id="polygonFilled"
                    src={polygonFilled}
                    alt="polygonFilled"
                    className="aspect-square w-[50px] opacity-1 -translate-y-[100px]"
                  />
                </div>
              </div>
              <div className="mt-6 s">
                <div className="relative flex" ref={mainTagRef}>
                  <div
                    className="group relative z-[99] bg-[#2068FE] text-white left-0 top-0 py-2 pr-2 leading-normal text-center rounded-full leading-1 aspect-video"
                    style={{
                      width: tagWidth,
                      paddingLeft: "8px",
                      height: "40px",
                    }}
                  >
                    About Us
                  </div>

                  <div className="flex">
                    {x.map((tag, index) => (
                      <div
                        key={index}
                        className={`tag text-white pr-2 cursor-pointer hover:bg-blue-500 absolute left-0 topx-0 bg-[#7BB7FD] ml-2 gap-2 pt-2 text-center rounded-full`}
                        style={{
                          width: tagWidth,
                          paddingLeft: "8px",
                          height: "40px",
                        }}
                        onClick={() => onClick(index)}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full flex font-nexa-regular items-end justify-end">
                <div
                  className="flex flex-col items-center cursor-pointer relative group"
                  onClick={togglePopup} // Toggle popup on click
                >
                  <img
                    src={infraImage}
                    alt="Arrow"
                    className="w-60 h-32 -mt-10 -mr-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-50"
                  />
                  <span className="mt-2 text-black text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                     Infrastructure
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[40%] p-5">
              <img
                src={aboutpage}
                alt="Image"
                className="w-full h-full fill-blue-400 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for the popup */}
      {isPopupOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Popup with enhanced GSAP animation */}
      {isPopupOpen && (
        <div
          ref={popupRef}
          className="fixed inset-0 flex items-center justify-center bg-white  z-50"
        >
          <div className="bg-white flex p-8 gap-2 rounded-lg max-w-[75vw] text-center">
            <img src={popupImage} alt="Infrastructure" />
            <button
              className="mt-60 bg-blue-500 text-white h-fit w-fit py-2 px-4 rounded"
              onClick={togglePopup} // Close popup
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default WhoWeAre;
