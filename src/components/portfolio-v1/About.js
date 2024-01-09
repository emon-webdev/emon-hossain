import React from "react";

const About = () => {
  return (
    <div className="container sm:px-5 md:px-10 lg:px-14">
      <div>
        <div className="py-12 px-4 md:px-0">
          <h2 className="font-bold text-[2.5rem]">About Me</h2>
          <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
            <div class="col-span-12 space-y-2.5">
              <div class="lg:mr-10">
                <p class="text-gray-lite  dark:text-color-910 leading-7">
                  Hi there, I'm Emon Hossain. I am a professional Mern Stack
                  Developer . I am eager to learn new things and keep myself
                  updated. Hard work never bothers me.{" "}
                  <span className="font-bold italic">
                    "Success often comes to those who embrace hard work"
                  </span>{" "}
                  I never give up until I finish my job. So you can work with me
                  with full confidence.
                  <p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    <span className="font-bold mr-1">Expert: </span> JavaScript,
                    Es6, React, Firebase Auth, HTML, CSS, Bootstrap, Tailwind{" "}
                  </p>
                  <p>
                    <span className="font-bold mr-1">Comfortable: </span>
                    Redux, Firebase, React Router, Node js, MongoDB{" "}
                  </p>
                  <p>
                    <span className="font-bold mr-1">Familiar: </span>
                    Material UI. TypeScript, Next.js. Mongoose
                  </p>
                  <span className="font-bold mr-1">Deploy:</span> Vercel,
                  Netlify, Firebase.
                </p>
                <p>
                  <span className="font-bold mr-1">Tool: </span>
                  Chrome Dev-tool, VSCode, Github.
                </p>
                <p class="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                  The goal is to gain a challenging but rewarding career with an
                  organization that provides opportunity for personal and
                  professional growth.
                </p>
                <p class="thanks mt-1">
                  Thanks a lot ....❤️
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
