

// "use client";
// import React from "react";

// export default function PortfolioCommunity() {
//   return (
//     <section className="w-7xl h-80 mx-auto rounded-3xl flex items-center justify-between px-10 py-8 relative overflow-hidden mt-28">
//       {/* Background Glass Gradient with shadow */}
//       <div className="absolute inset-0 rounded-3xl z-0 
//         bg-[rgba(255,255,255,0.05)] 
//         backdrop-blur-[18px] 
//         border-2 border-[#6B6A6A] 
//         bg-gradient-to-br from-[#1a1a1a] to-[#0f2b1f]
//         shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
//       ></div>

//       {/* Content Wrapper (unchanged) */}
//       <div className="relative z-10 flex justify-between items-center w-full">
//         {/* Left Container */}
//         <div className="flex flex-col max-w-136 text-white">
//           <h2 className="text-4xl font-medium leading-[44px]">
//             Join Design in studio{" "}
//             <span className="heading-grediant">portfolio community</span>
//           </h2>
//           <p className="text-base mt-5.25 leading-6">
//             If you are new designer & creator we provide you a place to build your attractive portfolio
//           </p>
//           <button className="mt-8.75 w-31 h-10.75 text-[#1E1E1E] rounded-[5px] bg-signup-gradient text-base signup-btn-gradient">
//             create
//           </button>
//         </div>

//         {/* Right Container */}
//         <div className="w-80 h-59">
//           <img
//             src="/visual.svg"
//             alt="Preview"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";

export default function PortfolioCommunity() {
  return (
    <div className="w-full px-19 py-10 max-w-7xl">
    <section className=" mx-auto rounded-3xl flex flex-col lg:flex-row items-center justify-between px-16 sm:px-8 md:px-10 py-8 relative overflow-hidden mt-20">
      {/* Background Glass Gradient with shadow */}
      <div className="absolute inset-0 rounded-3xl z-0 
        bg-[rgba(255,255,255,0.05)] 
        backdrop-blur-[18px] 
        border-2 border-[#6B6A6A] 
        bg-gradient-to-br from-[#1a1a1a] to-[#0f2b1f]
        shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
        {/* Left Container */}
        <div className="flex flex-col max-w-full lg:max-w-[50%] xl:max-w-136 text-white px-4 sm:px-0 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.2] sm:leading-[1.3] md:leading-[44px]">
            Join Design in studio{" "}
            <span className="heading-grediant">portfolio community</span>
          </h2>
          <p className="text-sm sm:text-base mt-4 sm:mt-5 md:mt-5.25 leading-5 sm:leading-6">
            If you are new designer & creator we provide you a place to build your attractive portfolio
          </p>
          <button className="mt-6 sm:mt-7 md:mt-8.75 w-28 sm:w-31 h-10 sm:h-10.75 text-[#1E1E1E] rounded-[5px] bg-signup-gradient text-sm sm:text-base signup-btn-gradient mx-auto lg:mx-0">
            create
          </button>
        </div>

        {/* Right Container */}
        <div className="w-full sm:w-[70%] md:w-80 h-40 sm:h-48 md:h-59 lg:mt-0">
          <img
            src="/visual.svg"
            alt="Preview"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
    </div>
  );
}