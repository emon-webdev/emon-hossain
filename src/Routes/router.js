import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Resume from "../components/Resume";
import Works from "../components/Works";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routers;
