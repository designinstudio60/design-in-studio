"use client";
import { Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiImage,
  FiFeather,
  FiLayers,
  FiCode,
  FiVideo,
  FiMusic,
  FiPackage,
} from "react-icons/fi";

export default function HeroSection({ heading, subheading }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsset, setSelectedAsset] = useState({
    name: "Assets",
    value: "all",
    icon: <FiPackage className="w-5 h-5 text-white" />,
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const assetTypes = [
    { name: "Photos", value: "photo", icon: <FiImage className="w-5 h-5 text-white" /> },
    { name: "Illustrations", value: "illustration", icon: <FiFeather className="w-5 h-5 text-white" /> },
    { name: "Vectors", value: "vector", icon: <FiLayers className="w-5 h-5 text-white" /> },
    { name: "SVG", value: "svg", icon: <FiCode className="w-5 h-5 text-white" /> },
    { name: "Videos", value: "video", icon: <FiVideo className="w-5 h-5 text-white" /> },
    { name: "Music", value: "music", icon: <FiMusic className="w-5 h-5 text-white" /> },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}&type=${selectedAsset.value}`);
    }
  };

  const handleAssetSelect = (asset) => {
    setSelectedAsset(asset);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40  py-6 font-['Helvetica_Neue']">
      {/* Heading */}
      <div className="flex items-center justify-center px-4 text-center">
        <div className="text-white font-bold w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
          {heading ? (
            heading
          ) : (
            <>
              Design your vision{" "}
              <span className="inline-block">
                <span className="heading-grediant">shaping your</span> future
              </span>
            </>
          )}
        </div>
      </div>


      {/* Subheading */}
      {subheading && (
        <p className="text-white text-center mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-snug">
          {subheading}
        </p>
      )}

      {/* Search Form */}
      <div className="relative mt-10">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-stretch bg-[#1D1D1D] rounded-md border border-[#939393] w-full"
        >
          {/* Asset Dropdown */}
          <div
            ref={dropdownRef}
            className="flex items-center justify-between border-b sm:border-b-0 sm:border-r border-[#939393] px-4 py-3 sm:w-[171px] cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="flex items-center gap-2">
              {selectedAsset.icon}
              <span className="text-white text-sm sm:text-base">{selectedAsset.name}</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-white transition-transform duration-200 ${showDropdown ? "rotate-180" : ""
                }`}
            />
          </div>

          {/* Input */}
          <div className="flex flex-1 items-center px-4 py-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all assets"
              className="bg-transparent border-none text-white w-full focus:outline-none text-base placeholder-[#939393]"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-end px-4 py-2 sm:py-0 gap-2">
            <img src="/btn.svg" alt="Search Type" className="w-10 h-10 hidden sm:block" />
            <button
              type="submit"
              className="bg-signup-gradient text-[#1E1E1E] font-medium text-xs sm:text-sm w-full px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </form>

        {/* Dropdown Options */}
        {showDropdown && (
          <div className="absolute left-0 top-full mt-2 w-full sm:w-[171px] bg-[#1D1D1D] border border-[#939393] rounded-md shadow-lg z-50">
            {assetTypes.map((asset) => (
              <div
                key={asset.value}
                onClick={() => handleAssetSelect(asset)}
                className={`px-4 py-2 hover:bg-[#2D2D2D] flex items-center gap-2 cursor-pointer ${selectedAsset.value === asset.value ? "bg-[#2D2D2D]" : ""
                  }`}
              >
                {asset.icon}
                <span className="text-white text-sm sm:text-base">{asset.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
