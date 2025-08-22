import React, { useEffect } from "react";
import ownership from "../../../assets/images/mobileview/ownership.png";
import innovation from "../../../assets/images/mobileview/innovation.png";
import experence from "../../../assets/images/mobileview/experence.png";
import expertise from "../../../assets/images/mobileview/expertise.png";
import transperency from "../../../assets/images/mobileview/transperency.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CoreValues(props) {
  const values = [
    {
      id: 1,
      image: ownership,
      values: " OWNERSHIP",
      data: " We take ownership and accountability of all projects we undertake & stand accountable for the deliverables .",
    },
    {
      id: 2,
      image: innovation,
      values: " EXPERIENCE",
      data: " Decades of experience delivering products and solution to clients from small, medium and large enterprises.",
    },
    {
      id: 3,
      image: experence,
      values: " INNOVATION",
      data: " Innovate is at the core of our products and services and we leverage latest technologies.",
    },
    {
      id: 4,
      image: expertise,
      values: " TRANSPARENCY",
      data: " Open and honest communication internally and with our clients has been one of the foremost virtues at ParadigmIT.",
    },
    {
      id: 5,
      image: transperency,
      values: " EXPERTISE",
      data: " Proven expertise in products and solutions across multiple industries.",
    },
  ];
  useEffect(() => {
    gsap.utils.toArray(".slide-left, .slide-right").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          end: "bottom top+=100",
          scrub: true,
        },
        opacity: 0,
        x: element.classList.contains("slide-right") ? -100 : 100,
        duration: 2,
      });
    });
  }, []);
  return (
    <section className="w-screen h-screen overflow-hidden ">
      <div className="w-screen  relative h-screen">
        <div>
          <div className="text-center justify-center ">
            <h1 className="text-2xl text-[#2086FE] font-semibold ">Why Us?</h1>
            <p className="text-xl  font-semibold px-10">
              {" "}
              Lines of businesses managed by multiple business units
            </p>
          </div>
          <div>
            {values.map((item) => (
              <div
                key={item.id}
                className={`my-4 px-6 mt-5 flex items-center gap-2 ${
                  item.id === 2 || item.id === 4
                    ? "slide-right flex-row-reverse"
                    : "slide-left"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.values}
                  className="w-24 h-24   "
                />

                <div className="ml-3 ">
                  <div>
                    <h2
                      className={`text-xl font-semibold  ${
                        item.id === 2 || item.id === 4 ? "text-right" : ""
                      }`}
                    >
                      {item.values}
                    </h2>
                    <p className=" text-[#252D2D] text-lg text-justify">
                      {item.data}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <style>
        {`
            
@keyframes slide-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide-left {
  animation: slide-left 3s ease-in-out;
}

.slide-right {
  animation: slide-right 3s ease-in-out;
}
            `}
      </style> */}
    </section>
  );
}

export default CoreValues;
