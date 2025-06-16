
// 'use client';
// import { useRouter } from "next/navigation";
// import { useRef, useState } from "react";
// import Image from 'next/image';

// export default function AssetCard({ item, width, height, type }) {
//   const router = useRouter();
//   const videoRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const handleClick = () => {
//     router.push(`/asset/${item.id}?type=${type}&q=${encodeURIComponent(item.tags || '')}`);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (type === "video" && videoRef.current) {
//       videoRef.current.play()
//         .then(() => setIsVideoPlaying(true))
//         .catch(e => console.error("Video play error:", e));
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     if (type === "video" && videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//       setIsVideoPlaying(false);
//     }
//   };

//   const handleImageError = () => {
//     setHasError(true);
//     setIsLoading(false);
//   };

//   const handleLoad = () => {
//     setIsLoading(false);
//   };

//   const getImageSource = () => {
//     if (type === 'video') {
//       return item.videos?.small?.thumbnail || item.userImageURL;
//     }
//     return item.webformatURL || item.previewURL;
//   };

//   const getFileTypeBadge = () => {
//     const typeMap = {
//       'vector': 'SVG',
//       'svg': 'SVG',
//       'video': 'MP4',
//       'psd': 'PSD',
//       'ai': 'AI',
//       'eps': 'EPS',
//       'photo': 'JPG',
//       'illustration': 'JPG'
//     };
//     return typeMap[type] || type.toUpperCase();
//   };

//   return (
//     <div
//       className="bg-[#121212] rounded-[6px] overflow-hidden cursor-pointer relative group"
//       style={{ width: `${width}px`, height: `${height}px` }}
//       onClick={handleClick}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       role="button"
//       aria-label={`View ${item.tags || 'untitled'} ${type}`}
//       tabIndex="0"
//       onKeyDown={(e) => {
//         if (e.key === 'Enter') {
//           handleClick();
//         }
//       }}
//     >
//       {/* Loading skeleton */}
//       {isLoading && (
//         <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D1D] to-[#2D2D2D] animate-pulse z-10"></div>
//       )}

//       {/* Error state */}
//       {hasError && (
//         <div className="absolute inset-0 bg-red-900/20 flex flex-col items-center justify-center text-white p-4 text-center z-20">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-8 w-8 mb-2 text-red-500"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
//             />
//           </svg>
//           <p className="text-sm">Failed to load media</p>
//         </div>
//       )}

      

//       {/* Video content */}
//       {type === "video" ? (
//         <>
//           <video
//             ref={videoRef}
//             src={item.videos?.small?.url}
//             className="w-full h-full object-cover"
//             poster={item.videos?.small?.thumbnail}
//             muted
//             loop
//             playsInline
//             aria-label={item.tags || 'Untitled video'}
//             onError={handleImageError}
//             onCanPlayThrough={handleLoad}
//           />
//           <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          
//           </div>
//         </>
//       ) : (
//         /* Image content */
//         <>
//           <Image
//             src={getImageSource()}
//             alt={item.tags || "Untitled image"}
//             className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
//             fill
//             sizes={`(max-width: 768px) 100vw, ${width}px`}
//             onLoad={handleLoad}
//             onError={handleImageError}
//             loading="lazy"
//             quality={85}
//           />
//         </>
//       )}

      
      
//     </div>
//   );
// }

'use client';
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Image from 'next/image';

export default function AssetCard({ item, width, height, type }) {
  const router = useRouter();
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    router.push(`/asset/${item.id}?type=${type}&q=${encodeURIComponent(item.tags || '')}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (type === "video" && videoRef.current) {
      videoRef.current.play()
        .then(() => setIsVideoPlaying(true))
        .catch(e => console.error("Video play error:", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const getImageSource = () => {
    if (type === 'video') {
      return item.videos?.small?.thumbnail || item.userImageURL;
    }
    return item.webformatURL || item.previewURL;
  };

  const getFileTypeBadge = () => {
    const typeMap = {
      'vector': 'SVG',
      'svg': 'SVG',
      'video': 'MP4',
      'psd': 'PSD',
      'ai': 'AI',
      'eps': 'EPS',
      'photo': 'JPG',
      'illustration': 'JPG'
    };
    return typeMap[type] || type.toUpperCase();
  };

  return (
    <div
      className="bg-[#121212] rounded-[6px] overflow-hidden cursor-pointer relative group"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      aria-label={`View ${item.tags || 'untitled'} ${type}`}
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D1D1D] to-[#2D2D2D] animate-pulse z-10"></div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-red-900/20 flex flex-col items-center justify-center text-white p-4 text-center z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mb-2 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-sm">Failed to load media</p>
        </div>
      )}

      {/* Video content */}
      {type === "video" ? (
        <>
          <video
            ref={videoRef}
            src={item.videos?.small?.url}
            className="w-full h-full object-cover"
            poster={item.videos?.small?.thumbnail}
            muted
            loop
            playsInline
            aria-label={item.tags || 'Untitled video'}
            onError={handleImageError}
            onCanPlayThrough={handleLoad}
          />
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {/* Video play indicator can go here */}
          </div>
        </>
      ) : (
        /* Image content */
        <>
          <Image
            src={getImageSource()}
            alt={item.tags || "Untitled image"}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            width={width}
            height={height}
            sizes={`(max-width: 768px) 100vw, ${width}px`}
            onLoad={handleLoad}
            onError={handleImageError}
            loading="lazy"
            quality={85}
            unoptimized={true} // Add this to bypass optimization if needed
          />
        </>
      )}
    </div>
  );
}
