// app/Models/hooks/useModels.ts
import { useState, useEffect } from 'react'
import { ModelItem } from '../type'

interface PaginationInfo {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  totalItems: number;
}

interface UseModelProps {
  initialPage: number;
  sort: string;
  search: string;
}

interface UseModelReturn {
  models: ModelItem[];
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

export function useModels({ initialPage, sort, search }: UseModelProps): UseModelReturn {
  const [models, setModels] = useState<ModelItem[]>([])
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
    const fetchModels = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `/api/models?page=${page}&sort=${sort}${search ? `&search=${search}` : ''}`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch Modelts')
        }

        const { data, pagination: paginationInfo } = await response.json()
        
        const transformedData = data.map((item: any) => ({
          title: item.id || item.name,
          tableType: 'viewer',
          dateTime: item.createdAt,
          timeTitle: new Date(item.createdAt).toLocaleString(),
          date: new Date(item.createdAt).toLocaleDateString(),
          downloads: item.downloads || 0,
          favorites: item.likes || 0
        }))

        setModels(transformedData)
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

    fetchModels()
  }, [page, sort, search])

  return {
    models,
    isLoading,
    error,
    pagination,
    setPage
  }
}