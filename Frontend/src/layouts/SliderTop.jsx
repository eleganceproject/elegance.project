import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContentCreation from "../assets/Images/ContentCreation.jpg";
import SocialMediaManagement from "../assets/Images/SocialMediaManagement.jpg";
import MetaAds from "../assets/Images/MetaAds.jpg";
import { HiArrowUpRight } from "react-icons/hi2";
import React from "react";

export function SliderTop() {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        className=" h-auto flex justify-between px-20 py-10"
      >
        {/* CREATOR CONTENT */}
        <div className="card">
          <div className=" w-[600px] h-[750px]">
            <img
              src={ContentCreation}
              className="h-[500px] w-full object-cover object-right"
            />
            <div className="w-full mt-5">
              <h3 className=" font-poppins font-bold text-3xl text-[#0D2E48]">
                Content Creation
              </h3>
              <p className=" font-poppins font-light text-base text-[#0D2E48] mt-5">
                Stand out on social media with our strategic approach,
                delivering impactful experiences that captivate your audience.
              </p>
              <div>
                <a
                  href="https://wa.me/6281291757139?text=Hi%2C%20Saya%20ingin%20konsultasi%20nih"
                  target="_blank"
                  className=" ml-4"
                >
                  <button className="text-[#0D2E48] rounded-full px-8 py-2 text-xl font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-72 h-14 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center">
                    Let's talk
                    <HiArrowUpRight className="ml-4 w-4 h-4 font-light" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* SOSIAL MEDIA MANAGEMENT */}
        <div className="card">
          <div className=" w-[600px] h-[750px]">
            <img
              src={SocialMediaManagement}
              className="h-[500px] w-cover object-cover object-right"
            />
            <div className="w-full mt-5">
              <h3 className=" font-poppins font-bold text-3xl text-[#0D2E48]">
                Social Media Management
              </h3>
              <p className=" font-poppins font-light text-base text-[#0D2E48] mt-5">
                Boost your brand's online presence with our expert social media
                management. We strategically curate and optimize content,
                ensuring your brand stands out.
              </p>

              <div>
                <a href="#" target="_blank" className=" ml-4">
                  <button className="text-[#0D2E48] rounded-full px-8 py-2 text-xl font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-72 h-14 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center">
                    Let's talk
                    <HiArrowUpRight className="ml-4 w-4 h-4 font-light" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* META ADS */}
        <div className="card">
          <div className=" w-[600px] h-[750px]">
            <img
              src={MetaAds}
              className="h-[500px] w-full object-cover object-left"
            />
            <div className="w-full mt-5">
              <h3 className=" font-poppins font-bold text-3xl text-[#0D2E48]">
                Meta Ads
              </h3>
              <p className=" font-poppins font-light text-base text-[#0D2E48] mt-5">
                Maximize your online impact with our meta ads expertise.
                Strategically designed for optimal engagement, we ensure your
                brand captivates the right audienc.
              </p>

              <div>
                <a
                  href="https://wa.me/6281291757139?text=Hi%2C%20Saya%20ingin%20konsultasi%20nih"
                  target="_blank"
                  className=" ml-4"
                >
                  <button className="text-[#0D2E48] rounded-full px-8 py-2 text-xl font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-72 h-14 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center">
                    Let's talk
                    <HiArrowUpRight className="ml-4 w-4 h-4 font-light" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
