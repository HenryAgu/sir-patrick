import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import QueryClientProviderWrapper from "./components/QueryWrapper";
import { GlobalProvider } from "./contexts/GlobalProvider";
import { Toaster } from "sonner";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <GlobalProvider>
        <QueryClientProviderWrapper>
          <RouterProvider router={router} />
        </QueryClientProviderWrapper>
      </GlobalProvider>
      <Toaster/>
    </StrictMode>
  );
}
