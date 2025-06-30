import { Suspense } from "react";
import SearchContent from "./searchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
