export enum Category {
  VIDEOS = "Videos",
  PLAYLISTS = "Playlists",
  BLOG_POSTS = "Blog Posts",
}

export type CategoryKeys = keyof typeof Category;

export interface IFinanceSearchItem {
  id: string;
  title: string;
  url: string;
  description: string;
  category: CategoryKeys;
}
