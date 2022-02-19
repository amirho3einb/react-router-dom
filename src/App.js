import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import AboutUS from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import BlogPage from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";
import Dashboard from "./components/dashboard";
import Downloads from "./components/downloads";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        {/* {routes.map((route)=>(
          <Route {...route}/>
        ))} */}
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="downloads" element={<Downloads />} />
        </Route>
        <Route path="/post/:id/*" element={<PostPage />} />
        <Route path="/" element={<Navigate replace to="/blogs" />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
