import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import cakeStand from "../images/cakeStand.png";
import capitalTrust from "../images/capitalTrust.png";
import carRelsel from "../images/carRelsel.png";
import clean from "../images/clean.png";
import constroction from "../images/constroction.png";
import gym from "../images/gyme.png";
import titleImg from "../images/header.svg";
import kayak from "../images/kayak.png";
import landingImg from "../images/landingImg.png";
import loremImg from "../images/loremImg.png";
import lxora from "../images/lxora.png";
import news from "../images/news.png";
import selectTeam from "../images/select-team.png";
import shapiro from "../images/shapiro.png";
import yayfly from "../images/yayfly.png";
const Portfolio = () => {
  return (
    <div className="portfolio-area bg-[#111121] py-16">
      <div className="container">
        <div className="section-title text-center mb-16">
          <h2
            data-aos="fade-right"
            className="font-bold text-[3rem] tracking-wider text-white">
            Latest Works
          </h2>
          <img className="w-[200px] mx-auto" src={titleImg} alt="" />
        </div>
        <div className="portfolio-projects">
          <Tabs className="projects-table">
            <TabList className="projects-tab-list flex-wrap gap-3">
              <Tab>Mern Stack</Tab>
              <Tab>React</Tab>
              <Tab>Javascript</Tab>
              <Tab>WordPress</Tab>
              <Tab>HTML/Bootstrap</Tab>
            </TabList>

            <TabPanels className="projects-tab-content">
              {/* Mern stack */}
              <TabPanel className="">
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={capitalTrust}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        Capital Trust Bank
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Banking Website || Team Project || 2 month duration
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          This is a full-stack Banking Website website.
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Users need to login via Google (also can create a new
                          Account).
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Have an Admin, User dashboard, Admin dashboard, Admin
                          can delete, add, manage products.
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: React, Redux-Toolkit, React Router, Tailwind, MongoDB,
                          Express.js, Node.js, Private route, Firebase
                          Authentication, etc
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://capital-trust-bank-ee791.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/Capital-Trust-Bank"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/Capital-Trust-Bank-Server"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Server Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={cakeStand}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        The Cake Stand
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Restaurants Website || Reservation  || Admin Home || User Home
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          This is a full-stack Restaurants Website website.
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Users need to login via Google (also can create a new
                          Account).
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Have an Admin , User, User dashboard, Admin dashboard, Admin
                          can delete, add, manage products etc...
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: React, Redux-Toolkit, Tailwind, MongoDB, Mongoose,
                          Express.js, Node.js, Private route, 2 Type Role, Firebase
                          Authentication, etc
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://the-cake-stand.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/the-cake-stand"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/The-Cake-Stand-Server"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Server Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={carRelsel}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        Car Resell
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Car Resell Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a full-stack Car Showroom website.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Users need to login via Google (also can create a new
                          Account).
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Have an Admin, User, Seller dashboard. Admin can
                          delete, add, manage products.
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: React, React Router, Tailwind, MongoDB,
                          Express.js, Node.js, Private route, Firebase
                          Authentication,
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://car-resell-web.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/car-showroom"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/car-showroom-server"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Server Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={clean}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        Clean Service
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Clean Service Provide
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a Clean Service Provide website.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Users need to login via Google (also can create a new
                          Account).
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Have an Admin, User, Seller dashboard. Admin can
                          delete, add, manage products, comment
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: React, React Router, Tailwind, MongoDB,
                          Express.js, Node.js, Private route, Firebase
                          Authentication,
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://cleaning-service-9d61e.web.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/cleaning-service"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/cleaning-service-server"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Server Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              {/* React */}
              <TabPanel className="">
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={yayfly}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">Yayfly </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Air Booking Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a Front-End Air Booking Website</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Front-End Base Booking Website</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: React, React Router, Material Ui
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://yayfly-app.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/yayfly-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={kayak}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">Kayak</h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Countries Filtering Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          This is a Front-End Countries Filtering Website
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Filtering Using from Client Side</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Technology: React, Rest APIs, Tailwind,</span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://kayak-app.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/kayak-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              {/* JavaScript */}
              <TabPanel className="">
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={news}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        News Outlet
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        JavaScript Base Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a JavaScript Base Website.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          APi , Data Fetching, Filter, Category select
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: Html, Css, JavaScript Api, Tailwind,
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://news-outlet-a6.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/News-Outlet"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={selectTeam}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        Player Select
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Select Top 5 Player
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a JavaScript Base Website.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Per Player Budget, Player Select</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Total cost Calculate</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: Html, Css, JavaScript Api, Tailwind,
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://select-and-calculate-js.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/Select-player"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Client Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={gym}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        Gym Club
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Gym Club Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a JavaScript Base Website.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Gym category Select, Gym Time Set , Gym Activity,
                          Break time
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: Html, Css, JavaScript Api, Tailwind,
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="https://gym-club-a8.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              {/* WordPress */}
              <TabPanel className="">
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={lxora}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">lxora </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Business consulting WordPress Plugin Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a Business consulting Website</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Front-End Base Business Website</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This theme header and footer used Kirky Customizer</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>All sections are created with a custom Elementor addon.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: WordPress, Theme, Plugin, jQuery, Contact Form,
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="http://emon.lingkon.net/lxora/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github Profile
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={shapiro}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">Shapiro Negotiations Institute</h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Shapiro Negotiations Plugin Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Front-End Base Business Website</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This theme header and footer used Kirky Customizer</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>All sections are created with a custom Elementor addon.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>User can use two types of header.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>User can use two types of banner sections (hero slider and hero area).</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: WordPress, Theme, Plugin, jQuery, Contact Form,
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="http://emon.lingkon.net/wp/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Profile
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              {/* Bootstrap */}
              <TabPanel className="">
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={loremImg}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        Lorem Ipsum is Simply Dummy
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Blog Website{" "}
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a Blogwebsite.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Technology: Html, Css, Bootstrap, Slick Slider,
                          Magnify pop, animate
                        </span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Jquery:Slick Slider, Magnify pop, animate</span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="http://emon.lingkon.net/html/Lorem/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={constroction}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">
                        Construction
                      </h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Construction Website || Theme forest base design{" "}
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a Construction Website.</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Technology: Html, Css, Bootstrap</span>
                      </li>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>
                          Jquery:Slick Slider, Magnify pop, animate, isotop
                        </span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="http://emon.lingkon.net/html/construction/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                        <a
                          className="primary-btn"
                          href="https://github.com/emon-webdev/Construction"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]">
                  <div className="project-img md:basis-6/12">
                    <img
                      className="max-h-[370px] w-[400px] rounded"
                      src={landingImg}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                    <ul>
                      <h2 className="text-white text-2xl font-bold">Filesis</h2>
                      <p className="text-white text-sm mb-5  font-semibold">
                        Blog Website
                      </p>
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>This is a Blog website.</span>
                      </li>
                      {/* <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Users need to login via Google (also can create a new Account).
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Have an Admin, User, Seller dashboard. Admin can delete, add, manage products.
                                                </span>
                                            </li> */}
                      <li className="flex items-center text-white mb-4">
                        <span>
                          <AiOutlineCheckCircle className="text-2xl mr-3 text-[#28dbd1]" />
                        </span>
                        <span>Technology: Html5, Css3, Bootstrap,</span>
                      </li>
                      <div className="project-btn flex flex-wrap gap-4">
                        <a
                          className="primary-btn"
                          href="http://emon.lingkon.net/html/Simple_landing/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          live link
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
