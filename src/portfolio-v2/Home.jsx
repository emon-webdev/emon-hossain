import React from "react";
import AboutMe from "./AboutMe";
import HeroArea from "./Banner";
import HomeContact from "./HomeContact";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";
import SocialMedia from "./components/SocialMedia";
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
      <SocialMedia />
      <HeroArea />
      <div className="main-home">
        <AboutMe />
        <Skills />
      </div>
      <div className="main-home">
        <Services />
      </div>
      <div className="main-home">
        <Portfolio />
      </div>
      <div className="main-home">
        <HomeContact />
      </div>

    </div>
  );
};

export default Home;
