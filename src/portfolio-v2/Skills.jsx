import { Progress } from '@chakra-ui/react';
import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoAws, BiLogoBootstrap, BiLogoCss3, BiLogoDocker, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import express from '../images/express.svg';
import titleImg from '../images/header.svg';
import nextJs from '../images/nextjs.svg';
const Skills = () => {
    return (
        <div className='skills-area bg-[#111121] py-16'>
            <div className="container">
                <div className="section-title text-center mb-16">
                    <h2
                    data-aos="fade-right"
                    className="font-bold text-[3rem] tracking-wider text-white">
                        My Skills
                    </h2>
                    <img className="w-[200px] mx-auto" src={titleImg} alt="" />
                </div>
                <div className="skills-wrap md:flex items-center mb-8">
                    <div className="skills-lang md:mr-8 md:basis-6/12 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        <p className='text-[#e34c26]'>
                            <AiFillHtml5 />
                        </p>
                        <p className='text-[#3054e4]'>
                            <BiLogoCss3 />
                        </p>
                        <p className='text-[#563d7c]'>
                            <BiLogoBootstrap />
                        </p>
                        <p className='text-[#36B7F0]'>
                            <BiLogoTailwindCss />
                        </p>
                        <p className='text-yellow-300'>
                            <BiLogoJavascript />
                        </p>
                        <p className='text-[#36B7F0]'>
                            <BiLogoReact />
                        </p>
                        <p className='text-[#764abc]'>
                            <BiLogoRedux />
                        </p>
                        <p className='text-[#764abc]'>
                            <img className='w-[50px] h-[50px]' src={nextJs} alt="" srcset="" />
                        </p>
                        {/* <p className='text-[#FFCB2B]'>
                            <BiLogoFirebase />
                        </p> */}

                        <p className='text-[#68a063]'>
                            <BiLogoNodejs />
                        </p>
                        <p className='text-[#007acc]'>
                            <BiLogoTypescript />
                        </p>
                        <p className='text-[#764abc]'>
                            <img className='w-[50px] h-[50px]' src={express} alt="" srcset="" />
                        </p>
                        <p className='text-[#589636]'>
                            <BiLogoMongodb />
                        </p>
                        <p className='text-[#fff]'>
                            <BiLogoAws />
                        </p>
                        {/* <p>
                            <SiMongoose/>
                        </p> */}
                        <p className='text-[#0db7ed]'>
                            <BiLogoDocker />
                        </p>
                        <p className='text-[#336791]'>
                            <BiLogoPostgresql />
                        </p>
                        {/* <p className='text-[#F29111]'>
                            <AiOutlineConsoleSql />
                        </p> */}
                    </div>
                    <div className="skills-content mt-8 md:mt-0 md:basis-6/12">
                        <div class="skill-progress rounded mb-5 py-[40px] px-[35px] bg-[#0a1f2f]">
                            <div className='flex items-center justify-between'>
                                <p class="text-white">Teamwork</p>
                                <p class="text-white">90%</p>
                            </div>
                            <div class="skill-box rounded mt-4">
                                <Progress colorScheme='blue' size='lg' value={90} />
                            </div>
                        </div>
                        <div class="skill-progress rounded mb-5 py-[40px] px-[35px] bg-[#0a1f2f]">
                            <div className='flex items-center justify-between'>
                                <p class="text-white">Communication</p>
                                <p class="text-white">75%</p>
                            </div>
                            <div class="skill-box rounded mt-4">
                                <Progress colorScheme='blue' size='lg' value={75} />
                            </div>
                        </div>
                        <div class="skill-progress rounded py-[40px] px-[35px] bg-[#0a1f2f]">
                            <div className='flex items-center justify-between'>
                                <p class="text-white">Flexibility</p>
                                <p class="text-white">85%</p>
                            </div>
                            <div class="skill-box rounded mt-4">
                                <Progress colorScheme='blue' size='lg' value={85} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;