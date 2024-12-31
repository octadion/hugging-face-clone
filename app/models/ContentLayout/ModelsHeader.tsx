// app/models/ContentLayout/ModelsHeader.tsx
import { FilterSVG, InnerDatasetSVG, SortSVG } from 'ui/svgs'

interface ModelsHeaderProps {
  totalCount: number
  searchQuery: string
  onSearchChange: (query: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function ModelsHeader({ 
  totalCount,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange
}: ModelsHeaderProps) {
  return (
    <div className="mb-4 items-center space-y-3 md:flex md:space-y-0 lg:mb-6">
      <div className="flex items-center text-lg">
        <h1>Models</h1>
        <div className="ml-3 w-16 font-normal text-gray-400">{totalCount}</div>
      </div>
      <div className="flex-1 md:mx-4">
        <div className="relative w-full md:max-w-xs">
          <InnerDatasetSVG />
          <input
            className="w-full rounded-full border border-gray-200 text-sm placeholder-gray-400 shadow-inner outline-none focus:shadow-xl focus:ring-1 focus:ring-inset dark:bg-gray-950 h-7 pl-7"
            placeholder="Filter by name"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      {/* <a href="/search/full-text?type=model" className="btn mr-2 rounded-full text-sm opacity-80 hover:opacity-100">
        <span className="mr-1.5 rounded bg-blue-500/10 px-1 text-xs leading-tight text-blue-700 dark:text-blue-200">
          new
        </span>
        Full-text search
      </a> */}
      <div>
        <button className="btn mr-2 inline-flex text-sm lg:hidden " type="button">
          <FilterSVG />
          Add filters
        </button>
        <div className="relative inline-block">
          <button 
            className="btn w-full cursor-pointer text-sm" 
            type="button"
            onClick={() => onSortChange(sortBy === 'trending' ? 'downloads' : 'trending')}
          >
            <SortSVG />
            Sort: {sortBy === 'trending' ? 'Trending' : 'Downloads'}
          </button>
        </div>
      </div>
    </div>
  )
}