import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Services from "./routes/services.tsx";
import "./index.css";

import Root from "./routes/root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/api/subscribe",
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
