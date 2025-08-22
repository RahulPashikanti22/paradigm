import React, { useState } from 'react';
import icon from "../assets/images/backgrounds/Location.svg";
import linked from "../assets/images/backgrounds/linkedin.svg";
import MapChart from './locations';

const MapLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationKey, setLocationKey] = useState(0);

  const data = [
    {
      id: 1,
      icon: icon,
      title: "Hyderabad",
      content: "2A, 2nd Floor, Trendset Jayabheri Connect, Near - Kothaguda Junction, White fields, Kondapur,  ",
      content1: "Hyderabad, Telangana 500081.", 
      phone: "+91 40 6655 6000",
      coordinates: [78.4867, 17.3850]
    },
    {
      id: 2,
      icon: icon,
      title: "Visakhapatnam",
      content: "Plot No 02, Hill No. 03, IT HUB, ",
      content1: "Madhurawada, Visakhapatnam, AP – 530 041",
      coordinates: [80.35555809648399, 17.82844202446191]
    },
    {
      id: 3,
      icon: icon,
      title: "Delhi",
      content: "Plot No. 11,12,16 & 17, 2nd Floor, Wrokingdom",
      content1: "Co-Working Space, Dwarka Sector – 7 New Delhi, 110075",
      coordinates: [77.1025, 28.7041]
    },
    {
      id: 4,
      icon: icon,
      title: "Maryland",
      content: "8830 Stanford Blvd, Suite ",
      content1: "312 Columbia, Maryland 21045, US",
      phone: "+1 410-872-1008",
      fax: "+1 410-872-9396",
      coordinates: [-76.8154, 39.2037]
    },
    {
      id: 5,
      icon: icon,
      title: "Pennsylvania",
      content: "Erie, PA 16508, US",
      coordinates: [-80.0851, 42.1292]
    },
    {
      id: 6,
      icon: icon,
      titl: "Join our Social Community",
      conten: 'Our email: <a href="mailto:ask@paradigmIT.com">ask@paradigmIT.com</a>'
    }
  ];

  const handleLocationClick = (item) => {
    if (item.id === 6) {
      // Keep the map visible without navigating to a location
      setSelectedLocation(null);
    } else {
      // Navigate to the selected location
      setSelectedLocation(item);
    }
    setLocationKey((prevKey) => prevKey + 1);
  };

  return (
    <div className='w-full h-full flex py-2 pt-12'>
      <div className='w-[30%] h-full grid grid-cols-1 bg-[#F5F5F5] p-4'>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex items-center space-x-4 cursor-pointer'
            onClick={() => handleLocationClick(item)}
          >
            {item.id === 6 ? (
              <div>
                <div className='flex items-center space-x-4'>
                  <h1 className='text-xl font-bold'>{item.titl}</h1>
                  <a href='https://www.linkedin.com/company/paradigmittechnologyservices/posts/?feedView=all' target='_blank' >
                    <img src={linked} alt='Linkedin' className='w-6 h-6'/>
                  </a>
                </div>
                <div dangerouslySetInnerHTML={{ __html: item.conten }} />
              </div>
            ) : (
              <img src={item.icon} alt='Icon' className='w-6 h-6'/>
            )}
            <div className='flex-1'>
              <h1 className='text-lg font-semibold'>{item.title}</h1>
              <p className='text-sm '>{item.content}</p>
              <p className='text-sm '>{item.content1}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-[70%] h-full'>
        <MapChart key={locationKey} selectedLocation={selectedLocation} />
      </div>
    </div>
  );
};

export default MapLocations;
