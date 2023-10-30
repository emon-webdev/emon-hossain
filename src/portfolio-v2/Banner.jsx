import React from 'react';
import hello from '../images/hello.png';
import BannerBg from '../images/hero-pattern-opacity.png';
const Banner = () => {
    return (
        <div>
            <div
                className="banner-area "
                style={{
                    backgroundImage: `url(${BannerBg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container">
                    <div className="banner-wrapper h-[600px] md:h-[800px] flex items-center justify-between">
                        <div
                            data-aos="fade-right"
                            className="banner-content md:basis-7/12">
                            <h2 className='md:text-[50px] text-[36px] font-semibold flex items-center text-[#fff] '>
                                Hello
                                <img className='hello-img' src={hello} alt="" srcset="" />
                                I'm
                            </h2>
                            <h1 className='md:text-[60px] text-[36px] mb-4 leading-normal font-bold tracking-[2px] text-[#fff] '>Emon Hossain <span className='text-base'>as </span> </h1>
                            <p className='text-xl mb-10  text-[#fff] '>a professional MERN Stack Developer | Frontend Developer | React Developer | WordPress Developer.  I love to explore new technologies. </p>
                            <div className="hero-btn text-center">
                                <a
                                    href="https://drive.google.com/file/d/1DgfPMEYiOOZtWiNrLDSvI8jXAmYWY_6Y/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="header-btn"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            className="banner-img md:basis-4/12 hidden md:block">
                            <img src='https://i.ibb.co/xXbjRdh/Emon-Hossain.jpg' alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;