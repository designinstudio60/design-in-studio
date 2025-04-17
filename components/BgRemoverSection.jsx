

import React from 'react';

const BgRemoverSection = () => {
  return (
    <section className="w-320 h-144 flex items-center justify-between px-5 relative ">
      {/* Left Section */}
      <div className="relative">
        {/* Image Container */}
        <div className="w-139.75 h-121.75 relative">
          {/* Main Image */}
          <div className="rounded-[21px] overflow-hidden absolute z-10">
            <img 
              src="/bgremoversection.svg" 
              alt="Sample" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Gradient Background */}
          <div 
            className="w-61 h-60.5 bg-signup-gradient rounded-[21px] absolute z-0"
            style={{
              transform: 'rotate(180deg)',
              left: '330px',
              bottom: '19px'
            }}
          ></div>
        </div>
      </div>

      {/* Two Custom SVG Stars - Adjusted for visibility */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* First Star */}
        <img
          src="/bigstart.svg"
          alt="Star"
          className="absolute w-12 h-12 z-20"
          style={{
            left: '35%',
            top: '12%',
            width: '56px',
            height: '57px',
          }}
        />
        
        {/* Second Star */}
        <img
          src="/smallstar.svg"
          alt="Star"
          className="absolute w-10 h-10 z-20"
          style={{
            left: '39.5%',
            top: '20%',
            
          }}
        />
      </div>

      {/* Right Section */}
      <div className="w-123.75 h-97.5 flex flex-col justify-center">
        <h1 className="text-4xl font-medium w-full mb-12 text-white">
          The ultimate <span className="text-transparent bg-clip-text heading-grediant">background</span><br />
          <span className="text-transparent bg-clip-text heading-grediant">Remover</span> tool you'll ever need
        </h1>
        
        <p className="text-base font-normal mb-12 text-white">
          With Design In Studio's online background remover, removing backgrounds from photos has never been easier. This free tool lets you erase backgrounds in just a few clicks—no need to install or learn complicated editing software. Simply upload your image, and get a background-free PNG in seconds.
        </p>
        
        <button className="w-28 h-11 bg-signup-gradient rounded-[5px] text-[#1E1E1E] text-base font-medium">
          Remove
        </button>
      </div>
    </section>
  );
};

export default BgRemoverSection;

