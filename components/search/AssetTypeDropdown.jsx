// 'use client';
// import dynamic from 'next/dynamic';

// // Dynamically import icons to reduce bundle size
// const FiImage = dynamic(() => import('react-icons/fi').then(mod => mod.FiImage));
// const FiFeather = dynamic(() => import('react-icons/fi').then(mod => mod.FiFeather));
// const FiLayers = dynamic(() => import('react-icons/fi').then(mod => mod.FiLayers));
// const FiCode = dynamic(() => import('react-icons/fi').then(mod => mod.FiCode));
// const FiVideo = dynamic(() => import('react-icons/fi').then(mod => mod.FiVideo));
// const FiMusic = dynamic(() => import('react-icons/fi').then(mod => mod.FiMusic));
// const FiPackage = dynamic(() => import('react-icons/fi').then(mod => mod.FiPackage));
// const ChevronDown = dynamic(() => import('lucide-react').then(mod => mod.ChevronDown));

// const iconComponents = {
//   FiImage,
//   FiFeather,
//   FiLayers,
//   FiCode,
//   FiVideo,
//   FiMusic,
//   FiPackage
// };

// export default function AssetTypeDropdown({
//   selectedType,
//   assetTypes,
//   onSelect,
//   showDropdown,
//   setShowDropdown,
//   dropdownRef
// }) {
//   const IconComponent = iconComponents[selectedType.icon];

//   return (
//     <div 
//       ref={dropdownRef}
//       className="flex items-center justify-between border-r border-[#939393] w-[171px] h-full px-4 cursor-pointer"
//       onClick={() => setShowDropdown(!showDropdown)}
//     >
//       <div className="flex items-center gap-2">
//         {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
//         <span className="font-normal text-white text-lg whitespace-nowrap">
//           {selectedType.name}
//         </span>
//       </div>
//       <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />

//       {showDropdown && (
//         <div className="absolute left-0 top-[68px] w-[171px] bg-[#1D1D1D] border border-[#939393] rounded-md shadow-lg z-50 overflow-hidden">
//           {assetTypes.map((asset) => {
//             const AssetIcon = iconComponents[asset.icon];
//             return (
//               <div
//                 key={asset.value}
//                 className={`px-4 py-3 hover:bg-[#3D3D3D] cursor-pointer flex items-center gap-2 ${
//                   selectedType.value === asset.value ? "bg-[#3D3D3D]" : ""
//                 }`}
//                 onClick={() => onSelect(asset)}
//               >
//                 {AssetIcon && <AssetIcon className="w-5 h-5 text-white" />}
//                 <span className="text-white text-lg whitespace-nowrap">
//                   {asset.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

'use client';
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import icons
const FiImage = dynamic(() => import('react-icons/fi').then(mod => mod.FiImage));
const FiFeather = dynamic(() => import('react-icons/fi').then(mod => mod.FiFeather));
const FiLayers = dynamic(() => import('react-icons/fi').then(mod => mod.FiLayers));
const FiCode = dynamic(() => import('react-icons/fi').then(mod => mod.FiCode));
const FiVideo = dynamic(() => import('react-icons/fi').then(mod => mod.FiVideo));
const FiMusic = dynamic(() => import('react-icons/fi').then(mod => mod.FiMusic));
const FiPackage = dynamic(() => import('react-icons/fi').then(mod => mod.FiPackage));
const ChevronDown = dynamic(() => import('lucide-react').then(mod => mod.ChevronDown));

const iconComponents = {
  FiImage,
  FiFeather,
  FiLayers,
  FiCode,
  FiVideo,
  FiMusic,
  FiPackage
};

export default function AssetTypeDropdown({
  selectedType,
  assetTypes,
  onSelect,
  showDropdown,
  setShowDropdown,
  dropdownRef
}) {
  const IconComponent = iconComponents[selectedType.icon];
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowDropdown]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowDropdown(false);
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className="flex items-center justify-between border-r border-[#939393] w-[171px] h-full px-4 cursor-pointer relative"
      onClick={() => setShowDropdown(!showDropdown)}
      onKeyDown={handleKeyDown}
      role="button"
      aria-haspopup="listbox"
      aria-expanded={showDropdown}
      tabIndex="0"
    >
      <div className="flex items-center gap-2">
        {IconComponent && <IconComponent className="w-5 h-5 text-white" aria-hidden="true" />}
        <span className="font-normal text-white text-lg whitespace-nowrap">
          {selectedType.name}
        </span>
      </div>
      <ChevronDown 
        className={`w-4 h-4 text-white transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
        aria-hidden="true"
      />

      {showDropdown && (
        <div 
          ref={menuRef}
          className="absolute left-0 top-[68px] w-[171px] bg-[#1D1D1D] border border-[#939393] rounded-md shadow-lg z-50 overflow-hidden"
          role="listbox"
        >
          {assetTypes.map((asset) => {
            const AssetIcon = iconComponents[asset.icon];
            return (
              <div
                key={asset.value}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(asset);
                  setShowDropdown(false);
                }}
                className={`px-4 py-3 hover:bg-[#3D3D3D] cursor-pointer flex items-center gap-2 ${
                  selectedType.value === asset.value ? "bg-[#3D3D3D]" : ""
                }`}
                role="option"
                aria-selected={selectedType.value === asset.value}
                tabIndex="0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onSelect(asset);
                    setShowDropdown(false);
                  }
                }}
              >
                {AssetIcon && <AssetIcon className="w-5 h-5 text-white" aria-hidden="true" />}
                <span className="text-white text-lg whitespace-nowrap">
                  {asset.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}