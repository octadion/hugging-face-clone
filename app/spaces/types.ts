export interface Space {
    id: string;
    title: string;
    author: string;
    likes: number;
    description: string;
    tags: string[];
    thumbnail: string; // Now this will be an emoji
    url: string;
  }