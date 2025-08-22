import React from "react";
import Index from "./home";
import About from "./about";
import Service from "./services";
import Location from "./locations";
import { useEffect } from "react";
import useWindowDimensions from "../utils/hooks/useWindow";
import { useRef } from "react";
const Scroll = (props) => {
  const { width } = useWindowDimensions();
  const cont = useRef({});
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      window.document.addEventListener("scroll", ({ preventDefault }) => {
        preventDefault();
        window.scrollTo({ left: width * 0.6, behavior: "smooth" });
      });
    }
  }, []);
  return (
    <main
      onScroll={(e) => {
        console.log(e, cont.current);
        if (cont?.current) {
          cont.current.scrollTo({ left: width * 0.6, behavior: "smooth" });
        }
      }}
      className="w-screen h-screen overflow-y-hidden overflow-x-scroll scroll-smooth snap-x snap-center scrollbar-none"
    >
      <div ref={cont} className="flex min-w-max ">
        <div id="home" className="w-[100vw]  h-screen snap-x snap-center ">
          <Index />
        </div>
        <div id="about" className="w-[100vw]  h-screen snap-x snap-center ">
          <About />
        </div>
        <div id="services" className="w-[100vw]  h-screen snap-x snap-center">
          <Service />
        </div>
        {/* <div className="w-[100vw]  h-screen snap-x snap-center bg-lime-400"></div> */}
        <div id="sitemap" className="w-[100vw]  h-screen snap-x snap-center ">
          <Location />
        </div>
        {/* <div className="w-[100vw]  h-screen snap-x snap-center bg-orange-400"></div> */}
        {/* <div className="w-[100vw]  h-screen snap-x snap-center bg-indigo-400"></div> */}
      </div>
    </main>
  );
};

export default Scroll;
