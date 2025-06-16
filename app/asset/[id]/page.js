


// 'use client';

// import { useEffect, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FiDownload, FiEye } from 'react-icons/fi';
// import { FaRegHeart, FaHeart, FaRegShareSquare } from 'react-icons/fa';
// import { toast } from 'react-hot-toast';

// export default function AssetPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [asset, setAsset] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(0);
//   const [showFormatOptions, setShowFormatOptions] = useState(false);
//   const [moreAssets, setMoreAssets] = useState([]);
//   const [relatedAssets, setRelatedAssets] = useState([]);
//   const [moreAssetsLoading, setMoreAssetsLoading] = useState(false);
//   const [relatedLoading, setRelatedLoading] = useState(false);

//   // Fetch asset data
//   useEffect(() => {
//     const fetchAsset = async () => {
//       try {
//         setLoading(true);
//         const searchParams = new URLSearchParams(window.location.search);
//         const type = searchParams.get('type');

//         let apiUrl = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&id=${id}`;
//         if (type === 'video') {
//           apiUrl = `https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&id=${id}`;
//         }

//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.hits?.length > 0) {
//           const assetData = data.hits[0];
//           setAsset({
//             ...assetData,
//             type,
//             tags: assetData.tags || searchParams.get('q') || '',
//           });
//           setLikeCount(assetData.likes || 0);
//         }
//       } catch (error) {
//         console.error('Error fetching asset:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAsset();
//   }, [id]);

//   // Fetch related assets
//   useEffect(() => {
//     if (!asset) return;

//     const fetchRelatedAssets = async () => {
//       setMoreAssetsLoading(true);
//       setRelatedLoading(true);
      
//       try {
//         // More by same designer
//         const moreUrl = asset.type === 'video' 
//           ? `https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&username=${asset.user}&per_page=4`
//           : `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&username=${asset.user}&per_page=4`;
        
//         const moreRes = await fetch(moreUrl);
//         const moreData = await moreRes.json();
//         setMoreAssets(moreData.hits || []);

//         // You might also like
//         const relatedUrl = asset.type === 'video'
//           ? `https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${encodeURIComponent(asset.tags?.split(',')[0] || '')}&per_page=6`
//           : `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${encodeURIComponent(asset.tags?.split(',')[0] || '')}&per_page=6`;
        
//         const relatedRes = await fetch(relatedUrl);
//         const relatedData = await relatedRes.json();
//         setRelatedAssets(relatedData.hits || []);
//       } catch (error) {
//         console.error('Error fetching related assets:', error);
//         setMoreAssets([]);
//         setRelatedAssets([]);
//       } finally {
//         setMoreAssetsLoading(false);
//         setRelatedLoading(false);
//       }
//     };

//     fetchRelatedAssets();
//   }, [asset]);

//   const handleLike = () => {
//     setLiked(!liked);
//     setLikeCount(prev => liked ? prev - 1 : prev + 1);
//   };

//   const forceDownload = async (url, filename) => {
//     try {
//       const response = await fetch(url);
//       const blob = await response.blob();
//       const blobUrl = window.URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.download = filename;
//       document.body.appendChild(link);
//       link.click();

//       window.URL.revokeObjectURL(blobUrl);
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Download failed:', error);
//     }
//   };

//   const handleDownload = (format = null) => {
//     if (!asset) return;

//     const title = asset.tags?.split(',')[0] || 'download';
//     const cleanTitle = title
//       .toLowerCase()
//       .replace(/[^a-z0-9\s]/g, '')
//       .replace(/\s+/g, '-')
//       .substring(0, 50);

//     if (asset.type === 'video') {
//       const videoUrl = asset.videos?.large?.url;
//       if (videoUrl) {
//         forceDownload(videoUrl, `${cleanTitle}.mp4`);
//       }
//     } else {
//       let downloadUrl = asset.largeImageURL || asset.webformatURL;
//       let extension = format || 'jpg';
//       forceDownload(downloadUrl, `${cleanTitle}.${extension}`);
//     }

//     setShowFormatOptions(false);
//   };

//   const handleAssetClick = (assetId, type, query) => {
//     router.push(`/asset/${assetId}?type=${type || 'photo'}&q=${encodeURIComponent(query || '')}`);
//   };

//   const copyToClipboard = () => {
//     const url = window.location.href;
//     navigator.clipboard.writeText(url)
//       .then(() => {
//         toast.success('Link copied to clipboard!');
//       })
//       .catch(() => {
//         toast.error('Failed to copy link');
//       });
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center w-full min-h-[50vh] bg-[#1d1d1d] rounded-xl">
//         <div className="animate-pulse flex flex-col items-center">
//           <div className="h-12 w-12 bg-[#2d2d2d] rounded-full mb-4"></div>
//           <div className="h-4 bg-[#2d2d2d] rounded w-32"></div>
//         </div>
//       </div>
//     );
//   }

//   if (!asset) {
//     return (
//       <div className="flex items-center justify-center w-full min-h-[50vh] bg-[#1d1d1d] rounded-xl">
//         <div className="text-center px-4">
//           <div className="text-red-500 text-xl mb-4">Asset not found</div>
//           <button
//             onClick={() => router.back()}
//             className="px-6 py-2 bg-signup-gradient text-white rounded-lg transition-colors hover:opacity-90"
//           >
//             Back to Browse
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const title = asset.tags.split(',')[0] || 'Untitled Asset';

//   const RelatedAssetCard = ({ item }) => {
//     const [imageError, setImageError] = useState(false);
    
//     return (
//       <div 
//         className="w-full cursor-pointer hover:opacity-90 transition-opacity"
//         onClick={() => handleAssetClick(item.id, item.type || (item.videos ? 'video' : 'photo'), item.tags)}
//       >
//         <div className="relative w-full aspect-video rounded-lg overflow-hidden">
//           {item.type === 'video' || item.videos ? (
//             <video
//               src={item.videos?.small?.url || item.videos?.medium?.url}
//               className="w-full h-full object-cover"
//               muted
//               loop
//             />
//           ) : (
//             <Image
//               src={item.webformatURL || item.previewURL}
//               alt={item.tags}
//               fill
//               className="object-cover"
//               onError={() => setImageError(true)}
//             />
//           )}
//         </div>
//         <div className="mt-3 px-1">
//           <h4 className="text-white text-sm font-medium mb-2 line-clamp-1">
//             {item.tags?.split(',')[0] || 'Untitled Asset'}
//           </h4>
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
//                 {item.userImageURL && !imageError ? (
//                   <img
//                     src={item.userImageURL}
//                     alt={item.user}
//                     className="w-full h-full object-cover"
//                     onError={() => setImageError(true)}
//                   />
//                 ) : (
//                   <span className="text-white text-xs">
//                     {item.user?.charAt(0).toUpperCase() || 'U'}
//                   </span>
//                 )}
//               </div>
//               <Link 
//                 href={`/designer/${encodeURIComponent(item.user)}`}
//                 onClick={(e) => e.stopPropagation()}
//                 className="text-[#D1D5DB] text-xs hover:underline"
//               >
//                 {item.user || 'Unknown'}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const DesignerProfile = () => {
//     const [imageError, setImageError] = useState(false);
    
//     return (
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center overflow-hidden">
//           {asset.userImageURL && !imageError ? (
//             <img
//               src={asset.userImageURL}
//               alt={asset.user}
//               className="w-full h-full object-cover"
//               onError={() => setImageError(true)}
//             />
//           ) : (
//             <span className="text-white font-medium">
//               {asset.user?.charAt(0).toUpperCase() || 'U'}
//             </span>
//           )}
//         </div>
//         <div className="flex-1 min-w-0">
//           <p className="text-[#D1D5DB] text-sm truncate">Created by</p>
//           <Link 
//             href={`/designer/${encodeURIComponent(asset.user)}`}
//             className="text-white font-medium truncate hover:underline"
//           >
//             {asset.user || 'Unknown'}
//           </Link>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="flex justify-center items-start bg-[#121212] w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8 min-h-screen">
//       <div className="w-full max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
//         {/* Main Asset Section */}
//         <div className="flex flex-col lg:flex-row w-full bg-[#1d1d1d] rounded-xl shadow-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
//           {/* Left - Asset Preview */}
//           <div className="flex-1 w-full min-w-0">
//             {asset.type === 'video' ? (
//               <video
//                 src={asset.videos?.large?.url}
//                 className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] shadow-lg bg-[#2d2d2d]"
//                 controls
//                 autoPlay
//                 muted
//                 loop
//               />
//             ) : (
//               <div className="relative w-full h-0 pb-[56.25%] sm:pb-[75%] md:pb-[66.66%] lg:pb-[75%] xl:pb-[66.66%]">
//                 <Image
//                   src={asset.largeImageURL || asset.webformatURL}
//                   alt={title}
//                   fill
//                   className="object-contain rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[14px] xl:rounded-[16px] shadow-lg"
//                   priority
//                 />
//               </div>
//             )}
//           </div>

//           {/* Right - Asset Details */}
//           <div className="w-full lg:w-[320px] xl:w-[350px] 2xl:w-[400px] flex flex-col">
//             <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
//               <div className="flex flex-col items-center gap-1">
//                 <button
//                   onClick={handleLike}
//                   className={`p-2 sm:p-3 md:p-4 rounded-lg transition-colors ${
//                     liked ? 'text-red-500 bg-[#ef444411]' : 'text-[#9CA3AF] hover:bg-[#2d2d2d]'
//                   }`}
//                 >
//                   {liked ? (
//                     <FaHeart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   ) : (
//                     <FaRegHeart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                   )}
//                 </button>
//                 <span className="text-[#9CA3AF] text-xs">{likeCount}</span>
//               </div>

//               <div className="flex flex-col items-center gap-1">
//                 <button 
//                   onClick={copyToClipboard}
//                   className="p-2 sm:p-3 md:p-4 text-[#9CA3AF] rounded-lg hover:bg-[#2d2d2d] transition-colors"
//                 >
//                   <FaRegShareSquare className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                 </button>
//               </div>
//               <div className="flex items-center gap-1 text-[#9CA3AF] text-xs">
//                 <FiEye className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//                 <span>{asset.views || 0}</span>
//               </div>
//             </div>

//             <DesignerProfile />

//             <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">
//               {title}
//             </h2>

//             <div className="relative ">
//               <button
//                 onClick={() =>
//                   asset.type === 'video' ? handleDownload() : setShowFormatOptions(!showFormatOptions)
//                 }
//                 className="w-50 py-2 sm:py-3 md:py-4 bg-signup-gradient text-[#1d1d1d] font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 sm:gap-3"
//               >
//                 <FiDownload className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
//                 <span className="text-xs sm:text-sm md:text-base">Download</span>
//               </button>

//               {showFormatOptions && asset.type !== 'video' && (
//                 <div className="absolute top-full mt-2 w-full bg-[#2d2d2d] rounded-lg shadow-lg z-10 overflow-hidden border border-[#3d3d3d]">
//                   <button
//                     onClick={() => handleDownload('jpg')}
//                     className="w-full py-2 px-4 text-white hover:bg-[#3d3d3d] text-left transition-colors text-xs sm:text-sm md:text-base"
//                   >
//                     Download as JPG
//                   </button>
//                   <div className="border-t border-[#3d3d3d]"></div>
//                   <button
//                     onClick={() => handleDownload('png')}
//                     className="w-full py-2 px-4 text-white hover:bg-[#3d3d3d] text-left transition-colors text-xs sm:text-sm md:text-base"
//                   >
//                     Download as PNG
//                   </button>
//                   <div className="border-t border-[#3d3d3d]"></div>
//                   <button
//                     onClick={() => handleDownload('svg')}
//                     className="w-full py-2 px-4 text-white hover:bg-[#3d3d3d] text-left transition-colors text-xs sm:text-sm md:text-base"
//                   >
//                     Download as SVG
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* More by Designer Section */}
//         {moreAssets.length > 0 && (
//           <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full px-2 sm:px-0">
//             <div className="max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2 sm:px-0">
//                 More by {asset.user}
//               </h3>
//               {moreAssetsLoading ? (
//                 <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
//                   {[...Array(4)].map((_, i) => (
//                     <div key={i} className="animate-pulse">
//                       <div className="w-full aspect-video bg-[#2d2d2d] rounded-lg"></div>
//                       <div className="mt-2 sm:mt-3 h-3 sm:h-4 bg-[#2d2d2d] rounded w-3/4"></div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
//                   {moreAssets.map((item) => (
//                     <RelatedAssetCard key={item.id} item={item} />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* You Might Also Like Section */}
//         {relatedAssets.length > 0 && (
//           <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full px-2 sm:px-0">
//             <div className="max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2 sm:px-0">
//                 You Might Also Like
//               </h3>
//               {relatedLoading ? (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
//                   {[...Array(6)].map((_, i) => (
//                     <div key={i} className="animate-pulse">
//                       <div className="w-full aspect-video bg-[#2d2d2d] rounded-lg"></div>
//                       <div className="mt-2 sm:mt-3 h-3 sm:h-4 bg-[#2d2d2d] rounded w-3/4"></div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
//                   {relatedAssets.map((item) => (
//                     <RelatedAssetCard key={item.id} item={item} />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiDownload, FiEye } from 'react-icons/fi';
import { FaRegHeart, FaHeart, FaRegShareSquare } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

export default function AssetPage() {
  const { id } = useParams();
  const router = useRouter();
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showFormatOptions, setShowFormatOptions] = useState(false);
  const [moreAssets, setMoreAssets] = useState([]);
  const [relatedAssets, setRelatedAssets] = useState([]);
  const [moreAssetsLoading, setMoreAssetsLoading] = useState(false);
  const [relatedLoading, setRelatedLoading] = useState(false);

  // Fetch asset data
  useEffect(() => {
    const fetchAsset = async () => {
      try {
        setLoading(true);
        const searchParams = new URLSearchParams(window.location.search);
        const type = searchParams.get('type');

        let apiUrl = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&id=${id}`;
        if (type === 'video') {
          apiUrl = `https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&id=${id}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.hits?.length > 0) {
          const assetData = data.hits[0];
          setAsset({
            ...assetData,
            type,
            tags: assetData.tags || searchParams.get('q') || '',
          });
          setLikeCount(assetData.likes || 0);
        }
      } catch (error) {
        console.error('Error fetching asset:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAsset();
  }, [id]);

  // Fetch related assets
  useEffect(() => {
    if (!asset) return;

    const fetchRelatedAssets = async () => {
      setMoreAssetsLoading(true);
      setRelatedLoading(true);
      
      try {
        // More by same designer
        const moreUrl = asset.type === 'video' 
          ? `https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&username=${asset.user}&per_page=4`
          : `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&username=${asset.user}&per_page=4`;
        
        const moreRes = await fetch(moreUrl);
        const moreData = await moreRes.json();
        setMoreAssets(moreData.hits || []);

        // You might also like
        const relatedUrl = asset.type === 'video'
          ? `https://pixabay.com/api/videos/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${encodeURIComponent(asset.tags?.split(',')[0] || '')}&per_page=6`
          : `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&q=${encodeURIComponent(asset.tags?.split(',')[0] || '')}&per_page=6`;
        
        const relatedRes = await fetch(relatedUrl);
        const relatedData = await relatedRes.json();
        setRelatedAssets(relatedData.hits || []);
      } catch (error) {
        console.error('Error fetching related assets:', error);
        setMoreAssets([]);
        setRelatedAssets([]);
      } finally {
        setMoreAssetsLoading(false);
        setRelatedLoading(false);
      }
    };

    fetchRelatedAssets();
  }, [asset]);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const forceDownload = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleDownload = (format = null) => {
    if (!asset) return;

    const title = asset.tags?.split(',')[0] || 'download';
    const cleanTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);

    if (asset.type === 'video') {
      const videoUrl = asset.videos?.large?.url;
      if (videoUrl) {
        forceDownload(videoUrl, `${cleanTitle}.mp4`);
      }
    } else {
      let downloadUrl = asset.largeImageURL || asset.webformatURL;
      let extension = format || 'jpg';
      forceDownload(downloadUrl, `${cleanTitle}.${extension}`);
    }

    setShowFormatOptions(false);
  };

  const handleAssetClick = (assetId, type, query) => {
    router.push(`/asset/${assetId}?type=${type || 'photo'}&q=${encodeURIComponent(query || '')}`);
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('Link copied to clipboard!');
      })
      .catch(() => {
        toast.error('Failed to copy link');
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-[50vh] bg-[#1d1d1d] rounded-xl">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-[#2d2d2d] rounded-full mb-4"></div>
          <div className="h-4 bg-[#2d2d2d] rounded w-32"></div>
        </div>
      </div>
    );
  }

  if (!asset) {
    return (
      <div className="flex items-center justify-center w-full min-h-[50vh] bg-[#1d1d1d] rounded-xl">
        <div className="text-center px-4">
          <div className="text-red-500 text-xl mb-4">Asset not found</div>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-signup-gradient text-white rounded-lg transition-colors hover:opacity-90"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  const title = asset.tags.split(',')[0] || 'Untitled Asset';

  const RelatedAssetCard = ({ item }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <div 
        className="w-full cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => handleAssetClick(item.id, item.type || (item.videos ? 'video' : 'photo'), item.tags)}
      >
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          {item.type === 'video' || item.videos ? (
            <video
              src={item.videos?.small?.url || item.videos?.medium?.url}
              className="w-full h-full object-cover"
              muted
              loop
            />
          ) : (
            <Image
              src={item.webformatURL || item.previewURL}
              alt={item.tags}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          )}
        </div>
        <div className="mt-3 px-1">
          <h4 className="text-white text-sm font-medium mb-2 line-clamp-1">
            {item.tags?.split(',')[0] || 'Untitled Asset'}
          </h4>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center overflow-hidden">
                {item.userImageURL && !imageError ? (
                  <img
                    src={item.userImageURL}
                    alt={item.user}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className="text-white text-xs">
                    {item.user?.charAt(0).toUpperCase() || 'U'}
                  </span>
                )}
              </div>
              <Link 
                href={`/designer/${encodeURIComponent(item.user)}`}
                onClick={(e) => e.stopPropagation()}
                className="text-[#D1D5DB] text-xs hover:underline"
              >
                {item.user || 'Unknown'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DesignerProfile = () => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center overflow-hidden">
          {asset.userImageURL && !imageError ? (
            <img
              src={asset.userImageURL}
              alt={asset.user}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-white font-medium">
              {asset.user?.charAt(0).toUpperCase() || 'U'}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-[#D1D5DB] truncate">Created by</p>
          <Link 
            href={`/designer/${encodeURIComponent(asset.user)}`}
            className="text-sm sm:text-base font-medium text-white truncate hover:underline"
          >
            {asset.user || 'Unknown'}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-start bg-[#121212] w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8 min-h-screen">
      <div className="w-full max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
        {/* Main Asset Section */}
        <div className="flex flex-col lg:flex-row w-full bg-[#1d1d1d] rounded-xl shadow-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Left - Asset Preview */}
          <div className="flex-1 w-full min-w-0">
            {asset.type === 'video' ? (
              <div className="relative w-full aspect-video sm:aspect-auto">
                <video
                  src={asset.videos?.large?.url}
                  className="w-full h-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-lg bg-[#2d2d2d]"
                  controls
                  autoPlay
                  muted
                  loop
                />
              </div>
            ) : (
              <div className="relative w-full aspect-square sm:aspect-video md:aspect-[4/3] lg:aspect-video">
                <Image
                  src={asset.largeImageURL || asset.webformatURL}
                  alt={title}
                  fill
                  className="object-contain rounded-lg shadow-lg"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                />
              </div>
            )}
          </div>

          {/* Right - Asset Details */}
          <div className="w-full lg:w-[320px] xl:w-[350px] 2xl:w-[400px] flex flex-col">
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              <div className="flex flex-col items-center gap-1">
                <button
                  onClick={handleLike}
                  className={`p-2 sm:p-3 md:p-4 rounded-lg transition-colors ${
                    liked ? 'text-red-500 bg-[#ef444411]' : 'text-[#9CA3AF] hover:bg-[#2d2d2d]'
                  }`}
                >
                  {liked ? (
                    <FaHeart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  ) : (
                    <FaRegHeart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  )}
                </button>
                <span className="text-[#9CA3AF] text-xs">{likeCount}</span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <button 
                  onClick={copyToClipboard}
                  className="p-2 sm:p-3 md:p-4 text-[#9CA3AF] rounded-lg hover:bg-[#2d2d2d] transition-colors"
                >
                  <FaRegShareSquare className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </button>
              </div>
              <div className="flex items-center gap-1 text-[#9CA3AF] text-xs">
                <FiEye className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                <span>{asset.views || 0}</span>
              </div>
            </div>

            <DesignerProfile />

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight">
              {title}
            </h2>

            <div className="relative mt-auto">
              <button
                onClick={() =>
                  asset.type === 'video' ? handleDownload() : setShowFormatOptions(!showFormatOptions)
                }
                className="w-full py-2 sm:py-3 md:py-4 bg-signup-gradient text-[#1d1d1d] font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 sm:gap-3"
              >
                <FiDownload className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                <span className="text-xs sm:text-sm md:text-base">Download</span>
              </button>

              {showFormatOptions && asset.type !== 'video' && (
                <div className="absolute top-full mt-2 w-full bg-[#2d2d2d] rounded-lg shadow-lg z-10 overflow-hidden border border-[#3d3d3d]">
                  <button
                    onClick={() => handleDownload('jpg')}
                    className="w-full py-2 px-4 text-white hover:bg-[#3d3d3d] text-left transition-colors text-xs sm:text-sm md:text-base"
                  >
                    Download as JPG
                  </button>
                  <div className="border-t border-[#3d3d3d]"></div>
                  <button
                    onClick={() => handleDownload('png')}
                    className="w-full py-2 px-4 text-white hover:bg-[#3d3d3d] text-left transition-colors text-xs sm:text-sm md:text-base"
                  >
                    Download as PNG
                  </button>
                  <div className="border-t border-[#3d3d3d]"></div>
                  <button
                    onClick={() => handleDownload('svg')}
                    className="w-full py-2 px-4 text-white hover:bg-[#3d3d3d] text-left transition-colors text-xs sm:text-sm md:text-base"
                  >
                    Download as SVG
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* More by Designer Section */}
        {moreAssets.length > 0 && (
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full px-2 sm:px-0">
            <div className="max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2 sm:px-0">
                More by {asset.user}
              </h3>
              {moreAssetsLoading ? (
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="w-full aspect-video bg-[#2d2d2d] rounded-lg"></div>
                      <div className="mt-2 sm:mt-3 h-3 sm:h-4 bg-[#2d2d2d] rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {moreAssets.map((item) => (
                    <RelatedAssetCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* You Might Also Like Section */}
        {relatedAssets.length > 0 && (
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full px-2 sm:px-0">
            <div className="max-w-[1280px] 2xl:max-w-[1536px] mx-auto">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2 sm:px-0">
                You Might Also Like
              </h3>
              {relatedLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="w-full aspect-video bg-[#2d2d2d] rounded-lg"></div>
                      <div className="mt-2 sm:mt-3 h-3 sm:h-4 bg-[#2d2d2d] rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  {relatedAssets.map((item) => (
                    <RelatedAssetCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}