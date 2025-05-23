import { ReactNode } from "react";
import { CommentProvider } from "./CommentProvider";
import { SearchProvider } from "./SearchProvider";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SearchProvider>
      <CommentProvider>{children}</CommentProvider>
    </SearchProvider>
  );
};
