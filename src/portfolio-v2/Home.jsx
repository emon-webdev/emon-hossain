import React from "react";
import AboutMe from "./AboutMe";
import HeroArea from "./Banner";
import HomeContact from "./HomeContact";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";
const Home = () => {
  return (
    <div

    // style={{
    //   backgroundImage: `url(${StarBg})`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <HeroArea />
      <div className="main-home">
        <AboutMe />
        <Skills />
      </div>
      <div className="main-home">
        <Services />
        <Portfolio />
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;