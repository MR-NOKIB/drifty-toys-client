import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/all-toys",
          element: <AllToys />,
        },
        {
          path: "/my-toys",
          element: <MyToys />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);


  export default router;