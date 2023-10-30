import { createBrowserRouter } from "react-router-dom";

import Blog from "../portfolio-v2/Blog";
import Contact from "../portfolio-v2/Contact";
import ErrorPage from "../portfolio-v2/ErrorPage";
import Faq from "../portfolio-v2/Faq";
import Home from "../portfolio-v2/Home";
import Resume from "../portfolio-v2/Resume";
import Works from "../portfolio-v2/Works";
import Root from "./Root";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Home />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <About />,
  //     },
  //     {
  //       path: "/resume",
  //       element: <Resume />,
  //     },
  //     {
  //       path: "/works",
  //       element: <Works />,
  //     },
  //     {
  //       path: "/blogs",
  //       element: <Blogs />,
  //     },
  //     {
  //       path: "/contact",
  //       element: <Contact />,
  //     },
  //   ],
  // },
]);

export default routers;
