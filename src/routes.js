import AboutUS from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import BlogPage from "./pages/Blogs";
import NotFound from "./pages/NotFound";
import Blog from "./components/Blog";
import PostPage from "./pages/PostPage";

const routes = [
    {path: '/blogs/:id', component: Blog},
    {path: '/blogs', component: BlogPage},
    {path: '/about-us', component: AboutUS},
    {path: '/profile', component: Profile},
    {path: '/post/:id?([0-9]+)', component: PostPage}, // optional
    {path: '/', component: HomePage, exact: true},
    { component: NotFound }, // should be last route
]
export default routes;

// ([A-Za-z]+)