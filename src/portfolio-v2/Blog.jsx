import { default as React } from 'react';
import titleImg from '../images/header.svg';
import DynamicBanner from './DynamicBanner';
import HomeContact from './HomeContact';
const Blog = () => {
    return (
        <div>
            <DynamicBanner title='Blogs' />
            <div className='blog-area bg-[#111121] py-16'>
                <div className="container">
                    <div className="section-title text-center mb-16">
                        <h2 className="font-bold text-[3rem] tracking-wider text-white">
                            Blogs
                        </h2>
                        <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                    </div>
                    <div className="faq-wrapper">
                        <div class="faq-list-single-item mb-7 p-7 md:p-[40px] md:flex items-center bg-[#0a1f2f]">
                            <div class="number mr-7 tracking-wider w-[120px] h-[120px] flex justify-center items-center text-2xl bg-[#111121] text-white font-medium ">01.</div>
                            <div class="content">
                                <h4 class="text-5xl text-white ">Coming soon...</h4>
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

export default Blog;