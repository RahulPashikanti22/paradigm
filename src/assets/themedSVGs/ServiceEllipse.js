import classNames from "classnames";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { splitLines } from "../../utils/helper/splitLines";

function ServiceEllipse({
  services = [],
  activeIndex = "",
  setActiveIndex = () => {},
  onBack = () => {},
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

    // if (ser.length >= 3)
    //   while (ci !== 2) {
    //     let s = ser.shift();
    //     console.log(s, "firstelemnt");
    //     console.log("remain", ser);
    //     ser.splice(ser.length, 0, s);

    //     console.log(
    //       "after",
    //       ser,
    //       ser.findIndex((s) => s.key === activeIndex)
    //     );
    //     ci = ser.findIndex((s) => s.key === activeIndex);
    //   }

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

  const innerCirclePositions = [
    {
      key: 1,
      properties: [
        {
          cx: 388.87,
          cy: 148.745,
          r: 5.5,
          transform: "rotate(-34.8545 388.87 148.745)",
        },
        {
          cx: 389.983,
          cy: 162.592,
          r: 4.5,
          transform: "rotate(-34.8545 389.983 162.592)",
        },
        {
          cx: 390.775,
          cy: 174.227,
          r: 3.5,
          transform: "rotate(-34.8545 390.775 174.227)",
        },
      ],
    },

    {
      key: 2,
      properties: [
        {
          cx: 496.814,
          cy: 130.07,
          r: 5.5,
          transform: "rotate(-25.5231 496.814 130.07)",
        },
        {
          cx: 495.667,
          cy: 143.915,
          r: 4.5,
          transform: "rotate(-25.5231 495.667 143.915)",
        },
        {
          cx: 494.562,
          cy: 155.524,
          r: 3.5,
          transform: "rotate(-25.5231 494.562 155.524)",
        },
      ],
    },

    {
      key: 3,
      properties: [
        {
          cx: 626,
          cy: 151,
          r: 5.5,
          transform: "",
        },
        {
          cx: 619,
          cy: 163,
          r: 4.5,
          transform: "",
        },
        {
          cx: 613,
          cy: 173,
          r: 3.5,
          transform: "",
        },
      ],
    },
    {
      key: 4,
      properties: [
        {
          cx: 717.748,
          cy: 258.803,
          r: 5.5,
          transform: "rotate(36.9916 717.748 258.803)",
        },
        {
          cx: 704.936,
          cy: 264.176,
          r: 4.5,
          transform: "rotate(36.9916 704.936 264.176)",
        },
        {
          cx: 694.127,
          cy: 268.553,
          r: 3.5,
          transform: "rotate(36.9916 694.127 268.553)",
        },
      ],
    },
    {
      key: 5,
      properties: [
        {
          cx: 666.973,
          cy: 420.493,
          r: 5.5,
          transform: "rotate(91.0537 666.973 420.493)",
        },
        {
          cx: 655.104,
          cy: 413.274,
          r: 4.5,
          transform: "rotate(91.0537 655.104 413.274)",
        },
        {
          cx: 645.216,
          cy: 407.091,
          r: 3.5,
          transform: "rotate(91.0537 645.216 407.091)",
        },
      ],
    },
    {
      key: 6,
      properties: [
        {
          cx: 539.174,
          cy: 532.596,
          r: 5.5,
          transform: "rotate(118.102 539.174 532.596)",
        },
        {
          cx: 531.886,
          cy: 520.769,
          r: 4.5,
          transform: "rotate(118.102 531.886 520.769)",
        },
        {
          cx: 525.891,
          cy: 510.766,
          r: 3.5,
          transform: " rotate(118.102 525.891 510.766)",
        },
      ],
    },
    {
      key: 7,
      properties: [
        {
          cx: 397.761,
          cy: 591.767,
          r: 5.5,
          transform: "rotate(134.535 397.761 591.767)",
        },
        {
          cx: 394.116,
          cy: 578.361,
          r: 4.5,
          transform: "rotate(134.535 394.116 578.361)",
        },
        {
          cx: 391.071,
          cy: 567.071,
          r: 3.5,
          transform: "rotate(134.535 391.071 567.071)",
        },

        /*  <circle
        
        fill="#2086FE"
        stroke="white"
        stroke-width="3"
      />
      <circle
        
        fill="#2086FE"
        stroke="white"
        stroke-width="3"
      />
      <circle
        
        fill="#2086FE"
        stroke="white"
        stroke-width="3"
      /> */
      ],
    },
  ];

  const pathD = useMemo(() => {
    const postition = services.findIndex((ser) => ser.key === activeIndex);
    const cx =
      parseInt(
        circlePositions.find((ser) => ser.key === postition + 1)?.cx || 0
      ) + (postition < 3 ? 15 : postition > 4 ? 0 : 40);
    const cy =
      parseInt(
        circlePositions.find((ser) => ser.key === postition + 1)?.cy || 0
      ) - (postition < 3 ? 40 : postition > 4 ? -20 : 25);
    console.log("pathD", postition, cx);
    return `M${cx} ${cy}H1003H1055`;
  }, [activeIndex]);
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
      <path id="textpath" d={pathD} stroke="transparent" strokeWidth="2" />
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
        d={`M${499} ${_services.at(1)?.name?.length > 15 ? 50 : 90}H5${
          499 + 108
        }`}
        stroke="transparent"
      />
      <path
        id="KEY-3"
        d={`M${644} ${_services.at(2)?.name?.length > 15 ? 50 : 108}H5${
          644 + 108
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
        <textPath xlinkHref="#path1"></textPath>
      </text>
      {_services.map((service, index) => {
        console.log("service", service.name);
        return service.key !== "NOACTION"
          ? [
              <circle
                onClick={() => {
                  setActiveIndex(service.key);
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
              service.key === activeIndex ? (
                <text
                  onClick={() => {
                    setActiveIndex(service.key);
                  }}
                  className={classNames("font-semibold cursor-pointer", {})}
                  fill="#2086FE"
                  style={{
                    fontSize:
                      "1.25rem" /* service?.name?.length > 22 ? "1.5rem" : "2rem" */,
                    cursor: "pointer",
                  }}
                >
                  <textPath xlinkHref="#path1">
                    {splitLines(service?.name || "", 28).map((s) => (
                      <tspan x="0%" dy="1.5em">
                        {s}
                      </tspan>
                    ))}
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
                  className={classNames("-translate-x-4", {})}
                  fill="#252d2d"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setActiveIndex(service.key);
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
            ]
          : null;
      })}
      {/* <circle
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
      </circle> */}

      {innerCirclePositions.map((cp) => {
        const i = services.findIndex((ser) => ser.key === activeIndex);
        return cp.key === i + 1
          ? cp.properties.map((cip, ii) => (
              <circle
                key={`innercircle-${i}-${ii}`}
                cx={cip.cx}
                cy={cip.cy}
                r={cip.r}
                transform={cip.transform}
                fill="#2086FE"
                stroke="white"
                stroke-width="3"
              >
                <animate
                  attributeName="visibility"
                  from="hidden"
                  to="visible"
                  begin={`${ii + 2}s`}
                  dur="1s"
                  repeatCount="1"
                  keyTimes="0;1"
                  calcMode="spline"
                  keySplines="0.1 0.2 .22 1"
                  end={`${ii + 3}s`}
                  fill="freeze"
                />
              </circle>
            ))
          : null;
      })}

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
      {onBack && onBack !== null && onBack !== undefined ? (
        <React.Fragment>
          <g
            style={{ cursor: "pointer" }}
            onClick={() => onBack()}
            id="Group 227"
            filter="url(#filter0_d_0_1)"
          >
            <path
              id="Polygon 1"
              d="M395.5 395.022C393.5 393.867 393.5 390.98 395.5 389.826L417.008 377.408C419.008 376.253 421.508 377.696 421.508 380.006V404.842C421.508 407.151 419.008 408.594 417.008 407.44L395.5 395.022Z"
              fill="#2086FE"
            />
            <path
              id="Polygon 2"
              d="M404.653 395.022C402.653 393.867 402.653 390.98 404.653 389.826L433.788 373.004C435.788 371.85 438.288 373.293 438.288 375.602V409.245C438.288 411.555 435.788 412.998 433.788 411.843L404.653 395.022Z"
              fill="#8BB9F1"
            />
          </g>

          <defs>
            <filter
              id="filter0_d_0_1"
              x="390"
              y="372.598"
              width="52.2881"
              height="47.6518"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.545098 0 0 0 0 0.72549 0 0 0 0 0.945098 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>

          <text
            style={{ cursor: "pointer" }}
            onClick={() => onBack()}
            id="HOME"
            fill="#252D2D"
            xmlSpace="preserve"
            // style="white-space: pre"
            fontFamily="Poppins"
            fontSize="12"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="401.254" y="428.2">
              Back
            </tspan>
          </text>
        </React.Fragment>
      ) : null}
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
