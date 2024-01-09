import React, { useEffect, useState } from "react";
import { BiLogoGithub, BiLogoUpwork } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbBrandFiverr } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../images/mainLogo.png";
import Navbar from './Navbar';

const Header = () => {
    const [isActive, setActive] = useState("false");

    const [stickyClass, setStickyClass] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        const newScrollPosition = window.scrollY;
        setScrollPosition(newScrollPosition);

        if (newScrollPosition > 150) {
            setStickyClass('sticky-nav sticky-transition');
        } else {
            setStickyClass('');
        }
    };



    return (
        <div className="header">
            <div className="header-top py-3 lg:py-4 bg-[#0a1f2f]">
                <div className="container">
                    <div className="header-top-info flex items-center justify-between">
                        <div className="header-left flex md:flex-wrap items-center justify-between">
                            <p className="text-white mr-3 md:mr-8">
                                <a href="tel:01919371381" className="flex items-center  hover:text-[#28dbd1]">
                                    <BsTelephone className="mr-2 text-[#28dbd1]" /> 01919371381
                                </a>
                            </p>
                            <p className="text-white md:mr-8">
                                <a href="mailto:emon.hossain.web@email.com" className="flex items-center  hover:text-[#28dbd1]">
                                    <HiOutlineMailOpen className="mr-2 text-[#28dbd1]" /> emon.hossain.web@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="header-right flex-wrap flex items-center ">
                            <div className="social-icon hidden md:flex ">
                                <a
                                    href="https://www.fiverr.com/emon007iu"
                                    className="text-[20px] pr-[10px] ml-[10px] hover:text-[#28dbd1] text-white border-r border-[#28dbd1]"
                                >
                                    <TbBrandFiverr />
                                </a>
                                <a
                                    href="https://www.upwork.com/freelancers/emonh14"
                                    className="text-[20px] pr-[10px] ml-[10px] hover:text-[#28dbd1] text-white border-r border-[#28dbd1]"
                                >
                                    <BiLogoUpwork />
                                </a>
                                <a
                                    href="https://www.facebook.com/emon.webdev"
                                    className="text-[17px] pr-[10px] ml-[10px] hover:text-[#28dbd1] text-white border-r border-[#28dbd1]"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/emon-webdev/"
                                    className="text-[17px] pr-[10px] ml-[10px] hover:text-[#28dbd1] text-white border-r border-[#28dbd1]"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="https://github.com/emon-webdev"
                                    className="text-[19px] pr-[2px] ml-[10px] hover:text-[#28dbd1] text-white"
                                >
                                    <BiLogoGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`md:navbar ${stickyClass} header-main py-4 md:py-5 bg-[#111121]`}>
                <div className="container">
                    <div className="flex w-[100%] justify-between items-center">
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            className="logo ">
                            <Link to="/" className="text-3xl font-bold flex items-center">
                                <img src={logo} alt="" srcset="" />
                                <span className=" md:text-[36px] text-[26px] font-bold tracking-tighter text-[#fff] ">Emon<span className="text-[#28dbd1]">Hossain</span></span>
                            </Link>
                        </div>
                        {/* desktop menu */}
                        <div className="hidden md:block">
                            <Navbar />
                        </div>
                        {/* mobile menu */}
                        <div className="md:hidden flex flex-wrap items-center">
                            {/* <span className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  ">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className=" text-3xl "
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </span> */}
                            {
                                isActive ?
                                    <span
                                        onClick={handleToggle}
                                        className="md:hidden bg-[#28dbd1] flex w-[40px] h-[40px] rounded-full  justify-center items-center text-black dark:text-white text-3xl ml-3 "
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 1024 1024"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                                        </svg>
                                    </span>
                                    :
                                    <span
                                        onClick={handleToggle}
                                        className="md:hidden bg-[#28dbd1] flex w-[40px] h-[40px] rounded-full  justify-center items-center text-black dark:text-white text-3xl ml-3 "
                                    >
                                        X
                                    </span>

                            }

                            {/* ================== */}
                            <nav
                                className={`z-10 md:hidden flex flex-col justify-between overflow-x-hidden bg-white max-w-[305px] space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && "-translate-x-full"
                                    }  md:translate-x-0  transition duration-200 ease-in-out`}
                            >
                                <div className=" mb-6 lg:mb-0  mx-auto   relative bg-white text-center dark:bg-[#111111] px-5 ">

                                    <div className=" pb-8">
                                        <h1 className="mt-3 mb-1 text-[1.625rem] font-semibold  dark:text-white">
                                            Emon Hossain
                                        </h1>
                                        <h3 className="mb-2 text-center text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] rounded-lg dark:text-[#A6A6A6]  ">
                                            Mern Stack Developer
                                        </h3>

                                        <div className="p-6 rounded-2xl mt-4  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                                            <ul className=" ">
                                                <li>
                                                    <Link
                                                        to="/"
                                                        className=" border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 rounded-md     cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center   text-[#FA5252]  hover:text-[#FA5252] "
                                                    >
                                                        <span className="mr-2 text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                                                                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                                                                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                                            </svg>
                                                        </span>{" "}
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/works"
                                                        className=" border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 rounded-md     cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center   dark:text-white dark:hover:text-[#FA5252]  hover:text-[#FA5252]  "
                                                    >
                                                        <span className="mr-2 text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                                                                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                                                                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                                            </svg>
                                                        </span>{" "}
                                                        Works
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/faq"
                                                        className=" border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 rounded-md     cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center   dark:text-white dark:hover:text-[#FA5252]  hover:text-[#FA5252]  "
                                                    >
                                                        <span className="mr-2 text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 24 24"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g>
                                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                                    <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path>
                                                                </g>
                                                            </svg>
                                                        </span>{" "}
                                                        Faq
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/contact"
                                                        className=" border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5 rounded-md     cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center   dark:text-white dark:hover:text-[#FA5252]  hover:text-[#FA5252]  "
                                                    >
                                                        <span className="mr-2 text-xl">
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth="0"
                                                                viewBox="0 0 24 24"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g>
                                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                                    <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path>
                                                                </g>
                                                            </svg>
                                                        </span>{" "}
                                                        Contact
                                                    </Link>
                                                </li>
                                                <span className="bg-white text-black hover:text-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  hover:bg-[#28dbd1] transition-all duration-300 ease-in-out cursor-pointer ">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className=" text-3xl "
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                                    </svg>
                                                </span>
                                            </ul>
                                        </div>

                                        <div className=" p-6 pb-5 rounded-2xl mt-4  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                                            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                                                <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 320 512"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                                    </svg>
                                                </span>
                                                <div className="text-left ml-2.5">
                                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                                                        Phone
                                                    </p>
                                                    <p className="dark:text-white break-all">
                                                        <a
                                                            className="hover:text-[#FA5252] duration-300 transition"
                                                            href="tel:+1234567890"
                                                        >
                                                            +01919371381
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex  border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                                                <span className="flex-shrink-0 socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 512 512"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                                                    </svg>
                                                </span>
                                                <div className="text-left ml-2.5">
                                                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                                                        Email
                                                    </p>
                                                    <p className="dark:text-white break-all">
                                                        <a
                                                            className="hover:text-[#FA5252] duration-300 transition"
                                                            href="mailto:ibthemes21@gmail.com"
                                                        >
                                                            emon.hossain.web@gmail.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center space-x-3">
                                                <a
                                                    href="https://www.facebook.com/emon.webdev/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="socialbtn text-[#1773EA]">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 320 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <a
                                                    href="https://twitter.com/emon_webdev"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="socialbtn text-[#1C9CEA]">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 512 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                                <a
                                                    href="https://github.com/emon-webdev"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="socialbtn text-[#e14a84] ">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            height="1em"
                                                            width="1em"
                                                            viewBox="0 0 1024 1024"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                                        </svg>
                                                    </span>
                                                </a>

                                                <a
                                                    href="https://www.linkedin.com/in/emon-webdev/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="socialbtn text-[#0072b1]">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 448 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        <a
                                            href="https://drive.google.com/file/d/1DgfPMEYiOOZtWiNrLDSvI8jXAmYWY_6Y/view"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
                                        >
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFGSURBVHgB7VXRccIwDJV6HcAjhA0yAkzQdAM2aDdoO0HpBFwnACaADcgGwASECcITUTjFl9g+Dv54dzr5FOlZliyHKYK6rnMo55krZi7pVoD0qx7GZyiWI8RrqBPEJ/mFOGQ9GYp9pTiOINh7G8pmLhT0Qg/Ck/jxxJ1bgW5nUHNIpibp/H4gdgz/na4ryLu9PewRr5X035hLBCw9vwIqN6Y3yAF+BfUBATPIUTNPgvhK5pB5yMlBtuqYUTqpxLiYcxJ5jJTVOKXuiMr6g5rGTXpGOoNq+/FHTfNaiO9SiBdYjL2PdoPKkhtSF4gpSZ/AKfUft1OWlJoKlxAGBwRZXrLVzCTLrTlBFYqNTp4hX1FTzyupZpfryb47zQ6VIga98zMlFxRtKVIe+hBGpKcC10ga3CbJZt43dB9cfr5sHp57Qer/cwZ+0yM9HiHHMQAAAABJRU5ErkJggg=="
                                                alt="icon"
                                                className="mr-2"
                                            />
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
