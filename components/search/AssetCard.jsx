'use client';
import { useRouter } from "next/navigation";

export default function AssetCard({ item, width, height, type }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/asset/${item.id}?type=${type}&q=${encodeURIComponent(item.tags || '')}`);
  };

  return (
    <div
      className="bg-[#1D1D1D] rounded-[6px] overflow-hidden cursor-pointer"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={handleClick}
    >
      {type === "video" ? (
        <video
          src={item.videos?.small?.url}
          className="w-full h-full object-cover"
          poster={item.videos?.small?.thumbnail}
          muted
          loop
        />
      ) : (
        <img
          src={item.webformatURL || item.previewURL}
          alt={item.tags || "Untitled image"}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

