// // app/asset/[id]/page.js
// 'use client';
// import { useEffect, useState } from "react";
// import { useParams, useSearchParams, useRouter } from "next/navigation";
// import PreviewLayout from "@/components/search/PreviewLayout";

// export default function AssetPage() {
//   const params = useParams();
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [asset, setAsset] = useState(null);
//   const [relatedAssets, setRelatedAssets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAsset = async () => {
//       try {
//         setLoading(true);
//         const apiKey = process.env.NEXT_PUBLIC_PIXABAY_KEY;
//         const assetType = searchParams.get("type") || "photo";
//         const query = searchParams.get("q") || "";

//         // Fetch the main asset
//         let apiUrl;
//         if (assetType === "video") {
//           apiUrl = `https://pixabay.com/api/videos/?key=${apiKey}&id=${params.id}`;
//         } else {
//           apiUrl = `https://pixabay.com/api/?key=${apiKey}&id=${params.id}`;
//         }

//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         const fetchedAsset = assetType === "video" ? data.hits[0] : data.hits[0];
//         setAsset(fetchedAsset);

//         // Fetch related assets
//         const relatedUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&per_page=8`;
//         const relatedResponse = await fetch(relatedUrl);
//         const relatedData = await relatedResponse.json();
//         setRelatedAssets(relatedData.hits || []);
//       } catch (err) {
//         console.error("Error fetching asset:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (params.id) {
//       fetchAsset();
//     }
//   }, [params.id, searchParams]);

//   if (loading) {
//     return <div className="text-white text-center p-8">Loading...</div>;
//   }

//   if (!asset) {
//     return <div className="text-white text-center p-8">Asset not found</div>;
//   }

//   return (
//     <PreviewLayout 
//       asset={asset} 
//       relatedAssets={relatedAssets} 
//       onClose={() => router.back()} 
//     />
//   );
// }