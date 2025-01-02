import { Outlet } from 'react-router-dom';
import auth_pic from '../../../../assets/images/auth-pic.png';
import logo from '../../../../assets/images/Logo.png';

export default function AuthLayout() {
  return (
    <>
      <div className="grid md:grid-cols-2  bg-dark_blue  w-screen h-screen p-[50px]">
        <div>
          <div className="text-white mb-10">
            <img src={logo} alt="logo" />
          </div>
          <Outlet />
        </div>

        <div className="flex justify-end items-center">
          <div className="bg-light_cream  h-[620px] w-[540px] hidden  md:flex justify-center items-center rounded-2xl">
            <img
              src={auth_pic}
              alt="auth-pic"
              className="w-[450px] h-[450px]  "
            />
          </div>
        </div>
      </div>
    </>
  );
}
