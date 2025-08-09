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
import UpdateQuery from "@/pages/queries/UpdateQuery";
import RecommendationsForMe from "@/pages/recommendations/RecommendationsForMe";
import MyRecommendations from "@/pages/recommendations/MyRecommendations";
import AboutUs from "@/pages/AboutUs";

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
        path: "/query/update",
        element: (
          <PrivateRoutes>
            <UpdateQuery />
          </PrivateRoutes>
        ),
      },
      {
        path: "/recommendations",
        element: (
          <PrivateRoutes>
            <RecommendationsForMe />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoutes>
            <MyRecommendations />
          </PrivateRoutes>
        ),
      },
      {
        path: "/query/:queryId",
        element: <QueryDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
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
