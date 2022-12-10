import React from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("hello");
    toast.success("Email Send Successful");
  };

  return (
    <div className="container sm:px-5 md:px-10 lg:px-14">
      <div>
        <div class="py-12 px-4 md:px-0">
          <h2 class="font-bold text-[2.5rem]">Contact Me</h2>
          <div class="grid grid-cols-1 gap-x-6 gap-y-6 mt-[30px]">
            <div className=" p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-gray-100 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
              <form onSubmit={handleSubmit}>
                <div class="relative  z-0 w-full mt-[40px] mb-8 group">
                  <input
                    type="text"
                    name="name"
                    class=" block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#DD2476] focus:outline-none focus:ring-0 focus:border-[#DD2476] peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    for="name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DD2476] peer-focus:dark:text-[#DD2476] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Name *
                  </label>
                </div>
                <div class="relative z-0 w-full mb-8 group">
                  <input
                    type="email"
                    name="email"
                    class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#DD2476] focus:outline-none focus:ring-0 focus:border-[#DD2476] peer"
                    placeholder=" "
                    id="email"
                    required=""
                  />
                  <label
                    for="email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DD2476] peer-focus:dark:text-[#DD2476] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Email *
                  </label>
                </div>
                <div class="relative z-0 w-full mb-8 group">
                  <input
                    type="text"
                    name="message"
                    class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#DD2476] focus:outline-none focus:ring-0 focus:border-[#DD2476] peer"
                    placeholder=" "
                    id="message"
                    required=""
                  />
                  <label
                    for="message"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DD2476] peer-focus:dark:text-[#DD2476] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Message *
                  </label>
                </div>
                <div class=" inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-lg  mt-3">
                  <input
                    type="submit"
                    class=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
