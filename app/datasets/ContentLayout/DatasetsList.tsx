// app/datasets/ContentLayout/DatasetsList.tsx
"use client";
import { useState } from 'react'
import DatasetCard from './DatasetCard'
import { DatasetsPagination } from './DatasetsPagination'
import { DatasetsHeader } from './DatasetsHeader'
import { useDatasets } from '../hooks/useDatasets'

export default function DatasetsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('trending')

  const { datasets, isLoading, error, pagination, setPage } = useDatasets({
    initialPage: currentPage,
    sort: sortBy,
    search: searchQuery
  })

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  if (error) {
    return <div>Error loading datasets: {error.message}</div>
  }

  return (
    <section className="pt-8 border-gray-100 col-span-full lg:col-span-6 xl:col-span-7 pb-12">
      <DatasetsHeader 
        totalCount={pagination.totalItems}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <div className="relative">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {datasets.map((datasetItem) => (
              <DatasetCard key={datasetItem.title} item={datasetItem} />
            ))}
          </div>
        )}
      </div>
      <DatasetsPagination 
        currentPage={pagination.currentPage}
        hasNext={pagination.hasNext}
        hasPrev={pagination.hasPrev}
        onPageChange={handlePageChange}
      />
    </section>
  )
}