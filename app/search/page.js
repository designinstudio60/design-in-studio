'use client';
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchParams,
  setResults,
  setRelatedTags,
  setLoading,
  setError,
  toggleFilters,
  clearResults,
} from "@/store/searchSlice";
import SearchHeader from "@/components/search/SearchHeader";
import SearchFilters from "@/components/search/SearchFilters";
import RelatedTags from "@/components/search/RelatedTags";
import ResultsGrid from "@/components/search/ResultsGrid";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    query,
    type,
    page,
    results,
    isLoading,
    error,
    totalHits,
    relatedTags,
    showFilters,
  } = useSelector((state) => state.search);

  useEffect(() => {
    const urlQuery = searchParams.get("q");
    const urlType = searchParams.get("type");
    const urlPage = parseInt(searchParams.get("page")) || 1;

    if (urlQuery) {
      dispatch(setSearchParams({ query: urlQuery, type: urlType, page: urlPage }));
      fetchResults(urlQuery, urlType, urlPage);
      fetchRelatedTags(urlQuery);
    } else {
      dispatch(clearResults());
    }
  }, [searchParams]);

  const fetchResults = async (searchQuery, assetType, pageNum) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      dispatch(clearResults());

      let apiUrl;
      const apiKey = process.env.NEXT_PUBLIC_PIXABAY_KEY;

      if (assetType === "svg") {
        apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}+svg&image_type=vector&page=${pageNum}&per_page=29`;
      } else if (assetType === "video") {
        apiUrl = `https://pixabay.com/api/videos/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&page=${pageNum}&per_page=29`;
      } else if (assetType !== "all") {
        apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&image_type=${assetType}&page=${pageNum}&per_page=29`;
      } else {
        apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&page=${pageNum}&per_page=29`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      dispatch(setResults({ results: data.hits || [], totalHits: data.totalHits || 0 }));
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchRelatedTags = async (searchQuery) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_PIXABAY_KEY;
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&per_page=50`
      );
      const data = await response.json();

      const allTags = data.hits.flatMap(item => 
        item.tags ? item.tags.split(", ") : []
      );
      dispatch(setRelatedTags([...new Set(allTags)]));
    } catch (err) {
      console.error("Error fetching related tags:", err);
    }
  };

  const handleSearch = (searchTerm, assetType) => {
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}&type=${assetType}&page=1`);
    }
  };

  return (
    <div className="min-h-screen ">
      <div className="flex">
        {showFilters && (
          <div className="w-64 bg-[#121212] border-r border-gray-700 p-6 overflow-y-auto fixed h-[calc(100vh-64px)] mt-16 z-40">
            <SearchFilters 
              currentType={type}
              onClose={() => dispatch(toggleFilters())}
              onSelectType={(type) => {
                router.push(`/search?q=${encodeURIComponent(query)}&type=${type}&page=1`);
                dispatch(toggleFilters());
              }}
            />
          </div>
        )}

        <div className={`flex-1 transition-all duration-300 ${showFilters ? 'ml-64' : 'ml-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <SearchHeader 
              initialQuery={query}
              initialType={type}
              onSearch={handleSearch}
              onFilterToggle={() => dispatch(toggleFilters())}
            />

            {relatedTags.length > 0 && (
              <RelatedTags 
                tags={relatedTags} 
                onTagSelect={(tag) => router.push(`/search?q=${encodeURIComponent(tag)}&type=all&page=1`)} 
              />
            )}

            <ResultsGrid
              query={query}
              type={type}
              page={page}
              results={results}
              isLoading={isLoading}
              error={error}
              onPageChange={(newPage) => router.push(`/search?q=${encodeURIComponent(query)}&type=${type}&page=${newPage}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
