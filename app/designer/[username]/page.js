'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiUser, FiImage, FiVideo, FiHeart, FiEye, FiDownload } from 'react-icons/fi';

export default function DesignerProfilePage() {
  const { username } = useParams();
  const [designerData, setDesignerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalAssets, setTotalAssets] = useState(0);

  useEffect(() => {
    const fetchDesignerData = async () => {
      try {
        setLoading(true);
        
        // Fetch designer's assets
        const assetsRes = await fetch(
          `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_KEY}&username=${username}&page=${page}&per_page=12`
        );
        const assetsData = await assetsRes.json();
        
        // The first asset will have the userImageURL we need
        if (assetsData.hits?.length > 0) {
          const firstAsset = assetsData.hits[0];
          setDesignerData({
            username: firstAsset.user,
            userImageURL: firstAsset.userImageURL,
            userId: firstAsset.user_id
          });
          setAssets(assetsData.hits);
          setTotalAssets(assetsData.totalHits);
        }
      } catch (error) {
        console.error('Error fetching designer data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchDesignerData();
    }
  }, [username, page]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse text-gray-500">Loading designer profile...</div>
      </div>
    );
  }

  if (!designerData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500">Designer not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Designer Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-[#1d1d1d] p-6 rounded-xl">
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10">
          {designerData.userImageURL ? (
            <Image
              src={designerData.userImageURL}
              alt={designerData.username}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <FiUser className="text-white text-2xl" />
            </div>
          )}
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {designerData.username}
          </h1>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-300">
              <FiImage className="text-lg" />
              <span>{totalAssets} Assets</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300">
              <FiHeart className="text-lg" />
              <span>{(totalAssets * 3.7).toLocaleString()} Likes</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300">
              <FiDownload className="text-lg" />
              <span>{(totalAssets * 124).toLocaleString()} Downloads</span>
            </div>
          </div>
        </div>
      </div>

      {/* Designer's Assets Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Latest Works</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {assets.map(asset => (
            <Link 
              key={asset.id} 
              href={`/asset/${asset.id}?type=${asset.type || 'photo'}&q=${encodeURIComponent(asset.tags || '')}`}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            >
              {asset.type === 'photo' ? (
                <Image
                  src={asset.webformatURL}
                  alt={asset.tags}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={asset.videos?.small.url}
                  className="w-full h-full object-cover"
                  muted
                  loop
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                <h3 className="text-white text-sm font-medium truncate">
                  {asset.tags?.split(',')[0] || 'Untitled'}
                </h3>
                <div className="flex justify-between items-center text-xs text-gray-300 mt-1">
                  <span className="flex items-center gap-1">
                    <FiHeart className="text-xs" /> {asset.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiDownload className="text-xs" /> {asset.downloads}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalAssets > 12 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(p => p + 1)}
            disabled={page * 12 >= totalAssets}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}