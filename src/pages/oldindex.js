import * as React from "react";

import Index from "../modules/home";

import Service from "../modules/services";
import Location from "../modules/locations";

import Contact from "../modules/Contact";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../modules/footer/Footer";
import WhoWeAre from "../modules/about/WhoWeAre";
import CoreValues from "../modules/about/CoreValues";
import OurExpertises from "../modules/about/OurExpertises";
import Team from "../modules/about/Team";
import Tobbar from "../modules/Tobbar";

const IndexPage = ({ path }) => {
  const [position, setPosition] = useState(0);
  const cont = React.useRef({});
  const main = React.useRef({});

  useEffect(() => {
    const m = document.getElementById("main-con");
    console.log(m.scrollLeft, "on main changed");
    setPosition(m.scrollLeft / m.clientWidth);
  }, []); // No dependency on main.current, since it's a ref and doesn't trigger re-renders
  

  return (
    <div className="grid grid-cols-1 w-screen h-screen m-0 p-0 overflow-hidden">
      <main
        ref={main}
        id="main-con"
        onWheel={(event) => {
          const container = document.querySelector("#main-con");
          const content = document.querySelector("#contentholder");
          const delta = event.deltaY || event.detail || -event.wheelDelta;
          const direction = Math.max(-1, Math.min(1, delta));

          // Adjust the scrolling speed by changing the value of 10
          const currentTransform = window.getComputedStyle(content).transform;
          const matrix = new DOMMatrix(currentTransform);
          console.log(
            "matrix.m41 - direction * 500",
            matrix.m41 - direction * container.clientWidth * 0.2
          );
          matrix.m41 =
            matrix.m41 - direction * container.clientWidth * 0.2 > 0
              ? 0
              : matrix.m41 - direction * container.clientWidth * 0.2 <
                -(container.scrollWidth - container.clientWidth)
              ? -(container.scrollWidth - container.clientWidth)
              : matrix.m41 - direction * container.clientWidth * 0.2;
          matrix.a = isFinite(matrix.a) ? matrix.a : 0;
          matrix.b = isFinite(matrix.b) ? matrix.b : 0;
          matrix.c = isFinite(matrix.c) ? matrix.c : 0;
          matrix.d = isFinite(matrix.d) ? matrix.d : 0;
          matrix.e = isFinite(matrix.e) ? matrix.e : 0;
          matrix.f = isFinite(matrix.f) ? matrix.f : 0;

          content.style.transform = matrix.toString();

          // Prevent the default scroll behavior
          event.preventDefault();
        }}
        className="w-screen h-screen overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-none snap-x snap-center"
      >
        <div
          id="contentholder"
          ref={cont}
          className="flex min-w-max transition-transform duration-300 ease-linear snap-x snap-center"
        >
          <div id="home" className="w-[100vw]  h-screen snap-x snap-center ">
            <Index position={position} setPosition={setPosition} />
          </div>
          <div
            id="whoweare"
            className="w-[100vw]  h-screen snap-x snap-center "
          >
            <WhoWeAre />
          </div>
          <div
            id="corevalues"
            className="w-[100vw]  h-screen snap-x snap-center "
          >
            <CoreValues />
          </div>
          <div
            id="ourexpertise"
            className="w-[100vw]  h-screen snap-x snap-center "
          >
            <OurExpertises />
          </div>
          <div id="team" className="w-[100vw]  h-screen snap-x snap-center ">
            <Team />
          </div>

          {/* <div id="about" className="w-[100vw]  h-screen snap-x snap-center ">
          <About
            aboutConScrolling={aboutConScrolling}
            setAboutConScrolling={setAboutConScrolling}
          />
        </div> */}
          <div id="services" className="w-[100vw]  h-screen snap-x snap-center">
            <Service />
          </div>
          {/* <div className="w-[100vw]  h-screen snap-x snap-center bg-lime-400"></div> */}
          <div
            id="locations"
            className="w-[100vw]  h-screen snap-x snap-center "
          >
            <Location />
          </div>
          {/* <div className="w-[100vw]  h-screen snap-x snap-center bg-orange-400"></div> */}
          {/* <div className="w-[100vw]  h-screen snap-x snap-center bg-indigo-400"></div> */}
        </div>
        <div className="absolute bottom-[12%] right-[2.5%]">
          <Contact />
        </div>
        <Footer />
      </main>
      <div className="w-full absolute top-[0%]">
        <Tobbar activeNode={position} setPosition={setPosition} />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
