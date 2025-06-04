import NotFound from "@/components/error/NotFound";
import Root from "@/layout/Root";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
]);
