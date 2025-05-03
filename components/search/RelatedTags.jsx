'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedTags({ tags, onTagSelect }) {
  const [tagOffset, setTagOffset] = useState(0);
  const visibleTags = 8;

  const showPrevTags = () => {
    setTagOffset(prev => Math.max(0, prev - visibleTags));
  };

  const showNextTags = () => {
    setTagOffset(prev => 
      Math.min(tags.length - visibleTags, prev + visibleTags)
    );
  };

  return (
    <div className="mb-6 mt-9">
      <div className="flex items-center gap-3">
        <button 
          onClick={showPrevTags}
          disabled={tagOffset === 0}
          className="p-1 rounded-md  text-white disabled:opacity-50 hover:bg-[#3D3D3D]"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex-1 overflow-hidden">
          <div className="flex gap-[10px]">
            {tags.slice(tagOffset, tagOffset + visibleTags).map((tag) => (
              <button
                key={tag}
                onClick={() => onTagSelect(tag)}
                className="px-4 py-2 bg-[#323232] text-white rounded-md hover:bg-[#3D3D3D] transition-colors whitespace-nowrap"
                style={{ width: '160px', height: '40px' }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <button 
          onClick={showNextTags}
          disabled={tagOffset >= tags.length - visibleTags}
          className="p-1 rounded-md bg-[#323232] text-white disabled:opacity-50 hover:bg-[#3D3D3D]"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}