import React from 'react';
import titleImg from '../images/header.svg';
import DynamicBanner from './DynamicBanner';
import HomeContact from './HomeContact';
const Faq = () => {
    return (
        <div>
            <DynamicBanner title='Faq' />
            <div className='faq-area bg-[#111121] py-16'>
                <div className="container">
                    <div className="section-title text-center mb-16">
                        <h2 className="font-bold text-[3rem] tracking-wider text-white">
                            Faq
                        </h2>
                        <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                    </div>
                    <div className="faq-wrapper">
                        <div class="faq-list-single-item mb-7 p-7 md:p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">01.</div>
                            <div class="content">
                                <h4 class="text-2xl text-white mb-4">Do you have any internship or work experience earlier?</h4>
                                <p className='text-white'>I have never interned before But  I am working in a team, there were 6 members in the team including me. Working time was 7 weeks. Where I used to maintain everything like an office. A regular team meeting at 10 a.m. would discuss what would be done throughout the day. Again at 7 o'clock in the evening, we used to see who is doing what. Through this, we all build better knowledge. Which we can use professionally.
                                    <br />
                                    Our project was a banking website.
                                    <br />
                                    Project Link: <a className='text-[#28dbd1]' href="https://capital-trust-bank-ee791.web.app" target="_blank" rel="noopener noreferrer">https://capital-trust-bank-ee791.web.app</a>

                                </p>
                            </div>
                        </div>
                        <div class="faq-list-single-item mb-7 p-7 md:p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">02.</div>
                            <div class="content">
                                <h4 class="text-2xl text-white mb-4">Where are you most comfortable on the front end or back end?</h4>
                                <p className='text-white'>I am proficient in both areas and comfortable working on both sides of web development.
                                    But I am more comfortable with Front-End Development.  I love pixel-perfect design. </p>
                            </div>
                        </div>
                        <div class="faq-list-single-item mb-7 p-7 md:p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">03.</div>
                            <div class="content">
                                <h4 class="text-2xl text-white mb-4">What are you currently learning for the web development side?</h4>
                                <p className='text-white'>
                                    " If not updated with time, you will be lost in time. "
                                    <br />
                                    I like to keep myself updated,
                                    I love to explore new technologies.
                                    Currently, I'm doing a course covering Redux, NextJs, TypeScript, Mongoose, AWS, Docker,  and Postgresql  etc.

                                </p>
                            </div>
                        </div>
                        <div class="faq-list-single-item mb-7 p-7 md:p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">04.</div>
                            <div class="content">
                                <h4 class="text-2xl text-white mb-4">Do you like to learn new things?</h4>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry an orem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printtook a galley of type and scrambled book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 text-center">
                        <a
                            href="https://drive.google.com/file/d/1DgfPMEYiOOZtWiNrLDSvI8jXAmYWY_6Y/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-btn mx-auto"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
            <HomeContact />
        </div>
    );
};

export default Faq;