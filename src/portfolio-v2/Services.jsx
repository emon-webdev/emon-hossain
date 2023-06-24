import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoReact } from 'react-icons/bi';
import { FaLaptopCode } from 'react-icons/fa';
import titleImg from '../images/header.svg';
const Services = () => {
    return (
        <div className='services-area bg-[#0a1f2f] py-20'>
            <div className="container">
                <div className="section-title mb-8 text-center">
                    <h2 className="font-bold text-[3rem] text-white">
                        Services
                    </h2>
                    <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                </div>
                <div className='pt-7 align-content-center overflow-hidden justify-items-center mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                    <div class="service_item">
                        <div class="text-center">
                            <div class="service-icon text-center">
                                <AiFillHtml5 className='text-[70px] mb-4 mx-auto text-center text-white' />
                            </div>
                            <div class="service-content">
                                <h4 className='text-white text-xl mb-4 font-semibold'>PSD TO HTML5</h4>
                                <p className='text-white'>I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service_item">
                        <div class="text-center">
                            <div class="service-icon text-center">
                                <FaLaptopCode className='text-[70px] mb-4 mx-auto text-center text-white' />
                            </div>
                            <div class="service-content">
                                <h4 className='text-white text-xl mb-4 font-semibold'>FRONT-END DEVELOPER</h4>
                                <p className='text-white'>I’m a Front End Web developer who is passionate about making error-free websites with 100% Pixel-perfect code.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service_item">
                        <div class="text-center">
                            <div class="service-icon text-center">
                                <BiLogoReact className='text-[70px] mb-4 mx-auto text-center text-white' />
                            </div>
                            <div class="service-content">
                                <h4 className='text-white text-xl mb-4 font-semibold'>Mern-Stack / React</h4>
                                <p className='text-white'>I will convert your PSD to HTML5 with Latest Bootstrap. It will be fully responsive. Pixel-perfect code and fresh hand code are my power. If you have any design or idea I can make it a website.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;