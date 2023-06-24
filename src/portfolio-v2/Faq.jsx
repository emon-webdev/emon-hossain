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
                        <div class="faq-list-single-item mb-7 p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">01.</div>
                            <div class="content">
                                <h4 class="text-3xl text-white mb-4">How to start UI/UX Design?</h4>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry an orem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printtook a galley of type and scrambled book.</p>
                            </div>
                        </div>
                        <div class="faq-list-single-item mb-7 p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">02.</div>
                            <div class="content">
                                <h4 class="text-3xl text-white mb-4">How to start UI/UX Design?</h4>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry an orem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printtook a galley of type and scrambled book.</p>
                            </div>
                        </div>
                        <div class="faq-list-single-item mb-7 p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">03.</div>
                            <div class="content">
                                <h4 class="text-3xl text-white mb-4">How to start UI/UX Design?</h4>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry an orem Ipsumhas been the industry's standard dummy text ever since the 1500s, when an unknown printtook a galley of type and scrambled book.</p>
                            </div>
                        </div>
                        <div class="faq-list-single-item mb-7 p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">04.</div>
                            <div class="content">
                                <h4 class="text-3xl text-white mb-4">How to start UI/UX Design?</h4>
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
            <HomeContact/>
        </div>
    );
};

export default Faq;