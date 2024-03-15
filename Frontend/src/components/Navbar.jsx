import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo/logo.png";
import Button from "../layouts/Button";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className=" items-center mt-2">
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 black">
          <div className="flex items-center cursor-pointer w-44 mr-10 ml-2">
            <Link>
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <nav className=" hidden lg:flex flex-row items-center content-center gap-10 mr-10 text-[#545454] font-poppins font-medium">
            <Link
              to="/home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-950 hover:font-semibold transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/features"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-950 hover:font-semibold transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/destination"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-blue-950 hover:font-semibold transition-all cursor-pointer"
            >
              About Us
            </Link>
          </nav>

          <a
            href="https://wa.me/6281291757139?text=Hi%2C%20Saya%20ingin%20konsultasi%20nih"
            target="_blank"
            className=" hidden lg:flex flex-row items-center gap-4"
          >
            <Button title="Work With Us" />
          </a>
        </div>
      </div>
    );
  }
}
