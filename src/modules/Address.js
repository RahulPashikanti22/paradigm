import React from 'react';
import map from "../../src/assets/images/backgrounds/map_mercator.png";

// Define some CSS for dot styling
const dotContainerStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px' // Add bottom gap for the dot
};

const dotStyle = {
  borderRadius: '50%',
  backgroundColor: '#ffba00',
  width: '10px',
  height: '10px',
};

const tooltipStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  padding: '10px',
  width:300,
  borderRadius: '4px',
  boxShadow: '0 0 5px rgba(0,0,0,0.3)',
  zIndex: 1,
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity 0.3s',
  transform: 'translate(10px, -120px)' // dx: 10, dy: -120
};

const tooltipVisibleStyle = {
  visibility: 'visible',
  opacity: 1
};

const Address = () => {
  const data = [
    { coordinates: [92.491684, -24.38714], title: "Hyderabad", id: 1, content: "Aurobindo Galaxy; 8th Floor, Wing – A,", content1: "Rai Durg Hyderabad, Telangana 500081" },
    { coordinates: [85.1024902, -14.7040592], title: "Delhi", id: 3, content: "Plot No. 11,12,16 & 17, 2nd Floor,Wrokingdom Co-Working Space,", content1: " Dwarka Sector – 7 New Delhi, 110075" },
    { coordinates: [101.20161, -20.08009], title: "Visakhapatnam", id: 2, content: "Plot No 02, Hill No. 03,IT HUB,", content1: "Madhurawada,Visakhapatnam, AP – 530 041" },
    { coordinates: [-56.6412712, -1.0457549], title: "Maryland", id: 4, content: "8830 Stanford Blvd, Suite 312 Columbia, Maryland 21045, US",  },
    { coordinates: [-54.1945247, -6.2033216], title: "Pennsylvania", id: 5, content: "Erie,PA 16508, US" }
  ];

  // Example map boundaries (you need to adjust these based on your map)
  const mapBounds = {
    left: -180,
    right: 180,
    top: 90,
    bottom: -90
  };

  // Map image size (you need to set these based on your image)
  const mapSize = {
    width: 1200,
    height: 600
  };

  // Function to convert coordinates to pixel positions
  const getPixelPosition = (coordinates) => {
    const [longitude, latitude] = coordinates;
    const xRatio = (longitude - mapBounds.left) / (mapBounds.right - mapBounds.left);
    const yRatio = (latitude - mapBounds.bottom) / (mapBounds.top - mapBounds.bottom);
    return {
      top: `${(1 - yRatio) * mapSize.height}px`, // invert Y-axis for typical image coordinates
      left: `${xRatio * mapSize.width}px`
    };
  };

  return (
    <div className='relative w-full h-full'>
      <img src={map} alt='Map' className='h-screen w-full' style={{ position: 'relative' }} />

      {data.map((location) => {
        const position = getPixelPosition(location.coordinates);
        return (
          <div
            key={location.id}
            style={{
              ...dotContainerStyle,
              top: position.top,
              left: position.left
            }}
            onMouseEnter={(e) => {
              const tooltip = e.currentTarget.querySelector('.tooltip');
              tooltip.style.visibility = 'visible';
              tooltip.style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              const tooltip = e.currentTarget.querySelector('.tooltip');
              tooltip.style.visibility = 'hidden';
              tooltip.style.opacity = 0;
            }}
          >

            <div style={dotStyle} />
            <div className='pl-4'>{location.title}</div>
            <div className="tooltip" style={tooltipStyle}>
                <h1 className='font-semibold'>

                {location.title}
                </h1>
                <p>
              {location.content}<br />

              {location.content1}
                </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Address;
