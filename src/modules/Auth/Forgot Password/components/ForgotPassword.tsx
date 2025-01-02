import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <>
      <div className="">
        <div>
          <h2 className="text-green text-3xl mb-16">Forget Password</h2>
        </div>
        <div className='text-white'>
          <form>
            <label className="">Email address</label>

            <div className="mt-3   px-2 py-3  flex items-center justify-center border-[3px] border-white rounded-xl mb-20">
              <span className=" px-3">
                <i className="bi bi-envelope text-xl"></i>
              </span>
              <input
                placeholder="Type your email "
                className="  bg-inherit w-full   focus:outline-none "
              />
            </div>

            <button
              className="mt-10 rounded-lg bg-white text-black px-3 py-2 flex items-center font-bold "
              type="submit"
            >
              Send email
              <i className=" bi bi-check-circle-fill ml-2 text-xl "></i>
            </button>
          </form>
        </div>

        <div className="flex justify-end mt-20 text-white gap-1 ">
            Login?
          <button className=''>
            <Link to={'/login'} className="text-green underline">
              click here
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
