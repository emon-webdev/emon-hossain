import React from 'react';
import titleImg from '../images/header.svg';
const Skills = () => {
    return (
        <div className='skills-area bg-[#111121] py-8'>
            <div className="container">
                <div className="section-title text-center mb-16">
                    <h2 className="font-bold text-[3rem] tracking-wider text-white">
                        My Skills
                    </h2>
                    <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                </div>
                <div className="skills-wrap">
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;