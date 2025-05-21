import { useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchBlog, setSearchBlog] = useState<string>("");
  return (
    <SearchContext.Provider value={{ searchBlog, setSearchBlog }}>
      {children}
    </SearchContext.Provider>
  );
};
