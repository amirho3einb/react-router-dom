// => 1. home => /
// => 2. about us => '/about-us'
import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AboutUS from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUS} />
      <Route path="/profile" component={Profile} />
    </Layout>
  );
}

export default App;
