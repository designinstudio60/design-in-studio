// import AssetCard from "./AssetCard";

// const defaultLayout = { width: 402, height: 384 };

// export default function ResultColumn({ items = [], layouts = [], type }) {
//   // If no layouts provided, use default layout for all items
//   const effectiveLayouts = layouts.length > 0 ? layouts : 
//     Array(items.length).fill(defaultLayout);

//   return (
//     <div className="flex flex-col gap-[35px]">
//       {items.map((item, index) => {
//         const layout = effectiveLayouts[index] || defaultLayout;
//         return (
//           <AssetCard
//             key={item.id}
//             item={item}
//             width={layout.width}
//             height={layout.height}
//             type={type}
//           />
//         );
//       })}
//     </div>
//   );
// }

import AssetCard from "./AssetCard";

const defaultLayout = { width: 402, height: 384 };

export default function ResultColumn({ items = [], layouts = [], type }) {
  const effectiveLayouts = layouts.length > 0 ? layouts : Array(items.length).fill(defaultLayout);

  return (
    <div className="flex flex-col gap-[35px]">
      {items.map((item, index) => {
        const layout = effectiveLayouts[index] || defaultLayout;
        return (
          <AssetCard
            key={item.id}
            item={item}
            width={layout.width}
            height={layout.height}
            type={type}
          />
        );
      })}
    </div>
  );
}
