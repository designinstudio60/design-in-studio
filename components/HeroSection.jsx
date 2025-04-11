// "use client";
// import { Search } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section
//       className="mx-auto flex flex-col mt-28 w-[1072px]
// "
//       style={{
//         fontFamily: "'Helvetica Neue', sans-serif",
//       }}
//     >
//       {/* Heading with gradient - unchanged */}

//       <div
//         className="text-white mb-4 font-bold text-left w-[1072px] text-6xl 
// "
//         style={{
//           letterSpacing: "-2%",
//         }}
//       >
//         Design your vision{" "}
//         <span>
//           <span
//             style={{
//               background: "linear-gradient(90deg, #AEFFAE 0%, #1BFFF3 100%)",
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//               color: "transparent",
//             }}
//           >
//             shaping your
//           </span>{" "}
//           future
//         </span>
//       </div>

//       {/* Paragraph - unchanged */}
//       <div className="text-white  font-thin mx-auto text-center mt-10 w-[754px] h-11 text-xl">
//         Turn ideas into outstanding designs with high quality vectors photos
//         videos mockups and more
//       </div>

//       {/* Refined Search Bar */}
//       <div
//         className="flex items-center bg-[#1D1D1D] rounded-md overflow-hidden border border-[#939393] mt-28 w-5xl h-16 "
//         style={{}}
//       >
//         {/* Asset Selector - Left Section */}
//         <div
//           className="flex items-center justify-between border-r border-[#939393] w-43 h-full px-3
// "
//         >
//           {/* Left SVG Icon */}
//           <img src="/assets.svg" alt="Asset Type" className="w-6 h-5.5" />

//           {/* Center Text */}
//           <span
//             className="font-normal text-white text-lg
// "
//           >
//             Assets
//           </span>

//           {/* Right Polygon Icon */}
//           <img src="/Polygon 1.svg" alt="Dropdown" className="w-2.5 h-2.5" />
//         </div>

//         {/* Search Input - Middle Section */}
//         <div
//           className="flex-1 flex items-center px-4
// "
//         >
//           <input
//             type="text"
//             placeholder="search all assets"
//             className="bg-transparent border-none text-white w-full focus:outline-none text-lg h-full"
//           />
//         </div>

//         {/* Search Button - Right Section */}
//         <div className="flex items-center" style={{ gap: "4px" }}>
//           {/* Search Type Icon - moved closer to button */}
//           <img src="/btn.svg" alt="Search Type" className="w-12 h-11 mr-2" />

//           {/* Search Button */}
//           <button
//             className="bg-signup-gradient text-[#1E1E1E] flex items-center justify-center font-medium
//             w-28 h-11 text-xs mr-4 rounded-[3px]"
//           >
//             <Search className="w-4 h-4 mr-2" />
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mx-auto flex flex-col mt-28 w-[1072px] font-['Helvetica_Neue']">
      {/* Heading with gradient */}
      <div className="text-white mb-4 font-bold text-left w-full text-[60px] leading-[72px] tracking-[-0.02em]">
        Design your vision{" "}
        <span className="inline-block">
          <span className="bg-gradient-to-r from-[#AEFFAE] to-[#1BFFF3] bg-clip-text text-transparent">
            shaping your
          </span>{" "}
          future
        </span>
      </div>

      {/* Paragraph - changed from font-thin to font-normal */}
      <div className="text-white font-normal mx-auto text-center mt-10 w-[754px] h-11 text-xl leading-[1.4]">
        Turn ideas into outstanding designs with high quality vectors photos videos mockups and more
      </div>

      {/* Rest of the component remains unchanged */}
      <div className="flex items-center bg-[#1D1D1D] rounded-md overflow-hidden border border-[#939393] mt-28 w-[1024px] h-16">
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