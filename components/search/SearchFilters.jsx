
'use client';
import { FiX } from "react-icons/fi";

const fileFormats = [
  { name: "All Formats", value: "all" },
  { name: "Photos", value: "photo" },
  { name: "Illustrations", value: "illustration" },
  { name: "Vectors", value: "vector" },
  { name: "SVG", value: "svg" },
  { name: "Videos", value: "video" },
  { name: "PSD", value: "psd" },
  { name: "AI", value: "ai" },
  { name: "EPS", value: "eps" },
  { name: "PDF", value: "pdf" }
];

export default function SearchFilters({ currentType, onClose, onSelectType }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-bold">Filters</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700"
        >
          <FiX size={24} />
        </button>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-white mb-3 text-lg">File Formats</h3>
          <div className="space-y-2">
            {fileFormats.map(format => (
              <button
                key={format.value}
                onClick={() => onSelectType(format.value)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentType === format.value 
                    ? "bg-[#3D3D3D] text-white" 
                    : "bg-[#1D1D1D] text-gray-300 hover:bg-[#3D3D3D]"
                }`}
              >
                {format.name}
              </button>
            ))}
          </div>
        </div>

        {/* Add more filter sections as needed */}
        <div>
          <h3 className="text-white mb-3 text-lg">Price Range</h3>
          <div className="px-4 py-2 bg-[#1D1D1D] rounded-md">
            <input 
              type="range" 
              min="0" 
              max="100" 
              className="w-full accent-[#3D3D3D]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}