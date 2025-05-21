import { createContext } from "react";

interface SearchContextType {
  searchBlog: string;
  setSearchBlog: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchBlog: '',
  setSearchBlog: () => {},
});