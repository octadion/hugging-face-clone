// app/Models/ContentLayout/ModelsPagination.tsx
import { NextPageSVG, PreviousPageSVG } from 'ui/svgs'

interface ModelsPaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange: (page: number) => void;
}

export function ModelsPagination({
  currentPage,
  hasNext,
  hasPrev,
  onPageChange
}: ModelsPaginationProps) {
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getPageNumbers = () => {
    const pages = []
    const showFirst = currentPage > 2
    const showLast = hasNext

    if (showFirst) {
      pages.push(1)
    }

    if (hasPrev) {
      pages.push(currentPage - 1)
    }
    pages.push(currentPage)
    if (hasNext) {
      pages.push(currentPage + 1)
    }

    return Array.from(new Set(pages))
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav>
      <ul className="flex select-none items-center justify-between space-x-2 text-gray-700 sm:justify-center mt-10 mx-auto">
        <li>
          <button
            className={`flex items-center rounded-lg px-2.5 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 ${
              !hasPrev ? 'pointer-events-none cursor-default text-gray-400' : ''
            }`}
            onClick={() => hasPrev && handlePageChange(currentPage - 1)}
            disabled={!hasPrev}
          >
            <PreviousPageSVG />
            Previous
          </button>
        </li>

        {pageNumbers.map((pageNum, index) => {
          const isCurrentPage = pageNum === currentPage
          const showEllipsis = index > 0 && pageNum - pageNumbers[index - 1] > 1

          return (
            <li key={pageNum} className="hidden sm:flex sm:items-center">
              {showEllipsis && (
                <span className="px-2 text-gray-400">...</span>
              )}
              <button
                className={`rounded-lg px-2.5 py-1 ${
                  isCurrentPage
                    ? 'bg-gray-50 font-semibold ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:text-yellow-500 dark:ring-gray-900'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            </li>
          )
        })}

        <li>
          <button
            className={`flex items-center rounded-lg px-2.5 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 ${
              !hasNext ? 'pointer-events-none cursor-default text-gray-400' : ''
            }`}
            onClick={() => hasNext && handlePageChange(currentPage + 1)}
            disabled={!hasNext}
          >
            Next
            <NextPageSVG />
          </button>
        </li>
      </ul>
    </nav>
  )
}