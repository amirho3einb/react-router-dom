// => 1. home => /
// => 2. about us => '/about-us'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AboutUS from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";



function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUS} />
      <Route path="/profile" component={Profile} />
      
    </BrowserRouter>
  );
}

export default App;
