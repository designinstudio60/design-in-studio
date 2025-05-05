
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

          if (assetData.imageWidth && assetData.imageHeight) {
            const aspectRatio = assetData.imageWidth / assetData.imageHeight;
            const maxWidth = 768;
            const calculatedHeight = maxWidth / aspectRatio;
            setDimensions({
              width: maxWidth,
              height: Math.min(calculatedHeight, 576)
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
      <div className="flex items-center justify-center w-full h-168 bg-[#1d1d1d] rounded-xl">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-[#2d2d2d] rounded-full mb-4"></div>
          <div className="h-4 bg-[#2d2d2d] rounded w-32"></div>
        </div>
      </div>
    );
  }

  if (!asset) {
    return (
      <div className="flex items-center justify-center w-full h-168 bg-[#1d1d1d] rounded-xl">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Asset not found</div>
          <button 
            onClick={() => router.back()}
            className="px-6 py-2 bg-[#3B82F6] text-white rounded-lg  transition-colors"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  const title = asset.tags.split(',')[0] || '3D Textured Interface Elements';

  return (
    <div className="flex justify-center items-center bg-[#121212] w-full p-8">
      {/* Main container */}
      <div className="flex w-full max-w-7xl bg-[#1d1d1d] rounded-xl shadow-xl p-10 gap-16">
        {/* Left section - Asset preview */}
        <div className="flex-1 max-w-[768px]">
          {asset.type === 'video' ? (
            <video
              src={asset.videos?.large?.url}
              className="w-full h-auto max-h-[576px] object-contain rounded-[16px] shadow-lg bg-[#2d2d2d]"
              style={{
                aspectRatio: `${dimensions.width}/${dimensions.height}`
              }}
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
              className="w-full h-auto max-h-[576px] object-contain rounded-[16px] shadow-lg bg-[#2d2d2d]"
              style={{
                aspectRatio: `${dimensions.width}/${dimensions.height}`
              }}
              priority
            />
          )}
        </div>

        {/* Right section - Actions */}
        <div className="w-[305px] flex flex-col">
          {/* Like and Share buttons */}
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-4 rounded-lg transition-colors ${
                liked ? 'text-red-500 bg-[#ef444411]' : 'text-[#9CA3AF] hover:bg-[#2d2d2d]'
              }`}
            >
              {liked ? (
                <FaHeart className="h-6 w-6" />
              ) : (
                <FaRegHeart className="h-6 w-6" />
              )}
            </button>
            
            <button className="p-4 text-[#9CA3AF] rounded-lg hover:bg-[#2d2d2d] transition-colors">
              <FaRegShareSquare className="h-6 w-6" />
            </button>
          </div>

          {/* Designer name */}
          <p className="text-[#D1D5DB] text-lg mb-2">by {asset.user}</p>

          {/* Asset title */}
          <h2 className="text-2xl font-semibold text-white mb-12 leading-tight">{title}</h2>

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="w-full py-4 bg-signup-gradient text-[#1d1d1d] font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
          >
            <FiDownload className="h-5 w-5" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}