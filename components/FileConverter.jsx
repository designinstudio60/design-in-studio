import React from 'react';
import Image from 'next/image';

const FileConverter = () => {
  return (
   <section className="w-320 h-144  mx-auto flex items-center justify-between p-8">
       
        <div className="w-117.75 h-89.75 flex flex-col justify-center ">
        <h1 className="text-4xl font-medium w-full mb-12 text-white">
          Quick and Reliable File <br />  Format <span className="text-transparent bg-clip-text heading-grediant">Conversion </span>
          Online
          </h1>
          
          <p className="text-base font-normal mb-12 text-white">
          Convert your files with ease using our powerful online tool. Whether it's PDF to Word, Excel, or other formats, we ensure fast, accurate, and hassle-free conversions. Simplify your document workflow with just a few clicks - anywhere, anytime</p>          
          <button className="w-28 h-11 bg-signup-gradient rounded-[5px] text-[#1E1E1E] text-base font-medium">
              Generate
          </button>
        </div>
        <div className="w-xl h-128  relative">
          <Image
            src="/fileconverter.svg" // Replace with your image path
            alt="Descriptive image alt text"
            fill
            className="object-cover rounded-lg  w-full h-full"
            quality={100}
          />
        </div>
   
      </section>
  );
};

export default FileConverter;

