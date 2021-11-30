import AboutUS from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

const routes = [
    {path: '/', component: HomePage, exact: true},
    {path: '/about-us', component: AboutUS},
    {path: '/profile', component: Profile},
]
export default routes;