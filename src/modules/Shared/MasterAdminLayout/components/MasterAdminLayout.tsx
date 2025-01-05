import { Outlet } from 'react-router-dom';
import SideBar from '../../Sidebar/Sidebar';

export default function MasterAdminLayout() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="w-full px-5 pt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}
