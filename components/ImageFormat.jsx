import React from 'react';
import Image from 'next/image';

const ImageFormat= () => {
  return (
    <section className="w-320 h-144  mx-auto flex items-center justify-between p-8">
     
      <div className="w-140 h-97.5 flex flex-col justify-center">
        <h1 className="heading-md  w-full mb-12 text-white">
        Seamlessly  <span className="text-transparent bg-clip-text heading-grediant">Convert Images </span><br />
        Online - PNG, JPG, and Beyond 
        </h1>
        
        <p className="para-base  mb-12 text-white">
        Effortlessly transform your images with our free online converter. Whether you need to convert PNG to JPG, JPG to PNG, or other formats, our tool is fast, reliable, and easy to use. No installations or complicated steps-just upload your file, select the desired format, and get your converted image in seconds. Perfect for all your personal or professional needs         </p>
        
        <button className="w-28 h-11 bg-signup-gradient rounded-[5px] text-[#1E1E1E] text-base ">
            Convert
        </button>
      </div>

      {/* Right side - Image */}
      <div className="w-xl h-128  relative">
        <Image
          src="/ImageFormat.svg" // Replace with your image path
          alt="Descriptive image alt text"
          fill
          className="object-cover rounded-lg  w-full h-full"
          quality={100}
        />
      </div>
    </section>
  );
};

export default ImageFormat;