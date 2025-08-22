import React from "react";
import curve from "../../assets/images/companyvalues/curve.png";
import icon1 from "../../assets/images/companyvalues/icon1.png";
import icon2 from "../../assets/images/companyvalues/icon2.png";
import icon3 from "../../assets/images/companyvalues/icon3.png";
import icon4 from "../../assets/images/companyvalues/icon4.png";
import icon5 from "../../assets/images/companyvalues/icon5.png";
import ownership from "../../assets/images/mobileview/ownership.png";
import innovation from "../../assets/images/mobileview/innovation.png";
import experence from "../../assets/images/mobileview/experence.png";
import expertise from "../../assets/images/mobileview/expertise.png";
import transperency from "../../assets/images/mobileview/transperency.png";
import Values from "../../components/Values";
import polygon from "../../assets/images/backgrounds/Polygon.svg";
import polygonFilled from "../../assets/images/backgrounds/PolygonFilled.svg";
import useWindowDimensions from "../../utils/hooks/useWindow";

function CoreValues(props) {
  const values = [
    {
      id: 1,
      image: ownership,
      values: "OWNERSHIP",
      data: "We take ownership and accountability of all projects we undertake & stand accountable for the deliverables.",
    },
    {
      id: 2,
      image: innovation,
      values: "EXPERIENCE",
      data: "Decades of experience delivering products and solutions to clients from small, medium, and large enterprises.",
    },
    {
      id: 3,
      image: experence,
      values: "INNOVATION",
      data: "Innovation is at the core of our products and services and we leverage the latest technologies.",
    },
    {
      id: 4,
      image: expertise,
      values: "TRANSPARENCY",
      data: "Open and honest communication internally and with our clients has been one of the foremost virtues at ParadigmIT.",
    },
    {
      id: 5,
      image: transperency,
      values: "EXPERTISE",
      data: "Proven expertise in products and solutions across multiple industries.",
    },
  ];

  const { width } = useWindowDimensions();
  return (
    <section className="w-screen h-screen">
      <div className="w-screen  relative h-screen">
        <div className="flex justify-center">
          <div className="absolute top-[40%] flex justify-center">
            <img src={curve} className="w-[70%] h-[40%]" alt="Curve" />
            <h1 className=" absolute lg:text-3xl mt-56 text-2xl">WHY US?</h1>
            <div className="flex absolute  left-[4.5%] bottom-[110%] w-[100%]">
              <div className="relative  top-72 right-11">
                <Values
                  data={{
                    title: "OWNERSHIP",
                    content:
                      "We take ownership and accountability of all projects we undertake & stand accountable for the deliverables.",
                    animationDelay: "2s",
                    contentClass: " font-bold"
                  }}
                  icon={icon1}
                  className="bg-white w-[60px] ml-32 h-[60px] p-1 rounded-full"
                />
              </div>
              <div className="relative top-28 right-8">
                <Values
                  data={{
                    title: "EXPERIENCE",
                    content:
                      "Decades of experience delivering products and solutions to clients from small, medium, and large enterprises.",
                    animationDelay: "3s",
                    contentClass: "font-bold"
                  }}
                  icon={icon2}
                  className="bg-white w-[60px] ml-16 h-[60px] p-1 rounded-full"
                />
              </div>
              <div className="relative top-24 left-7">
                <Values
                  data={{
                    title: "INNOVATION",
                    content:
                      "Innovation is at the core of our products and services and we leverage the latest technologies.",
                    animationDelay: "4s",
                    contentClass: "font-bold "
                  }}
                  icon={icon3}
                  className="bg-white w-[60px] ml-8 h-[60px] p-1 rounded-full"
                />
              </div>
              <div className="relative top-44 left-20">
                <Values
                  data={{
                    title: "EXPERTISE",
                    content:
                      "Proven expertise in products and solutions across multiple industries.",
                    animationDelay: "5s",
                    contentClass: "font-bold"
                  }}
                  icon={icon4}
                  className="bg-white w-[60px] h-[60px] p-1 rounded-full"
                />
              </div>
              <div className="relative top-72 left-12">
                <Values
                  data={{
                    title: "TRANSPARENCY",
                    content:
                      "Open and honest communication internally and with our clients has been one of the foremost virtues at ParadigmIT.",
                    animationDelay: "6s",
                    contentClass: "font-bold"
                  }}
                  icon={icon5}
                  className="bg-white w-[60px] ml-[-40px] h-[60px] p-1 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[85%] flex justify-around">
            <img
              id="polygonHalo"
              src={polygon}
              className="aspect-square w-[40px] mt-[-30%] opacity-0"
              alt="Polygon Halo"
            />
            <img
              id="polygonFilled"
              src={polygonFilled}
              className="aspect-square w-[55px] ml-[10%] mt-[47%] opacity-0 translate-y-6"
              alt="Polygon Filled"
            />
            <img
              id="polygonHalo"
              src={polygon}
              className="aspect-square w-[40px] mt-[-30%] opacity-0"
              alt="Polygon Halo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
