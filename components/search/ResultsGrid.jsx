

// 'use client';
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import ResultColumn from "./ResultColumn";


//     const columnLayouts = [
//           [
//             { width: 402.74, height: 576 },
//             { width: 402.74, height: 384 },
//             { width: 402.74, height: 384 },
//             { width: 402.74, height: 282 },
//             { width: 402.74, height: 517 },
//             { width: 402.74, height: 384 },
//             { width: 402.74, height: 384 },
//             { width: 402.74, height: 612 },
//             { width: 403, height: 478 },
//           ],
//           [
//             { width: 402.74, height: 384 },
//             { width: 402.74, height: 576 },
//             { width: 402.74, height: 282 },
//             { width: 402.74, height: 282 },
//             { width: 402.74, height: 419 },
//             { width: 402.74, height: 576 },
//             { width: 402.74, height: 282 },
//             { width: 402.74, height: 282},
//             { width: 402.74, height: 404 },
//             { width: 402.74, height: 478 }
//           ],
//           [
//             { width: 402.74, height: 384 },
//             { width: 400.75, height: 295 },
//             { width: 399.75, height: 295 },
//             { width: 402.74, height: 576 },
//             { width: 402.74, height: 384 },
//             { width: 400.75, height: 295 },
//             { width: 399.75, height: 295 },
//             { width: 402.74, height: 576 },
//             { width: 402.74, height: 396 },
//             { width: 403, height: 465 }
//           ]
//         ];
        

// export default function ResultsGrid({
//   query,
//   type,
//   page,
//   results = [],
//   isLoading,
//   error,
//   onPageChange
// }) {
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <p className="text-white">Loading results for "{query}"...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <p className="text-red-500">Error: {error}</p>
//       </div>
//     );
//   }

//   if (results.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <p className="text-white">No results found for "{query}"</p>
//       </div>
//     );
//   }

//   return (
//     <div className="rounded-md overflow-hidden mt-12.75 mx-auto">
//       <div className="flex justify-center gap-8.5">
//         <ResultColumn 
//           items={results.slice(0, 9)} 
//           layouts={columnLayouts[0]} 
//           type={type} 
//         />
//         <ResultColumn 
//           items={results.slice(9, 19)} 
//           layouts={columnLayouts[1]} 
//           type={type} 
//         />
//         <ResultColumn 
//           items={results.slice(19, 29)} 
//           layouts={columnLayouts[2]} 
//           type={type} 
//         />
//       </div>

//       <div className="flex justify-center p-6">
//         <div className="flex items-center gap-2  rounded-[6px] p-2">
//           <button
//             disabled={page <= 1}
//             onClick={() => onPageChange(page - 1)}
//             className="flex items-center justify-center w-10 h-10  text-white rounded-[6px] hover:bg-[#4D4D4D] disabled:opacity-50"
//           >
//             <FiChevronLeft />
//           </button>
//           <span className="px-4 text-white">Page {page}</span>
//           <button
//             disabled={results.length < 29}
//             onClick={() => onPageChange(page + 1)}
//             className="flex items-center justify-center w-10 h-10 bg-[#3D3D3D] text-white rounded-[6px] hover:bg-[#4D4D4D] disabled:opacity-50"
//           >
//             <FiChevronRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ResultColumn from "./ResultColumn";
import { useState, useEffect } from 'react';

const columnLayouts = [
  [
    { width: 402.74, height: 576 },
    { width: 402.74, height: 384 },
    { width: 402.74, height: 384 },
    { width: 402.74, height: 282 },
    { width: 402.74, height: 517 },
    { width: 402.74, height: 384 },
    { width: 402.74, height: 384 },
    { width: 402.74, height: 612 },
    { width: 403, height: 478 },
  ],
  [
    { width: 402.74, height: 384 },
    { width: 402.74, height: 576 },
    { width: 402.74, height: 282 },
    { width: 402.74, height: 282 },
    { width: 402.74, height: 419 },
    { width: 402.74, height: 576 },
    { width: 402.74, height: 282 },
    { width: 402.74, height: 282},
    { width: 402.74, height: 404 },
    { width: 402.74, height: 478 }
  ],
  [
    { width: 402.74, height: 384 },
    { width: 400.75, height: 295 },
    { width: 399.75, height: 295 },
    { width: 402.74, height: 576 },
    { width: 402.74, height: 384 },
    { width: 400.75, height: 295 },
    { width: 399.75, height: 295 },
    { width: 402.74, height: 576 },
    { width: 402.74, height: 396 },
    { width: 403, height: 465 }
  ]
];

const SkeletonLoader = () => (
  <div className="flex justify-center gap-8.5">
    {[0, 1, 2].map((col) => (
      <div key={col} className="flex flex-col gap-[35px]">
        {columnLayouts[col].map((layout, i) => (
          <div 
            key={i} 
            className="bg-[#1D1D1D] rounded-[6px] animate-pulse"
            style={{ 
              width: `${layout.width}px`, 
              height: `${layout.height}px` 
            }}
          />
        ))}
      </div>
    ))}
  </div>
);

export default function ResultsGrid({
  query,
  type,
  page,
  results = [],
  isLoading,
  error,
  onPageChange
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <SkeletonLoader />;
  }

  if (isLoading) {
    return (
      <div className="rounded-md overflow-hidden mt-12.75 mx-auto">
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center p-4">
        <p className="text-red-500 text-lg mb-2">Error loading results</p>
        <p className="text-gray-400">{error}</p>
        <button 
          onClick={() => onPageChange(page)}
          className="mt-4 px-4 py-2 bg-[#3D3D3D] text-white rounded-md hover:bg-[#4D4D4D]"
        >
          Retry
        </button>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center p-4">
        <p className="text-white text-lg mb-2">No results found for "{query}"</p>
        <p className="text-gray-400">Try different search terms or filters</p>
      </div>
    );
  }

  return (
    <div className="rounded-md overflow-hidden mt-12.75 mx-auto">
      <div className="flex justify-center gap-8.5">
        <ResultColumn 
          items={results.slice(0, 9)} 
          layouts={columnLayouts[0]} 
          type={type} 
        />
        <ResultColumn 
          items={results.slice(9, 19)} 
          layouts={columnLayouts[1]} 
          type={type} 
        />
        <ResultColumn 
          items={results.slice(19, 29)} 
          layouts={columnLayouts[2]} 
          type={type} 
        />
      </div>

      <div className="flex justify-center p-6">
        <div className="flex items-center gap-2 rounded-[6px] p-2">
          <button
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className="flex items-center justify-center w-10 h-10 text-white rounded-[6px] hover:bg-[#4D4D4D] disabled:opacity-50 transition-colors"
            aria-label="Previous page"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <span className="px-4 text-white">Page {page}</span>
          <button
            disabled={results.length < 29}
            onClick={() => onPageChange(page + 1)}
            className="flex items-center justify-center w-10 h-10 bg-[#3D3D3D] text-white rounded-[6px] hover:bg-[#4D4D4D] disabled:opacity-50 transition-colors"
            aria-label="Next page"
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}