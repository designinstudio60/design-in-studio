
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
  FiPackage
} from "react-icons/fi";

export default function HeroSection({ heading, subheading }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsset, setSelectedAsset] = useState({
    name: "Assets",
    value: "all",
    icon: <FiPackage className="w-5 h-5 text-white" />
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
    setSelectedAsset({
      name: asset.name,
      value: asset.value,
      icon: asset.icon
    });
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
    <section className="mx-40 flex flex-col mt-14 p-6 w-268 font-['Helvetica_Neue']">
      {/* Heading and paragraph */}
      <div className="text-white mb-4 font-bold text-left w-full text-6xl tracking-[-0.02em]">
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

      {subheading && (
        <p className="text-white mx-auto text-center mt-3 w-[754px] h-11 text-xl leading-[1.4]">
          {subheading}
        </p>
      )}

      {/* Search Form */}
      <div className="relative">
        <form onSubmit={handleSearch} className="flex items-center bg-[#1D1D1D] rounded-md overflow-hidden border border-[#939393] mt-27 w-full h-16">
          {/* Asset Selector */}
          <div 
            ref={dropdownRef}
            className="flex items-center justify-between border-r border-[#939393] w-[171px] h-full px-4 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="flex items-center gap-2">
              {selectedAsset.icon}
              <span className="font-normal text-white text-lg whitespace-nowrap">
                {selectedAsset.name}
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
          </div>

          {/* Search Input */}
          <div className="flex-1 flex items-center px-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search all assets"
              className="bg-transparent border-none text-white w-full focus:outline-none text-lg h-full placeholder-[#939393]"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-center gap-1">
            <img src="/btn.svg" alt="Search Type" className="w-12 h-11 mr-2" />
            <button 
              type="submit"
              className="bg-signup-gradient text-[#1E1E1E] flex items-center justify-center font-medium w-28 h-11 text-xs mr-[11px] rounded-[3px]"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </button>
          </div>
        </form>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="absolute left-0 top-[68px] w-[171px] bg-[#1D1D1D] border border-[#939393] rounded-md shadow-lg z-50 overflow-hidden">
            {assetTypes.map((asset) => (
              <div
                key={asset.value}
                className={`px-4 py-3 hover:bg-[#2D2D2D] cursor-pointer flex items-center gap-2 ${
                  selectedAsset.value === asset.value ? "bg-[#2D2D2D]" : ""
                }`}
                onClick={() => handleAssetSelect(asset)}
              >
                {asset.icon}
                <span className="text-white text-lg whitespace-nowrap">
                  {asset.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
