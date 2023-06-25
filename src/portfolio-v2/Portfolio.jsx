import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
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
                <div className="portfolio-projects">
                    <Tabs>
                        <TabList>
                            <Tab>One</Tab>
                            <Tab>Two</Tab>
                            <Tab>Three</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;