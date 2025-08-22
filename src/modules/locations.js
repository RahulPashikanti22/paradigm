import React, { useEffect, useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import mapIcon from "../assets/images/backgrounds/mapIcon.svg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MapChart = ({ selectedLocation }) => {
  const chartRef = useRef(null);
  const chart = useRef(null);

  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: "#location",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    });
  }, []);

  useEffect(() => {
    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    chart.current = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoNaturalEarth1(),
        wheelable: true,
        maxZoomLevel: 1,
      })
    );

    const polygonSeries = chart.current.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    const pointSeries = chart.current.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.data.setAll([]);

    pointSeries.bullets.push(function (root, series, dataItem) {
      const container = am5.Container.new(root, {});

      const image = container.children.push(am5.Picture.new(root, {
        width: 15,
        height: 20,
        centerX: am5.p50,
        centerY: am5.p50,
        src: mapIcon
      }));

      const titleLabel = container.children.push(am5.Label.new(root, {
        text: dataItem.dataContext.title,
        fontSize: "1em",
        fill: am5.color(0x000000),
        dx: 10,
        centerY: am5.p50,
        visible: true
      }));

      const hoverContainer = container.children.push(am5.Container.new(root, {
        layout: root.horizontalLayout,
        dx: -150,
        dy: -90,
        visible: false,
        opacity: 0,
        scale: 0.9,
        background: am5.Rectangle.new(root, {
          fill: am5.color(0xffffff),
          fillOpacity: 0.9,
          stroke: am5.color(0x000000),
          strokeWidth: 1,
          cornerRadius: 5,
          shadowColor: am5.color(0xffffff),
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          overflow: "hidden"
        })
      }));

      const hoverLabel = hoverContainer.children.push(am5.Label.new(root, {
        text: `${dataItem.dataContext.title}\n${dataItem.dataContext.content}\n${dataItem.dataContext.content1 || ''}`,
        fontSize: "0.9em",
        fontWeight: "bold",
        fill: am5.color(0x000000),
        wrap: true,
        width: am5.p100,
      }));

      const closeButton = hoverContainer.children.push(am5.Label.new(root, {
        text: "x",
        fontSize: "0.9em",
        fill: am5.color(0xffffff),
        background: am5.Rectangle.new(root, {
          fill: am5.color(0x2087FE),
          cornerRadius: 3,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 2,
          paddingBottom: 2,
        }),
        marginRight: "auto",
        cursorPointer: true
      }));

      const showHoverLabel = () => {
        hoverContainer.set("visible", true);
        hoverContainer.set("opacity", 1);
      };

      const hideHoverLabel = () => {
        hoverContainer.set("visible", false);
        hoverContainer.set("opacity", 0);
      };

      image.events.on("click", showHoverLabel);
      titleLabel.events.on("click", showHoverLabel);
      closeButton.events.on("click", hideHoverLabel);

      return am5.Bullet.new(root, {
        sprite: container
      });
    });

    return () => {
      root.dispose();
    };
  }, []);

  useEffect(() => {
    if (selectedLocation && chart.current) {
      const pointSeries = chart.current.series.getIndex(1);
      pointSeries.data.setAll([{
        geometry: {
          type: "Point",
          coordinates: selectedLocation.coordinates
        },
        title: selectedLocation.title,
        content: selectedLocation.content,
        content1: selectedLocation.content1 || ''
      }]);
    } else if (chart.current) {
      const pointSeries = chart.current.series.getIndex(1);
      pointSeries.data.setAll([{
        geometry: {
          type: "Point",
          coordinates: [78.4867, 17.3850] // Default to Hyderabad location
        },
        title: "Hyderabad",
        content: "2A,  2nd Floor, Trendset Jayabheri Connect, ",
        content1: "Near Kothaguda Junction, Whitefields, Kondapur, Hyderabad, Telangana 500081."
      }]);
    }
  }, [selectedLocation]);

  return (
    <div ref={chartRef} id="chartdiv" style={{ width: "100%", height: "100%" }} />
  );
};

export default MapChart;
