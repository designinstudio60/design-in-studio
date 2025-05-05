'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';
import { FaRegHeart, FaHeart, FaRegShareSquare } from 'react-icons/fa';

export default function AssetPage() {
  const { id } = useParams();
  const router = useRouter();
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 768, height: 576 });

  useEffect(() => {
    const fetchAsset = async () => {
      try {
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
            tags: searchParams.get('q') || ''
          });

          // Calculate aspect ratio for dynamic sizing
          if (assetData.imageWidth && assetData.imageHeight) {
            const aspectRatio = assetData.imageWidth / assetData.imageHeight;
            const maxWidth = 768;
            const calculatedHeight = maxWidth / aspectRatio;
            setDimensions({
              width: maxWidth,
              height: Math.min(calculatedHeight, 576) // Cap height at 576
            });
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAsset();
  }, [id]);

  const handleDownload = () => {
    const url = asset.largeImageURL || asset.videos?.large?.url;
    if (!url) return;
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `asset-${id}.${asset.type === 'video' ? 'mp4' : 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-160 bg-[#1d1d1d] rounded-xl">
        <p>Loading...</p>
      </div>
    );
  }

  if (!asset) {
    return (
      <div className="flex items-center justify-center w-full h-[672px] bg-[#1d1d1d] rounded-xl">
        <p>Asset not found</p>
      </div>
    );
  }

  const title = asset.tags.split(',')[0] || '3D Textured Interface Elements';

  return (
    <div className="flex justify-center items-center bg-[#121212] w-full p-8">
      {/* Main container */}
      <div className="flex w-full max-w-[1280px] h-[672px] bg-[#1d1d1d] rounded-xl shadow-lg p-5">
        {/* Left section - Asset preview with rounded corners */}
        <div 
          className="flex items-center justify-center overflow-hidden ml-5 rounded-[16px] bg-[#2d2d2d]"
          style={{
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            minWidth: '300px' // Ensure it doesn't get too small
          }}
        >
          {asset.type === 'video' ? (
            <video
              src={asset.videos?.large?.url}
              className="w-full h-full object-cover rounded-[16px]"
              controls
              autoPlay
              muted
              loop
            />
          ) : (
            <Image
              src={asset.largeImageURL || asset.webformatURL}
              alt={title}
              width={dimensions.width}
              height={dimensions.height}
              className="object-contain rounded-[16px]"
              style={{
                width: '100%',
                height: '100%'
              }}
              priority
            />
          )}
        </div>

        {/* Right section - Actions */}
        <div className="w-[305px] flex flex-col ml-16 mt-12">
          {/* Like and Share buttons */}
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-3 rounded-lg ${liked ? 'text-red-500' : 'text-gray-400'} hover:bg-[#2d2d2d]`}
            >
              {liked ? (
                <FaHeart className="h-6 w-6" />
              ) : (
                <FaRegHeart className="h-6 w-6" />
              )}
            </button>
            
            <button className="p-3 text-gray-400 rounded-lg hover:bg-[#2d2d2d]">
              <FaRegShareSquare className="h-6 w-6" />
            </button>
          </div>

          {/* Designer name */}
          <p className="text-gray-400 text-sm mb-1">by {asset.user}</p>

          {/* Asset title */}
          <h2 className="text-xl font-medium text-white mb-12">{title}</h2>

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="w-52 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <FiDownload className="h-5 w-5" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}