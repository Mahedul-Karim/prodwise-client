import NotFound from "@/components/error/NotFound";
import Root from "@/layout/Root";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Home from "@/pages/Home";
import AllQueries from "@/pages/queries/AllQueries";
import { createBrowserRouter } from "react-router";
import PrivateRoutes from "./PrivateRoutes";
import MyQueries from "@/pages/queries/MyQueries";
import CreateQuery from "@/pages/queries/CreateQuery";
import QueryDetails from "@/pages/queries/QueryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/queries",
        element: <AllQueries />,
      },
      {
        path: "/my-queries",
        element: (
          <PrivateRoutes>
            <MyQueries />
          </PrivateRoutes>
        ),
      },
      {
        path: "/query/create",
        element: (
          <PrivateRoutes>
            <CreateQuery />
          </PrivateRoutes>
        ),
      },
      {
        path: "/query/:queryId",
        element: <QueryDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <NotFound />,
  },
]);
