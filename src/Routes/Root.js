import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../portfolio-v2/Footer";
import Header from "../portfolio-v2/Header";



const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;