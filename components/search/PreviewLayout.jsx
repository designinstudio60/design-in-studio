// 'use client';
// import { X } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// function PreviewLayout({ asset, relatedAssets, onClose }) {
//   // Helper function to validate media URLs
//   const getValidMediaUrl = (url) => {
//     return url && typeof url === 'string' && url.trim() !== '' ? url : null;
//   };

//   // Get validated URLs
//   const mainImageUrl = getValidMediaUrl(asset.largeImageURL || asset.webformatURL);
//   const videoUrl = asset.type === 'video' ? getValidMediaUrl(asset.videos?.medium?.url) : null;

//   return (
//     <div className="min-h-screen bg-[#1D1D1D]">
//       {/* Header */}
//       <div className="border-b border-gray-700 p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-white">Preview</h1>
//         <button 
//           onClick={onClose}
//           className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700"
//         >
//           <X size={24} />
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto p-6">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Main Preview Area */}
//           <div className="flex-1">
//             <div className="bg-[#2D2D2D] rounded-lg overflow-hidden">
//               {asset.type === 'photo' || asset.type === 'vector' ? (
//                 mainImageUrl ? (
//                   <Image
//                     src={mainImageUrl}
//                     alt={asset.tags || 'Asset preview'}
//                     width={800}
//                     height={600}
//                     className="w-full h-auto max-h-[70vh] object-contain"
//                     unoptimized={true}
//                   />
//                 ) : (
//                   <div className="w-full h-96 flex items-center justify-center text-gray-400">
//                     Image not available
//                   </div>
//                 )
//               ) : videoUrl ? (
//                 <video
//                   src={videoUrl}
//                   controls
//                   className="w-full max-h-[70vh]"
//                   autoPlay
//                 />
//               ) : (
//                 <div className="w-full h-96 flex items-center justify-center text-gray-400">
//                   Video not available
//                 </div>
//               )}
//             </div>

//             {/* Asset Details */}
//             <div className="mt-6 text-white">
//               <h2 className="text-2xl font-bold mb-4">
//                 {asset.tags || 'Untitled'}
//               </h2>
              
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 <div className="bg-[#2D2D2D] p-4 rounded-lg">
//                   <p className="text-gray-400">Views</p>
//                   <p className="text-xl">{asset.views || 0}</p>
//                 </div>
//                 <div className="bg-[#2D2D2D] p-4 rounded-lg">
//                   <p className="text-gray-400">Downloads</p>
//                   <p className="text-xl">{asset.downloads || 0}</p>
//                 </div>
//                 <div className="bg-[#2D2D2D] p-4 rounded-lg">
//                   <p className="text-gray-400">Likes</p>
//                   <p className="text-xl">{asset.likes || 0}</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <a
//                   href={mainImageUrl || videoUrl || '#'}
//                   download
//                   className={`px-6 py-3 rounded-md font-medium ${
//                     mainImageUrl || videoUrl 
//                       ? 'bg-signup-gradient text-[#1E1E1E] hover:opacity-90'
//                       : 'bg-gray-600 text-gray-400 cursor-not-allowed'
//                   }`}
//                   onClick={(e) => {
//                     if (!mainImageUrl && !videoUrl) e.preventDefault();
//                   }}
//                 >
//                   Download Free
//                 </a>
//                 <button className="border border-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-800">
//                   Save to Collection
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Related Assets */}
//           <div className="lg:w-80">
//             <h3 className="text-white font-bold mb-4 text-lg">More like this</h3>
//             <div className="grid grid-cols-2 gap-4">
//               {relatedAssets.map((relatedAsset) => {
//                 const relatedImageUrl = getValidMediaUrl(relatedAsset.webformatURL);
//                 return (
//                   <Link
//                     key={relatedAsset.id}
//                     href={`/asset/${relatedAsset.id}?type=photo&q=${encodeURIComponent(relatedAsset.tags || '')}`}
//                     className="group"
//                   >
//                     <div className="relative h-40 bg-[#3D3D3D] rounded-lg overflow-hidden">
//                       {relatedImageUrl ? (
//                         <Image
//                           src={relatedImageUrl}
//                           alt={relatedAsset.tags || 'Related asset'}
//                           width={200}
//                           height={160}
//                           className="object-cover group-hover:opacity-80 transition-opacity"
//                           unoptimized={true}
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
//                           No preview
//                         </div>
//                       )}
//                     </div>
//                     <p className="mt-2 text-white text-sm truncate">
//                       {relatedAsset.tags ? relatedAsset.tags.split(',')[0] : 'Untitled'}
//                     </p>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PreviewLayout;
