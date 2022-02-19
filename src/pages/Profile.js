import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <div className="profile">
      <SideBar />
      <Outlet />
      {/* <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="downloads" element={<Downloads />} />
      </Routes> */}
    </div>
  );
};
export default Profile;
