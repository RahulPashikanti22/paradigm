import * as React from "react";


export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="fonts/Poppins/Poppins-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="poppinsFont"
    />,
  ]);
 
};
