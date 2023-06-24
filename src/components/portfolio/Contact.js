// import emailjs from "@emailjs/browser";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { toast } from "react-hot-toast";
const Contact = () => {
  const [state, setState] = useForm("mlevqzbg");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name);

    const info = {
      name,
      email,
      message,
    };
    setState(info);

    toast.success("Email Send Successful");
    form.reset();
  };

  return (
    <div className="container sm:px-5 md:px-10 lg:px-14">
      <div>
        <div className="py-12 px-4 md:px-0">
          <h2 className="font-bold text-[2.5rem]">Contact Me</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 mt-[30px]">
            <div className=" p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-[#F3F6F6] rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
              <form onSubmit={handleSubmit}>
                <div className="relative  z-0 w-full mt-[40px] mb-8 group">
                  <input
                    type="text"
                    name="name"
                    className=" block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#DD2476] focus:outline-none focus:ring-0 focus:border-[#DD2476] peer"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DD2476] peer-focus:dark:text-[#DD2476] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Name *
                  </label>
                </div>

                <div className="relative z-0 w-full mb-8 group">
                  <input
                    type="email"
                    name="email"
                    className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#DD2476] focus:outline-none focus:ring-0 focus:border-[#DD2476] peer"
                    placeholder="Email"
                    id="email"
                    required
                  />
                  <label
                    htmlhtmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DD2476] peer-focus:dark:text-[#DD2476] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Email *
                  </label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="relative z-0 w-full mb-8 group">
                  <input
                    type="text"
                    name="message"
                    className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#DD2476] focus:outline-none focus:ring-0 focus:border-[#DD2476] peer"
                    placeholder="Message"
                    id="message"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#DD2476] peer-focus:dark:text-[#DD2476] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Message *
                  </label>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <div className=" inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-lg  mt-3">
                  <input
                    type="submit"
                    className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
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
