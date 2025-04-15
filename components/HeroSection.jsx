"use client";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mx-40 flex flex-col mt-14 p-6  w-268 font-['Helvetica_Neue']">
      {/* Heading with gradient */}
      <div className="text-white mb-4 font-bold text-left w-full text-6xl  tracking-[-0.02em]">
        Design your vision{" "}
        <span className="inline-block">
          <span className="heading-grediant">
            shaping your
          </span>{" "}
          future
        </span>
      </div>

      {/* Paragraph - changed from font-thin to font-normal */}
      <p className="text-white  mx-auto text-center mt-3 w-[754px] h-11 text-xl leading-[1.4]">
        Turn ideas into outstanding designs with high quality vectors photos videos mockups and more
      </p>

      {/* Rest of the component remains unchanged */}
      <div className="flex items-center bg-[#1D1D1D] rounded-md overflow-hidden border border-[#939393] mt-27 w-5x h-16">
        {/* Asset Selector */}
        <div className="flex items-center justify-between border-r border-[#939393] w-[171px] h-full px-3">
          <img src="/assets.svg" alt="Asset Type" className="w-[25px] h-[22px]" />
          <span className="font-normal text-white text-lg">Assets</span>
          <img src="/Polygon 1.svg" alt="Dropdown" className="w-[10px] h-[10px]" />
        </div>

        {/* Search Input */}
        <div className="flex-1 flex items-center px-4">
          <input
            type="text"
            placeholder="search all assets"
            className="bg-transparent border-none text-white w-full focus:outline-none text-lg h-full placeholder-[#939393]"
          />
        </div>

        {/* Search Button */}
        <div className="flex items-center gap-1">
          <img src="/btn.svg" alt="Search Type" className="w-12 h-11 mr-2" />
          <button className="bg-gradient-to-r from-[#1BFFF3] to-[#AEFFAE] text-[#1E1E1E] flex items-center justify-center font-medium w-28 h-11 text-xs mr-[11px] rounded-[3px]">
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
