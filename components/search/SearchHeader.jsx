
'use client';
import { useState, useRef } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import AssetTypeDropdown from "./AssetTypeDropdown";

const assetTypes = [
  { name: "Photos", value: "photo", icon: "FiImage" },
  { name: "Illustrations", value: "illustration", icon: "FiFeather" },
  { name: "Vectors", value: "vector", icon: "FiLayers" },
  { name: "SVG", value: "svg", icon: "FiCode" },
  { name: "Videos", value: "video", icon: "FiVideo" },
  { name: "Music", value: "music", icon: "FiMusic" },
];

export default function SearchHeader({ initialQuery = "", initialType = "all", onSearch, onFilterToggle }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedAssetType, setSelectedAssetType] = useState(
    assetTypes.find(type => type.value === initialType) || 
    { name: "Assets", value: "all", icon: "FiPackage" }
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery, selectedAssetType.value);
  };

  return (
    <div className="flex items-center gap-4 mb-6 sticky top-0 z-30 bg-[#1D1D1D] py-4">
      <button
        onClick={onFilterToggle}
        className="flex items-center justify-center gap-5 bg-[#1D1D1D] text-white rounded-sm h-16 w-[112px] shrink-0 hover:bg-[#2D2D2D] transition-colors"
      >
        <FiFilter />
        Filter
      </button>

      <div className="relative flex-1" style={{ width: '1152px', height: '64px' }}>
        <form onSubmit={handleSubmit} className="flex items-center bg-[#1D1D1D] rounded-md overflow-hidden border border-[#939393] h-full">
          <AssetTypeDropdown
            selectedType={selectedAssetType}
            assetTypes={assetTypes}
            onSelect={(asset) => {
              setSelectedAssetType(asset);
              setShowDropdown(false);
            }}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            dropdownRef={dropdownRef}
          />

          <div className="flex-1 flex items-center px-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search all assets"
              className="bg-transparent border-none text-white w-full focus:outline-none text-lg h-full placeholder-[#939393]"
            />
          </div>

          <div className="flex items-center gap-1">
            <img src="/btn.svg" alt="Search Type" className="w-12 h-11 mr-2" />
            <button 
              type="submit"
              className="bg-signup-gradient text-[#1E1E1E] flex items-center justify-center font-medium w-28 h-11 text-xs mr-[11px] rounded-[3px] hover:opacity-90 transition-opacity"
            >
              <FiSearch className="w-4 h-4 mr-2" />
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}