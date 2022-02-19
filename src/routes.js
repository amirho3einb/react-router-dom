import AboutUS from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import BlogPage from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/about-us", element: <AboutUS /> },
  { path: "/profile/*", element: <Profile /> },
  { path: "/post/:id", element: <PostPage /> }, // optional
  { path: "/", element: <Navigate replace to="/blogs" /> },
  { element: <NotFound /> }, // should be last route
];
export default routes;

// ([A-Za-z]+)
