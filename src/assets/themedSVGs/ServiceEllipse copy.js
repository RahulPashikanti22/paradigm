import classNames from "classnames";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function ServiceEllipse({
  services = [],
  activeIndex = "",
  setActiveIndex = () => {},
}) {
  const [_services, setServices] = useState([]);
  useEffect(() => {
    setServices([]);
    let ser = services;
    if (services.length < 5)
      ser.splice(0, 0, { key: "NOACTION" }, { key: "NOACTION" });

    let ci = ser.findIndex((s) => s.key === activeIndex);
    console.log(
      ser.findIndex((s) => s.key === activeIndex),
      activeIndex
    );
    if (ser.length >= 3)
      while (ci !== 2) {
        let s = ser.shift();
        console.log(s, "firstelemnt");
        console.log("remain", ser);
        ser.splice(ser.length, 0, s);

        console.log(
          "after",
          ser,
          ser.findIndex((s) => s.key === activeIndex)
        );
        ci = ser.findIndex((s) => s.key === activeIndex);
      }

    setServices(ser.map((obj, index) => ({ ...obj, index })));
  }, [activeIndex]);

  // const servs = useMemo(() => _services, [_services]);

  // services?.length >= 3
  //   ?
  const circlePositions = [
    {
      key: 1,
      cx: "389",
      cy: "132",
    },
    {
      key: 2,
      cx: "499",
      cy: "114",
    },
    {
      key: 3,
      cx: "634",
      cy: "137",
    },
    {
      key: 4,
      cx: "737",
      cy: "253",
    },
    {
      key: 5,
      cx: "684",
      cy: "431",
    },
    {
      key: 6,
      cx: "550",
      cy: "549",
    },
    {
      key: 7,
      cx: "404",
      cy: "609",
    },
  ];
  // : services.length == 2
  // ? [
  //     {
  //       key: 2,
  //       cx: "499",
  //       cy: "114",
  //     },
  //     {
  //       key: 3,
  //       cx: "634",
  //       cy: "137",
  //     },
  //   ]
  // : [
  //     {
  //       key: 2,
  //       cx: "499",
  //       cy: "114",
  //     },
  //     ,
  //   ];
  return (
    <svg
      style={{ maxHeight: "95%" }}
      width="180%"
      // height="735"
      viewBox="0 0 826 735"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="textpath"
        d="M644.5 117H1003H1055"
        stroke="transparent"
        strokeWidth="2"
      />
      <path
        d="M720.132 211.222C746.455 257.912 743.984 321.235 710.618 385.936C677.268 450.608 613.098 516.521 516.339 568.152C405.445 617.822 317.541 632.51 249.296 620.428C181.119 608.359 132.382 569.543 99.8067 511.763C67.3589 454.21 73.8186 394.037 109.626 336.187C145.475 278.27 210.718 222.756 295.622 174.888C380.413 127.084 470.368 107.336 547.221 113.985C624.082 120.635 687.677 153.656 720.132 211.222Z"
        stroke="#2086FE"
        strokeWidth="3"
      />
      <path
        d="M668.193 224.77C708.5 307 668.193 419.5 528.5 506.513C385.856 586.934 201.688 604.783 151.633 516C101.578 427.217 176.636 290.049 319.28 209.628C461.924 129.207 618.138 135.987 668.193 224.77Z"
        fill="#EBF4FF"
      />
      <path
        id="path1"
        d="M380.5 250H400H650.75" //117H1003H1055
        stroke="transparent"
        strokeWidth="2"
      />
      <path
        id="KEY-1"
        d={`M367  ${_services.at(0)?.name?.split(" ")?.length > 1 ? 72 : 100}H${
          367 + 108
        }`}
        stroke="transparent"
      />
      <path
        id="KEY-2"
        d={`M${499} ${_services.at(1)?.name?.length > 15 ? 50 : 108}H5${
          499 + 108
        }`}
        stroke="transparent"
      />
      <path id="KEY-4" d={`M755 237H${755 + 108}`} stroke="transparent" />
      <path id="KEY-5" d={`M714 431H${714 + 108}`} stroke="transparent" />
      <path id="KEY-6" d={`M585 549H${585 + 108}`} stroke="transparent" />
      <path id="KEY-7" d={`M413 623H${418 + 108}`} stroke="transparent" />
      <text
        fill="#252d2d"
        // textAnchor="end"
        className="font-medium  text-right max-w-[50%]"
      >
        <textPath xlinkHref="#path1">
          <tspan x="4%" dy="1.2em" className="text-right">
            Lorem ipsum is placeholder text
          </tspan>
          <tspan x="2%" dy="1.2em" className="text-right">
            commonly used in the graphic and
          </tspan>
          <tspan x="1%" dy="1.2em" className="text-right">
            publishing industries for previewing
          </tspan>
          <tspan x="8%" dy="1.2em" className="text-right">
            layouts and visual mockups.
          </tspan>
        </textPath>
      </text>
      {_services.map((service, index) => {
        console.log("service", service.name);
        return [
          <circle
            onClick={() => {
              if (service.key !== "NOACTION") setActiveIndex(service.key);
            }}
            style={{ cursor: "pointer" }}
            key={service.key}
            id={service.key}
            className={classNames("relative cursor-pointer")}
            cx={circlePositions.find((cp, i) => cp.key === index + 1)?.cx}
            cy={circlePositions.find((cp, i) => cp.key === index + 1)?.cy}
            r="7.5"
            fill="#2086FE"
            stroke="white"
            strokeWidth="3"
          />,
          index === 2 ? (
            <text
              onClick={() => {
                if (service.key !== "NOACTION") setActiveIndex(service.key);
              }}
              className={classNames("font-semibold", {
                "pointer-events-none cursor-not-allowed":
                  service.key === "NOACTION",
                "cursor-pointer": service.key !== "NOACTION",
              })}
              fill="#2086FE"
              style={{
                fontSize: service?.name?.length > 22 ? "1rem" : "2rem",
                cursor: service.key !== "NOACTION" ? "pointer" : "not-allowed",
                pointerEvents: service.key !== "NOACTION" ? "none" : "all",
              }}
            >
              <textPath xlinkHref="#textpath">
                {service?.name}

                <animate
                  attributeName="startOffset"
                  from="100%"
                  to="0%"
                  begin="0s"
                  dur="5s"
                  // repeatCount="indefinite"
                  keyTimes="0;1"
                  calcMode="spline"
                  keySplines="0.1 0.2 .22 1"
                />
              </textPath>
            </text>
          ) : (
            <text
              className={classNames("-translate-x-4", {
                "pointer-events-none cursor-not-allowed":
                  service.key === "NOACTION",
                "cursor-pointer": service.key !== "NOACTION",
              })}
              fill="#252d2d"
              style={{
                cursor: service.key !== "NOACTION" ? "pointer" : "not-allowed",
                pointerEvents: service.key !== "NOACTION" ? "none" : "all",
              }}
              onClick={() => {
                if (service.key !== "NOACTION") setActiveIndex(service.key);
              }}
            >
              <textPath xlinkHref={`#KEY-${index + 1}`}>
                {service.name?.length > 12
                  ? service?.name?.split(" ")?.map((t) => (
                      <tspan x="0%" dy="1.2em">
                        {t}
                      </tspan>
                    ))
                  : service.name}
              </textPath>
            </text>
          ),
        ];
      })}
      <circle
        cx="626"
        cy="151"
        r="5.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
        visibility="hidden"
      >
        <animate
          attributeName="visibility"
          from="hidden"
          to="visible"
          begin="2s"
          dur="1s"
          // repeatCount=""
          keyTimes="0;1"
          calcMode="spline"
          keySplines="0.1 0.2 .22 1"
          end={"3s"}
          fill="freeze"
        />
      </circle>
      <circle
        cx="619"
        cy="163"
        r="4.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
        visibility="hidden"
      >
        <animate
          attributeName="visibility"
          from="hidden"
          to="visible"
          begin="3s"
          dur="1s"
          repeatCount="1"
          keyTimes="0;1"
          calcMode="spline"
          keySplines="0.1 0.2 .22 1"
          // end={"3s"}
          fill="freeze"
        />
      </circle>
      <circle
        cx="613"
        cy="173"
        r="3.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
        visibility="hidden"
      >
        <animate
          attributeName="visibility"
          from="hidden"
          to="visible"
          begin="4s"
          dur="1s"
          repeatCount="1"
          keyTimes="0;1"
          calcMode="spline"
          keySplines="0.1 0.2 .22 1"
          // end={"3s"}
          fill="freeze"
        />
      </circle>
      {/* <circle
        cx="499"
        cy="114"
        r="7.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="389"
        cy="132"
        r="7.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="634"
        cy="137"
        r="7.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="626"
        cy="151"
        r="5.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="619"
        cy="163"
        r="4.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="613"
        cy="173"
        r="3.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="737"
        cy="253"
        r="7.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="684"
        cy="431"
        r="7.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="550"
        cy="549"
        r="7.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      />
      <circle
        cx="404"
        cy="609"
        r="7.5"
        fill="#2086FE"
        stroke="white"
        strokeWidth="3"
      /> */}
      {/* <path
        d="M419.146 465.248V482H415.786V474.872H408.61V482H405.25V465.248H408.61V472.136H415.786V465.248H419.146ZM430.229 482.168C428.661 482.168 427.221 481.8 425.909 481.064C424.597 480.328 423.557 479.312 422.789 478.016C422.021 476.704 421.637 475.224 421.637 473.576C421.637 471.944 422.021 470.48 422.789 469.184C423.557 467.872 424.597 466.848 425.909 466.112C427.221 465.376 428.661 465.008 430.229 465.008C431.813 465.008 433.253 465.376 434.549 466.112C435.861 466.848 436.893 467.872 437.645 469.184C438.413 470.48 438.797 471.944 438.797 473.576C438.797 475.224 438.413 476.704 437.645 478.016C436.893 479.312 435.861 480.328 434.549 481.064C433.237 481.8 431.797 482.168 430.229 482.168ZM430.229 479.168C431.237 479.168 432.125 478.944 432.893 478.496C433.661 478.032 434.261 477.376 434.693 476.528C435.125 475.68 435.341 474.696 435.341 473.576C435.341 472.456 435.125 471.48 434.693 470.648C434.261 469.8 433.661 469.152 432.893 468.704C432.125 468.256 431.237 468.032 430.229 468.032C429.221 468.032 428.325 468.256 427.541 468.704C426.773 469.152 426.173 469.8 425.741 470.648C425.309 471.48 425.093 472.456 425.093 473.576C425.093 474.696 425.309 475.68 425.741 476.528C426.173 477.376 426.773 478.032 427.541 478.496C428.325 478.944 429.221 479.168 430.229 479.168ZM459.561 465.248V482H456.201V471.104L451.713 482H449.169L444.657 471.104V482H441.297V465.248H445.113L450.441 477.704L455.769 465.248H459.561ZM466.243 467.96V472.16H471.883V474.824H466.243V479.264H472.603V482H462.883V465.224H472.603V467.96H466.243Z"
        fill="#0E7DFF"
      /> */}
    </svg>

    // <svg
    //   width="494"
    //   height="441"
    //   viewBox="185.25 55.125 494 441"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M430.313 127.375C445.918 155.053 444.496 192.679 424.616 231.231C404.75 269.753 366.5 309.065 308.764 339.878C242.546 369.535 190.14 378.264 149.518 371.073C108.966 363.893 79.9797 340.817 60.5872 306.42C41.322 272.249 45.1321 236.52 66.444 202.089C87.7972 167.591 126.697 134.472 177.4 105.887C227.988 77.3652 281.635 65.5971 327.435 69.5596C373.244 73.5229 411.04 93.1909 430.313 127.375Z"
    //     stroke="#2086FE"
    //     strokeWidth="3"
    //     id="rotatePath"
    //   />
    //   <path
    //     d="M399.794 135.176C423.886 184.326 399.794 251.569 316.297 303.578C231.037 351.647 120.957 362.316 91.0385 309.249C61.12 256.181 105.983 174.195 191.244 126.126C276.504 78.0572 369.875 82.1093 399.794 135.176Z"
    //     fill="#EBF4FF"
    //   />

    //   <g>
    //     <use href="#rotatePath" />
    //     <circle fill="#2086FE" r={9} rotate={-90} stroke="#fff" strokeWidth={3}>
    //       <animateMotion
    //         dur="100000000000000000000000000000000000s"
    //         repeatCount="indefinite"
    //         rotate="45"
    //         direction={"anticlock"}
    //         begin={"click"}
    //       >
    //         <mpath href="#rotatePath" />
    //       </animateMotion>
    //     </circle>
    //   </g>
    //   <g>
    //     <use href="#rotatePath" />
    //     <circle fill="#2086FE" r={9} stroke="#fff" strokeWidth={3}>
    //       <animateMotion dur="100s" repeatCount="indefinite" rotate="45">
    //         <mpath href="#rotatePath" />
    //       </animateMotion>
    //     </circle>
    //   </g>
    // </svg>
  );
}

export default ServiceEllipse;
