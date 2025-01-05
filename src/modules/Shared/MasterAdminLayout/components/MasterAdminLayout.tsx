import { Outlet } from "react-router-dom";
import SideBar from "../../Sidebar/Sidebar";

export default function MasterAdminLayout(){
  return(
    <>
      <div className="flex">

        <SideBar/>
        <Outlet />
      </div>
    </>
  )
}