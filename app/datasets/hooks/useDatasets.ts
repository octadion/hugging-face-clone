// app/datasets/hooks/useDatasets.ts
import { useState, useEffect } from 'react'
import { DatasetItem } from '../type'

interface PaginationInfo {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  totalItems: number;
}

interface UseDatasetProps {
  initialPage: number;
  sort: string;
  search: string;
}

interface UseDatasetReturn {
  datasets: DatasetItem[];
  isLoading: boolean;
  error: Error | null;
  pagination: {
    currentPage: number;
    hasNext: boolean;
    hasPrev: boolean;
    totalItems: number;
  };
  setPage: (page: number) => void;
}

export function useDatasets({ initialPage, sort, search }: UseDatasetProps): UseDatasetReturn {
  const [datasets, setDatasets] = useState<DatasetItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [page, setPage] = useState(initialPage)
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: initialPage,
    hasNext: false,
    hasPrev: false,
    totalItems: 0
  })

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `/api/datasets?page=${page}&sort=${sort}${search ? `&search=${search}` : ''}`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch datasets')
        }

        const { data, pagination: paginationInfo } = await response.json()
        
        const transformedData = data.map((item: any) => ({
          title: item.id || item.name,
          tableType: 'viewer',
          dateTime: item.lastModified,
          timeTitle: new Date(item.lastModified).toLocaleString(),
          date: new Date(item.lastModified).toLocaleDateString(),
          downloads: item.downloads || 0,
          favorites: item.likes || 0
        }))

        setDatasets(transformedData)
        setPagination({
          ...paginationInfo,
          currentPage: page
        })
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchDatasets()
  }, [page, sort, search])

  return {
    datasets,
    isLoading,
    error,
    pagination,
    setPage
  }
}