

"use client";
import React from "react";
export default function PortfolioCommunity() {
  return (
    <section className="w-320 h-80 mx-auto rounded-3xl flex items-center justify-between px-10 py-8 relative overflow-hidden mt-28">
      {/* Background Glass Gradient with shadow */}
      <div className="absolute inset-0 rounded-3xl z-0 
        bg-[rgba(255,255,255,0.05)] 
        backdrop-blur-[18px] 
        border-2 border-[#6B6A6A] 
        bg-gradient-to-br from-[#1a1a1a] to-[#0f2b1f]
        shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
      ></div>

      {/* Content Wrapper (unchanged) */}
      <div className="relative z-10 flex justify-between items-center w-full">
        {/* Left Container */}
        <div className="flex flex-col max-w-136 text-white">
          <h2 className="text-4xl ">
            Join Design in studio{" "}
            <span className="heading-grediant">portfolio community</span>
          </h2>
          <p className="text-base mt-5.25 ">
            If you are new designer & creator we provide you a place to build your attractive portfolio
          </p>
          <button className="mt-8.75 w-31 h-10.75 text-[#1E1E1E] rounded-[5px] bg-signup-gradient text-base signup-btn-gradient">
            create
          </button>
        </div>

        {/* Right Container */}
        <div className="w-80 h-59">
          <img
            src="/visual.svg"
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

