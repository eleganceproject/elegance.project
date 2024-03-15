import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Logo from "../assets/logo/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#0A253A] text-white font-poppins h-full">
      <div className="flex flex-row gap-40 justify-start p-10">
        <Link className=" w-80 ml-24">
          <img
            src={Logo}
            alt=""
            className=" w-48 cursor-pointer mb-10"
            to="/"
          />
          <p className=" w-96 font-normal text-sm">
            We will always be there, ready to offer ideas and solutions. Our
            commitment goes beyond services - we're dedicated to supporting and
            innovating with you, ensuring success in every step of your journey.
          </p>
        </Link>

        <div>
          <h1 className=" font-medium text-xl pb-3 pt-5 md:pt-0 mb-3">
            Services
          </h1>
          <nav className=" flex flex-col gap-5 text-sm">
            <a
              className="hover:text-amber-100 transition-all cursor-pointer"
              href="#"
            >
              Social Media Management
            </a>
            <a
              className="hover:text-amber-100 transition-all cursor-pointer"
              href="#"
            >
              Meta Ads
            </a>
            <a
              className="hover:text-amber-100 transition-all cursor-pointer"
              href="#"
            >
              Logo & Branding
            </a>
            <a
              className="hover:text-amber-100 transition-all cursor-pointer"
              href="#"
            >
              Web Development
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-3 pt-5 md:pt-0 mb-3">
            Contact Us
          </h1>
          <nav className=" flex flex-col gap-5 text-sm">
            <a
              className=" hover:text-amber-100 transition-all cursor-pointer"
              href="/"
            >
              elegance.project@royalpk.id
            </a>
            <a
              className=" hover:text-amber-100 transition-all cursor-pointer"
              href="/"
            >
              +62 812-9175-7139
            </a>
            <div className=" flex flex-row gap-5 mt-5">
              <a href="#" target="_blank">
                <div className="relative flex items-center justify-center overflow-hidden rounded-full w-10 h-10 bg-amber-200 hover:bg-amber-100 transition-all cursor-pointer">
                  <FaFacebook
                    size={20}
                    className="text-[#0D2E48] hover:text-blue-950 transition-all"
                  />
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="relative flex items-center justify-center overflow-hidden rounded-full w-10 h-10 bg-amber-200 hover:bg-amber-100 transition-all cursor-pointer">
                  <FaInstagram
                    size={20}
                    className="text-[#0D2E48] hover:text-blue-950 transition-all"
                  />
                </div>
              </a>
              <a href="#" target="_blank">
                <div className="relative flex items-center justify-center overflow-hidden rounded-full w-10 h-10 bg-amber-200 hover:bg-amber-100 transition-all cursor-pointer">
                  <FaTiktok
                    size={20}
                    className="text-[#0D2E48] hover:text-blue-950 transition-all"
                  />
                </div>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          ©Elegance Project 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
