import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      {routes.map((route)=>(
        <Route {...route}/>
      ))}
      
    </Layout>
  );
}

export default App;
