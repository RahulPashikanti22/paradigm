import {  navigate } from "gatsby";
import React, { useState } from "react";

import logo from "../assets/images/logo.png";
import classNames from "classnames";
import gsap from "gsap";

import useWindowDimensions from "../utils/hooks/useWindow";
import alignJustify from "../assets/images/alignJustify.svg";
import plus from "../assets/images/mobileview/plus.png";
import cyber from "../assets/images/partners/Cyber.png";
import Pathsetter from "../assets/images/partners/Pathsetter.svg";

function Topbar({ activeNode = 0 }) {
  const { width } = useWindowDimensions();
  const nodes = [
    { key: "home", name: "Home", to: "#home" },
    { key: "about", name: "About Us", to: "#about" },
    { key: "services", name: "Services", to: "#services" },
    { key: "careers", name: "Careers", to: "https://paradigmit.keka.com/careers/" },
    { key: "posts", name: "Posts", to: "https://paradigmit.com/blogs/" },
    { key: "locations", name: "Locations", to: "#locations" },
  ];

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const onClick = (index = "") => {
    const x = index.includes("home")
      ? 0
      : index.includes("about")
      ? 1.18
      : index.includes("services")
      ? 5.833
      : index.includes("locations")
      ? 7
      : 0;

    if (index.startsWith("#")) {
      gsap.to(window, {
        scrollTo: x * document.getElementById("whoweare").offsetWidth,
        duration: 1,
      });
    } else {
      navigate(index);
    }
  };

  return (
    <div className="flex relative w-full">
      <div className="left-0 top-0 flex items-center">
        <img src={logo} width={width > 1024 ? 320 : 200} height={70} alt="logo" />
      </div>

      {width > 638 ? (
        <ul className="flex gap-3 2xl:items-center 2xl:justify-center 2xl:text-2xl text-lg items-center w-full">
          {nodes.map((node, i) => (
            <div className="nav cursor-pointer" onClick={() => onClick(node.to)} key={node.key}>
              <li>
                <div className="flex 2xl:items-center items-center gap-3">
                  <span
                    className={classNames("uppercase hover:text-[#2086fe]", {
                      "text-[#2086fe]": activeNode === i,
                    })}
                  >
                    {node.name}
                  </span>
                  {i < nodes.length - 1 && (
                    <span className="bg-[#2086fe] h-[2px] w-[31px]"></span>
                  )}
                </div>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <div className="w-full h-full py-4 flex justify-end">
          <div onClick={toggleDropdown}>
            {isDropdownVisible ? (
              <div className="bg-white pr-6 h-screen pt-12 cursor-pointer flex flex-col justify-items-end w-screen gap-3">
                <button onClick={closeDropdown} className="absolute top-6 right-8 cursor-pointer">
                  <img src={plus} width={50} height={50} alt="close menu" />
                </button>
                <h1 className="flex text-3xl justify-center mt-20">Menu</h1>
                {nodes.map((node) => (
                  <a
                    key={node.key}
                    href={node.to}
                    className="mt-6 hover:text[#2086FE] justify-center flex text-2xl"
                  >
                    {node.name}
                  </a>
                ))}
              </div>
            ) : (
              <div>
                
                <img
                  src={alignJustify}
                  alt="menu"
                  width={30}
                  height={30}
                  className="mt-5 mr-5"
                />
                 <div className="justify-cente flex flex-col xl:top-10 2xl:justify-end 2xl:items-end 2xl:left-[22%] top-[45%] absolute gap-3 right-14 items-center">
          <div className="flex flex-col gap-2 items-center">
            <a href="https://paradigmitcyber.com/" target="_blank" rel="noreferrer">
              <img src={cyber} width={width > 1024 ? 120 : 100} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://pathsetter.ai/" target="_blank" rel="noreferrer">
              <img src={Pathsetter} width={width > 1024 ? 120 : 100} />
            </a>
          </div>
        </div>
              </div>
            )}
          </div>
        </div>
      )}

      {width  >= 638 && (
        <div className="justify-cente flex flex-col xl:top-10 2xl:justify-end 2xl:items-end 2xl:left-[22%] top-[45%] absolute gap-3 right-14 items-center">
          <div className="flex flex-col gap-2 items-center">
            <a href="https://paradigmitcyber.com/" target="_blank" rel="noreferrer">
              <img src={cyber} width={width > 1024 ? 120 : 100} />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://pathsetter.ai/" target="_blank" rel="noreferrer">
              <img src={Pathsetter} width={width > 1024 ? 120 : 100} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;
