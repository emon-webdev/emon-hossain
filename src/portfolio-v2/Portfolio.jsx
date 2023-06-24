import React from 'react';
import titleImg from '../images/header.svg';
const Portfolio = () => {
    return (
        <div className='portfolio-area bg-[#111121] py-8'>
            <div className="container">
                <div className="section-title text-center mb-16">
                    <h2 className="font-bold text-[3rem] tracking-wider text-white">
                        Latest Works
                    </h2>
                    <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                </div>
                <div className="skills-wrap">

                </div>
            </div>
        </div>
    );
};

export default Portfolio;