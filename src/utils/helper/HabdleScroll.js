export const handleScroll = (e, containerId) => {
  e.preventDefault();
  const parent_main = document.getElementById("main-con");
  // const about = document.getElementById("about-con");
  const container = document.getElementById(containerId);

  const isScrollingRight = e.deltaY > 0;
  const isScrollingLeft = e.deltaY < 0;

  console.log(e.deltaY, "delta Y");

  // if (containerId === "main-con") {
  //   if (isScrollingRight) {
  //     console.log("scroll RIght");
  //     console.log("parent_main.scrollLeft", parent_main.scrollLeft);
  //     console.log("parent_main.clientWidth", parent_main.clientWidth);
  //     // console.log("about.scrollLeft", about.scrollLeft);
  //     // console.log("about.clientWidth", about.clientWidth);
  //     // console.log("about.scrollWidth", about.scrollWidth);

  //     // if (
  //     //   parent_main.scrollLeft === parent_main.clientWidth &&
  //     //   about.scrollLeft + about.clientWidth < about.scrollWidth - 1
  //     // ) {
  //     //   return;
  //     // }
  //   } else if (isScrollingLeft) {
  //     console.log("scroll RIght");
  //     console.log("parent_main.scrollLeft", parent_main.scrollLeft);
  //     console.log("parent_main.clientWidth", parent_main.clientWidth);
  //     console.log("about.scrollLeft", about.scrollLeft);
  //     console.log("about.clientWidth", about.clientWidth);
  //     console.log("about.scrollWidth", about.scrollWidth);
  //     console.log("is Pater skipped", about.scrollLeft !== 0);
  //     if (
  //       parent_main.scrollLeft === parent_main.clientWidth &&
  //       about.scrollLeft !== 0
  //     ) {
  //       return;
  //     }
  //   }
  // }

  if (isScrollingRight) {
    console.log("scrollRIght");

    container.scrollTo({
      left: container.scrollLeft + container.clientWidth * 0.333,
      behavior: "smooth",
    });
  } else if (isScrollingLeft) {
    container.scrollTo({
      left: container.scrollLeft - container.clientWidth * 0.333,
      behavior: "smooth",
    });
  }
};
