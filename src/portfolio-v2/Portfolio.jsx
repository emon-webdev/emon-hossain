import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import constroction from '../images/constroction.png';
import gym from '../images/gyme.png';
import titleImg from '../images/header.svg';
import kayak from '../images/kayak.png';
import landingImg from '../images/landingImg.png';
import loremImg from '../images/loremImg.png';
import news from '../images/news.png';
import pro from '../images/pro.png';
import selectTeam from '../images/select-team.png';
import yayfly from '../images/yayfly.png';
const Portfolio = () => {
    return (
        <div className='portfolio-area bg-[#111121] py-16'>
            <div className="container">
                <div className="section-title text-center mb-16">
                    <h2 className="font-bold text-[3rem] tracking-wider text-white">
                        Latest Works
                    </h2>
                    <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                </div>
                <div className="portfolio-projects">
                    <Tabs className='projects-table'>
                        <TabList className='projects-tab-list flex-wrap gap-3'>
                            <Tab>Bootstrap</Tab>
                            <Tab>Javascript</Tab>
                            <Tab>React</Tab>
                            <Tab>Mern Stack</Tab>
                        </TabList>

                        <TabPanels className='projects-tab-content'>
                            <TabPanel className=''>

                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={loremImg} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Lorem Ipsum is Simply Dummy</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Blog Website </p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a Blogwebsite.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: Html, Css, Bootstrap, Slick Slider, Magnify pop, animate
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="http://emon.lingkon.net/html/Lorem/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={constroction} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Construction</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Construction Website || Theme forest base design </p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a Construction Website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: Html, Css, Bootstrap, Slick Slider, Magnify pop, Megamenu, nice select, animate
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="http://emon.lingkon.net/html/construction/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="https://github.com/emon-webdev/Construction" target="_blank" rel="noopener noreferrer">
                                                    Source Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={landingImg} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Filesis</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Blog Website</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a Blog website.
                                                </span>
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
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: Html5, Css3, Bootstrap,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="http://emon.lingkon.net/html/Simple_landing/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className=''>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={news} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Capital Trust Bank</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Banking Website || Team Project 7 week duration</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="https://news-outlet-a6.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="https://github.com/emon-webdev/News-Outlet" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={selectTeam} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Capital Trust Bank</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Banking Website || Team Project 7 week duration</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="https://select-and-calculate-js.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="https://github.com/emon-webdev/Select-player" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={gym} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Capital Trust Bank</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Banking Website || Team Project 7 week duration</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="https://gym-club-a8.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className=''>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={yayfly} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Yayfly </h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Air Booking Website</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="https://yayfly-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="https://github.com/emon-webdev/yayfly-app" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={kayak} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Kayak</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>React  Website</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="https://kayak-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="https://github.com/emon-webdev/kayak-app" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={pro} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Capital Trust Bank</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Banking Website || Team Project 7 week duration</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Server Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className=''>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={pro} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Capital Trust Bank</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Banking Website || Team Project 7 week duration</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Server Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={pro} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Capital Trust Bank</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Banking Website || Team Project 7 week duration</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Server Code
                                                </a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='single-project md:flex mb-7  p-6 rounded bg-[#0a1f2f]'>
                                    <div className="project-img md:basis-6/12">
                                        <img className='max-h-[370px] w-[400px] rounded' src={pro} alt="" srcset="" />
                                    </div>
                                    <div className="project-content pt-3 my-4 md:my-0 md:basis-6/12 md:ml-8">
                                        <ul>
                                            <h2 className='text-white text-xl font-semibold'>Capital Trust Bank</h2>
                                            <p className='text-white text-sm mb-5  font-semibold'>Banking Website || Team Project 7 week duration</p>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    This is a full-stack Car Showroom website.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
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
                                            </li>
                                            <li className='flex items-center text-white mb-4'>
                                                <span>
                                                    <AiOutlineCheckCircle className='text-2xl mr-3 text-[#28dbd1]' />
                                                </span>
                                                <span>
                                                    Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private route, Firebase Authentication,
                                                </span>
                                            </li>
                                            <div className='project-btn flex flex-wrap gap-4'>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    live link
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Client Code
                                                </a>
                                                <a className='primary-btn' href="http://" target="_blank" rel="noopener noreferrer">
                                                    Server Code
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