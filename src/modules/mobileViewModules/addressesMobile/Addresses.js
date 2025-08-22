import React from "react";
import Footer from "../../mobileViewModules/footerMobile/footerMobile";
import linked from "../../../assets/images/mobileview/linkedin.png";
import fb from "../../../assets/images/mobileview/facebook.png";

const Addresses = () => {
  const Addresses = [
    {
      id: 1,
      location: "Hyderabad",
      address:
        "2A,  2nd Floor, Trendset Jayabheri Connect, Near Kothaguda Junction, Whitefields, Kondapur, Hyderabad, Telangana 500081. ",
    },
    {
      id: 2,
      location: " Visakhapatnam ",
      address:
        " Plot No 02, Hill No. 03,IT HUB, Madhurawada,Visakhapatnam, AP – 530 041",
    },
    {
      id: 3,
      location: " Delhi",
      address:
        " Plot No. 11,12,16 & 17, 2nd Floor, Wrokingdom Co-Working Space, Dwarka Sector – 7 New Delhi, 110075",
    },
    {
      id: 4,
      location: " Maryland",
      address:
        "  8830 Stanford Blvd, Suite 312 Columbia, Maryland 21045, US Phone : +1 410-872-1008 Fax : +1 410-872-9396",
    },
    {
      id: 5,
      location: " Pennsylvania",
      address: " Erie, PA 16508, US",
    },
  ];

  return (
    <div id="locations" className=" bg-black text-white w-screen h-[900px]">
      <div className="text-center justify-center mt-2 text-white">
        <h1 className="text-2xl ">Global footprints</h1>
        <p className=" text-lg">Our Locations Worldwide!</p>
      </div>
      <div className="">
        {Addresses.map((item, index) => (
          <div key={index} className="mt-2 ml-6">
            <h1 className="text-2xl">{item.location}</h1>
            <p className="text-[#818181]  w-[75%] mt-2">{item.address}</p>
          </div>
        ))}
      </div>
      <div className="ml-6">
        <div className="mt-2">
          <h1 className="text-2xl  ">Join our Social Community</h1>
          <div className="flex gap-2">
            <img src={linked} alt="linkedin"></img>
            <img src={fb} alt="facebook"></img>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-xl">Let’s Discuss What’s Next?</h1>
          <p className="text-md text-[#818181] ">
            Have a question? <br />
            We’d love to hear from you!
          </p>
        <div className="mt-2 ">
          <h1 className="text-xl ">CONTACT US!</h1>
          <div className="text-[#818181] text-md">
            <p>+91 00000 00000</p>
            <p>hr@paradigmit.com</p>
          </div>
        </div>
        </div>
        <div className="mt-1 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Addresses;
