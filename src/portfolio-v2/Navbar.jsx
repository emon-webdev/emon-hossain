import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    //   let activeClass = {
    //     // color: "#FF3811",
    //     // background: "none",
    //   };

    return (
        <div className="menu-area">
            <nav className="hidden lg:block">
                <ul className="flex items-center">
                    <li>
                        <Link
                            to="/"
                            className=" text-[#fff] font-medium ml-3 py-[15px] px-[20px] text-[18px] "
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/works"
                            className=" text-[#fff] font-medium ml-3 py-[15px] px-[20px] text-[18px] "
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/faq"
                            className=" text-[#fff] font-medium ml-3 py-[15px] px-[20px] text-[18px] "
                        >
                            Faq
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className=" text-[#fff] font-medium ml-3 py-[15px] px-[20px] text-[18px] "
                        >
                            Contact
                        </Link>
                    </li>

                    <li>
                        <a
                            href="https://drive.google.com/file/d/1DgfPMEYiOOZtWiNrLDSvI8jXAmYWY_6Y/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header-btn"
                        >
                            Resume
                        </a>
                    </li>


                    {/* <li>
                        <Link class="header-btn" href="/#">
                            <span>Connect </span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet" class="svg-inline--fa fa-wallet " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                        </Link>
                    </li> */}
                </ul>
            </nav>


        </div>
    );
};

export default Navbar;
