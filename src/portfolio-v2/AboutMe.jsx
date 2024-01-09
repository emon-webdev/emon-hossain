import React from 'react';
import titleImg from '../images/header.svg';
const AboutMe = () => {
    return (
        <div className='about-area bg-[#0a1f2f] py-8'>
            <div className="container">
                <div class="flex items-center details py-16">
                    <div class="md:basis-2/5 w-full hidden md:block image-box">
                        <img src="https://i.ibb.co/xXbjRdh/Emon-Hossain.jpg" alt="Emon Hossain" class="rounded-md" />
                    </div>
                    <div class="md:basis-3/5 w-full md:ml-[60px] content-box">
                        <div class="flex title-icon-box justify-between mb-5">
                            <div>
                                <div className="section-title text-center">
                                    <h2
                                        data-aos="fade-left"
                                        className="font-bold text-[3rem] tracking-wider mb-2 text-white">
                                        About Me
                                    </h2>
                                    <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class=" pt-4 pb-6">
                            <p class="text-white  dark:text-color-910 leading-7">Hi there, I'm Emon Hossain. I am a professional Mern Stack Developer . I am eager to learn new things and keep myself updated. Hard work never bothers me. <br /><span class="font-bold italic">"Success often comes to those who embrace hard work"</span>
                                <br />I never give up until I finish my job. So you can work with me with full confidence.
                                <p class="text-white leading-7 mt-2.5 dark:text-color-910"><span class="font-bold mr-1">Expert: </span> JavaScript, Es6, React, Firebase Auth, HTML, CSS, Bootstrap, Tailwind </p>
                                <p>
                                    <span class="font-bold mr-1">Comfortable: </span>Redux, Firebase, React Router, Node js, MongoDB </p><p><span class="font-bold mr-1">Familiar: </span>Material UI. TypeScript, Next.js. Mongoose</p><span class="font-bold mr-1">Deploy:</span> Vercel, Netlify, Firebase.</p>
                            <p className='text-white'>
                                <span class="font-bold mr-1">Tool: </span>Chrome Dev-tool, VSCode, Github.</p><p class="text-white leading-7 mt-2.5 dark:text-color-910">The goal is to gain a challenging but rewarding career with an organization that provides opportunity for personal and professional growth.</p>
                            <p class=" mt-1 text-[#28dbd1]">Thanks a lot ....❤️</p>
                        </div>

                        <div class="md:flex border-t border-[#28dbd1] items-center justify-between  py-[20px]">
                            <div>
                                <h4 className='text-[#fff]'>Email Address:</h4>
                                <a href='mailto:emon.hossain.web@gmail.com' className='text-[#28dbd1]'>emon.hossain.web@gmail.com</a>
                            </div>
                            <div className=''>
                                <h4 className='text-[#fff]'>Phone Number:</h4>
                                <a href='tel:01919371381' className='text-[#28dbd1]'>01919371381</a>
                            </div>
                            <ul class="about-social mt-3 md:mt-0 flex justify-center items-center">
                                <li>
                                    <a class="social__link"
                                        href="https://www.linkedin.com/in/emon-webdev/"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="social__link"
                                        href="https://github.com/emon-webdev"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <svg stroke="currentColor" fill="currentColor" height="1em" width="1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="social__link"
                                        href="https://www.facebook.com/emon.webdev/"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a class="social__link"
                                        href="https://twitter.com/emon_webdev"
                                        target="_blank" rel="noreferrer"
                                    >
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;