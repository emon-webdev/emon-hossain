import React from "react";
import { Outlet } from "react-router-dom";
import lightBg from "../images/lightbg.jpg";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div
      className="min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16"
      style={{ backgroundImage: `url(${lightBg})` }}
    >
      <Header />
      <div className="main pt-12 pb-8 md:pt-0 md:pb-0">
        <div className="container grid grid-cols-12 md:gap-10  justify-between lg:mt-[220px] ">
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            <div>
              <Sidebar />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8  ">
            <Navbar />
            <div className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
              <Outlet />
              <footer
                className="overflow-hidden rounded-b-2xl"
                style={{ background: "rgb(248, 251, 251)" }}
              >
                <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
                  © 2022 All Rights Reserved by Emon Hossain .
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
