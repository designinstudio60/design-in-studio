// // app/search/page.js
// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";
// import HeroSection from "@/components/HeroSection";

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q");
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (query) {
//       fetchResults(query);
//     }
//   }, [query]);

//   const fetchResults = async (searchQuery) => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       const response = await axios.get(
//         `https://pixabay.com/api/?key=31154472-86d52cea42c648c0ceffbd96b&q=${encodeURIComponent(searchQuery)}&image_type=photo&per_page=20`
//       );
//       setResults(response.data.hits);
//     } catch (err) {
//       setError(err.message);
//       console.error("Search error:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0F0F0F]">
//       <HeroSection />
      
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {isLoading && (
//           <div className="text-center text-white py-12">
//             <p>Loading results for "{query}"...</p>
//           </div>
//         )}
        
//         {error && (
//           <div className="text-center text-red-500 py-12">
//             <p>Error: {error}</p>
//           </div>
//         )}
        
//         {results.length > 0 && (
//           <>
//             <h2 className="text-white text-2xl font-bold mb-6">
//               Results for "{query}"
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {results.map((image) => (
//                 <div key={image.id} className="bg-[#1D1D1D] rounded-lg overflow-hidden">
//                   <img
//                     src={image.webformatURL}
//                     alt={image.tags}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <p className="text-white text-sm truncate">{image.tags}</p>
//                     <div className="flex justify-between items-center mt-2 text-gray-400 text-xs">
//                       <span>Likes: {image.likes}</span>
//                       <span>Downloads: {image.downloads}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
        
//         {!isLoading && results.length === 0 && query && (
//           <div className="text-center text-white py-12">
//             <p>No results found for "{query}"</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/HeroSection";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const type = searchParams.get("type") || "all";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      fetchResults(query, type);
    }
  }, [query, type]);

  const fetchResults = async (searchQuery, assetType) => {
    setIsLoading(true);
    setError(null);
    
    try {
      let apiUrl;
      
      // Handle SVG specially by adding "svg" to the query
      if (assetType === "svg") {
        apiUrl = `https://pixabay.com/api/?key=31154472-86d52cea42c648c0ceffbd96b&q=${encodeURIComponent(searchQuery)}+svg&image_type=vector`;
      } 
      // Handle videos through the videos API
      else if (assetType === "video") {
        apiUrl = `https://pixabay.com/api/videos/?key=31154472-86d52cea42c648c0ceffbd96b&q=${encodeURIComponent(searchQuery)}`;
      }
      // Handle music (example - would need actual music API)
      else if (assetType === "music") {
        apiUrl = `https://pixabay.com/api/?key=31154472-86d52cea42c648c0ceffbd96b&q=${encodeURIComponent(searchQuery)}&image_type=photo`;
        // Note: Pixabay doesn't have music API, this is just placeholder
      }
      // Default case for other image types
      else {
        apiUrl = `https://pixabay.com/api/?key=31154472-86d52cea42c648c0ceffbd96b&q=${encodeURIComponent(searchQuery)}&image_type=${assetType}`;
      }

      const response = await axios.get(apiUrl);
      setResults(assetType === "video" ? response.data.hits : response.data.hits);
    } catch (err) {
      setError(err.message);
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Display loading, error, or results */}
        {isLoading && <div>Loading...</div>}
        {error && <div className="text-red-500">Error: {error}</div>}
        
        {results.length > 0 && (
          <>
            <h2 className="text-white text-2xl mb-6">
              Showing {type === "all" ? "all assets" : type} for "{query}"
            </h2>
            
            {/* Results display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map((item) => (
                <div key={item.id} className="bg-[#1D1D1D] rounded-lg overflow-hidden">
                  {type === "video" ? (
                    <video 
                      src={item.videos.small.url} 
                      className="w-full h-48 object-cover"
                      poster={item.videos.small.thumbnail}
                      controls
                    />
                  ) : (
                    <img
                      src={item.webformatURL || item.previewURL}
                      alt={item.tags}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-white text-sm truncate">{item.tags}</p>
                    <div className="flex justify-between mt-2 text-gray-400 text-xs">
                      <span>{type === "video" ? "Views" : "Likes"}: {item.views || item.likes}</span>
                      <span>Downloads: {item.downloads}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}