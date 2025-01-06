import React from "react";

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg pt-0 max-w-screen-md w-full">
        <div className="grid grid-cols-12 border-b-2 ">
          <h2 className="text-lg font-bold col-span-8  border-r-2  py-2  px-3 leading-10">
            Set up a new question
          </h2>
          <i className=" fa-solid fa-check col-span-2  py-2  border-r-2 text-center px-2 align-middle	leading-10  "></i>

          <i
            onClick={closeModal}
            className=" cursor-pointer	 fa-solid fa-xmark col-span-2  py-2 text-center px-2 leading-10"
          ></i>
        </div>
        <div className="p-5">
          <form>
            <div className="mb-3 sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
              <div className=" border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                Last name
              </div>
              <div className=" col-span-8 m-0 border-2 rounded-r-lg border-l-0 ">
                <input
                  type="text"
                  name="last-name"
                  className=" leading-10   w-full rounded-md
             bg-white px-3 py-1.5 shadow-none
            text-base text-gray-900 border-none
             placeholder:text-gray-400  sm:text-sm/6    "
                />
              </div>
            </div>

            <div className="mb-3 sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
              <div className=" border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                Description{" "}
              </div>
              <div className=" col-span-8 m-0 border-2 rounded-r-lg border-l-0 ">
                <textarea
                  name="about"
                  id="about"
                  rows="3"
                  className="block w-full rounded-md
               bg-white px-3 py-1.5 text-base text-gray-900 border-none
                 outline-gray-300 placeholder:text-gray-400
                sm:text-sm/6"
                ></textarea>
              </div>
            </div>

            <div className=" sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
              <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                a
              </div>
              <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                <input
                  type="text"
                  name="last-name"
                  className=" leading-10   w-full rounded-md
             bg-white px-3 py-1.5
            text-base text-gray-900 border-none
             placeholder:text-gray-400  sm:text-sm/6    "
                />
              </div>
              <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                a
              </div>
              <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                <input
                  type="text"
                  name="last-name"
                  className=" leading-10   w-full rounded-md
             bg-white px-3 py-1.5
            text-base text-gray-900 border-none
             placeholder:text-gray-400  sm:text-sm/6    "
                />
              </div>{" "}
              <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                a
              </div>
              <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                <input
                  type="text"
                  name="last-name"
                  className=" leading-10   w-full rounded-md
             bg-white px-3 py-1.5
            text-base text-gray-900 border-none
             placeholder:text-gray-400  sm:text-sm/6    "
                />
              </div>{" "}
              <div className="mb-3 border-2  border-r-0 rounded-l-lg  text-sm/6  col-span-1  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                a
              </div>
              <div className=" mb-3 col-span-5 m-0 border-2 rounded-r-lg border-l-0 ">
                <input
                  type="text"
                  name="last-name"
                  className=" leading-10   w-full rounded-md
             bg-white px-3 py-1.5
            text-base text-gray-900 border-none
             placeholder:text-gray-400  sm:text-sm/6    "
                />
              </div>
            </div>

            <div className="sm:col-span-3 lex  place-items-stretch relative grid grid-cols-12 ">
            <div className=" col-start-1 border-3  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                  Right Answer
                </div>
                <div className=" col-span-1 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    value={"a"}
                    name="last-name"
                    className=" leading-10   w-full rounded-md
             bg-white px-3 py-1.5 shadow-none text-center
            text-base text-gray-900 border-none
             placeholder:text-gray-400  sm:text-sm/6    "
                  />
                </div>

                <div className="col-end-12 border-3  border-r-0 rounded-l-lg  text-sm/6  col-span-4  font-medium text-gray-900  w-auto px-5 flex items-center justify-center leading-10 py-0   bg-light_cream">
                Category type                </div>
                <div className=" col-span-1 m-0 border-2 rounded-r-lg border-l-0 ">
                  <input
                    type="text"
                    value={"a"}
                    name="last-name"
                    className=" leading-10   w-full rounded-md
             bg-white px-3 py-1.5 shadow-none text-center
            text-base text-gray-900 border-none
             placeholder:text-gray-400  sm:text-sm/6    "
                  />
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
