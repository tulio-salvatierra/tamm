import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Services from "./routes/services.tsx";
import "./index.css";

import Root from "./routes/root.tsx";
import BlogPage from "./pages/BlogPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/house-cleaning-services-chicago",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
