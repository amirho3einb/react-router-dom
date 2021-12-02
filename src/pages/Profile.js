import { Route } from "react-router";
import Dashboard from "../components/dashboard";
import Downloads from "../components/downloads";
import SideBar from "../components/SideBar";


const Profile = () => {
    return ( 
        <div className="profile">
            <SideBar />
            <Route path="/profile/dashboard" component={Dashboard}/>
            <Route path="/profile/downloads" component={Downloads}/>
            <div>welcome to App</div>
            
            
        </div>
    );
}
export default Profile;
