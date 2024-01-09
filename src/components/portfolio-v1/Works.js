import React from "react";

import car1 from "../images/carshorom1.png";
import clean from "../images/clean1.png";
import pro from "../images/pro.png";

const Works = () => {
  return (
    <div className="container sm:px-5 md:px-10 lg:px-14">
      <div>
        <div className="py-12 px-4 md:px-0">
          <h2 className="font-bold text-[2.5rem]">Portfolio</h2>

          {/* project 1 */}
          <div className="md:flex items-center justify-between">
            <div className="work-img md:w-2/4 mr-4">
              <img src={car1} alt="" />
            </div>
            <div>
              <h2 className="mb-3">Car Showroom</h2>
              <p className="mb-3">
                User can buy course and download course documents
              </p>
              <div className="mb-4">
                <p>React</p>
                <p>Dynamic Route</p>
              </div>

              <div className="md:flex items-center">
                <a
                  href="https://car-showroom-520ff.web.app/"
                  className="block mr-3 px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website
                </a>
                <label
                  htmlFor="my-modal-1"
                  className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                >
                  Details
                </label>
              </div>
            </div>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <label
                  htmlFor="my-modal-1"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>

                <div class=" overflow-hidden rounded-lg">
                  <div className="detail-img grid md:grid-cols-2 gap-4 ">
                    <img src={car1} alt="" />
                    <img src={car1} alt="" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mt-3">Car Showroom</h3>
                <p className="mb-3">
                  User can buy course and download course documents
                </p>
                <div className=" py-4">
                  <p>React</p>
                  <p>Auth Firebase</p>
                  <p>Dynamic Route</p>
                  <p>Backend data fetch</p>
                </div>
                <div className="modal-action flex-wrap justify-start">
                  <a
                    href="https://car-showroom-520ff.web.app/"
                    className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/emon-webdev/car-showroom"
                    className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client Code
                  </a>
                  <a
                    href="https://github.com/emon-webdev/car-showroom-server"
                    className=" mt-4 md:mt-0 px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <hr className="my-6" />
          <div className="md:flex items-center justify-between">
            <div className="work-img md:w-2/4 mr-4">
              <img src={clean} alt="" />
            </div>
            <div>
              <h2 className="mb-3">Cleaning Services</h2>
              <p className="mb-3">
                User can buy course and download course documents
              </p>
              <div className="mb-4">
                <p>React</p>
                <p>Dynamic Route</p>
              </div>

              <div className="md:flex items-center">
                <a
                  href="https://cleaning-service-9d61e.web.app/"
                  className="block mr-3 px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website
                </a>
                <label
                  htmlFor="my-modal-2"
                  className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                >
                  Details
                </label>
              </div>
            </div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <label
                  htmlFor="my-modal-2"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>

                <div class=" overflow-hidden rounded-lg">
                  <div className="detail-img grid md:grid-cols-2 gap-4 ">
                    <img src={clean} alt="" />
                    <img src={clean} alt="" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mt-3">Cleaning Services</h3>
                <p className="mb-3">
                  User can buy course and download course documents
                </p>
                <div className=" py-4">
                  <p>React</p>
                  <p>Auth Firebase</p>
                  <p>Dynamic Route</p>
                  <p>Backend data fetch</p>
                </div>
                <div className="modal-action flex-wrap justify-start">
                  <a
                    href="https://cleaning-service-9d61e.web.app/"
                    className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/emon-webdev/cleaning-service"
                    className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client Code
                  </a>
                  <a
                    href="https://github.com/emon-webdev/cleaning-service-server"
                    className=" mt-4 md:mt-0 px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* project 3 */}
          <hr className="my-6" />
          <div className="md:flex items-center justify-between">
            <div className="work-img md:w-2/4 mr-4">
              <img src={pro} alt="" />
            </div>
            <div>
              <h2 className="mb-3">Pro Learner</h2>
              <p className="mb-3">
                User can buy course and download course documents
              </p>
              <div className="mb-4">
                <p>React</p>
                <p>Dynamic Route</p>
              </div>

              <div className="md:flex items-center">
                <a
                  href="https://pro-learner-auth.web.app/"
                  className="block mr-3 px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Website
                </a>
                <label
                  htmlFor="my-modal-3"
                  className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                >
                  Details
                </label>
              </div>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>

                <div class=" overflow-hidden rounded-lg">
                  <div className="detail-img grid md:grid-cols-2 gap-4 ">
                    <img src={pro} alt="" />
                    <img src={pro} alt="" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mt-3">Pro Learner</h3>
                <p className="mb-3">
                  User can buy course and download course documents
                </p>
                <div className=" py-4">
                  <p>React</p>
                  <p>Auth Firebase</p>
                  <p>Dynamic Route</p>
                  <p>Backend data fetch</p>
                </div>
                <div className="modal-action flex-wrap justify-start">
                  <a
                    href="https://pro-learner-auth.web.app/"
                    className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Website
                  </a>
                  <a
                    href="https://github.com/emon-webdev/pro-learner-client"
                    className=" px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client Code
                  </a>
                  <a
                    href="https://github.com/emon-webdev/pro-learner-server"
                    className=" mt-4 md:mt-0 px-6 cursor-pointer py-2 border-none inline-block bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] rounded-md text-white leading-[32px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
