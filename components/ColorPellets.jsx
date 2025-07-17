import React from 'react';
import Image from 'next/image';

const ColorPellets = () => {
  return (
   <section className="w-320 h-144  mx-auto flex items-center justify-between p-8">
         <div className="w-xl h-128  relative">
          <Image
            src="/colorpelet.svg" // Replace with your image path
            alt="Descriptive image alt text"
            fill
            className="object-cover rounded-lg  w-full h-full"
            quality={100}
          />
        </div>
        <div className="w-117.75 h-97.25 flex flex-col justify-center ">
        <h1 className="text-4xl  w-full mb-12 text-white">
          Generate  <span className="text-transparent bg-clip-text heading-grediant">Color Palettes  </span>
          in a <br />New Way
          </h1>
         
          
          <p className="text-base  mb-12 text-white">
          Palette maker is a unique tool for creative professionals and color lovers that allows you to create color palettes and test their behavior in pre-made design examples from the most common creative fields such as Logo design, UI/UX, Patterns, Posters and more.</p>          
          <button className="w-28 h-11 bg-signup-gradient rounded-[5px] text-[#1E1E1E] text-base ">
              Generate
          </button>
        </div>
  
   
      </section>
  );
};

export default ColorPellets;

