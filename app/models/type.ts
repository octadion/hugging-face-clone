export interface ModelItem {
    title: string
    tableType: 'viewer' | 'preview'
    dateTime: string
    timeTitle: string
    date: string
    downloads: string
    favorites: string
  }
  
  export type ModelsTabItem = 'Tasks' | 'Sizes' | 'Sub-tasks' | 'Languages' | 'Licenses' | 'Other'
  