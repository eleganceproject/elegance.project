import React from "react";
import Header from "../assets/Images/HeaderHome.jpg";
import Button from "../layouts/Button";

function Home() {
  return (
    <div>
      {/* // HOME 1 */}
      <div className="font-poppins font-medium text-5xl flex justify-center">
        <h1 className=" mt-10 mb-10 text-[#0D2E48]">
          CRAFTING SUCCESS THROUGH INNOVATION, <br />
          DESIGN, AND DEVELOPMENT.
        </h1>
      </div>
      <div className=" bg-cover">
        <img src={Header} />
      </div>
      {/* HOME 2 */}
      <div className="w-full h-auto flex flex-row mt-52">
        <div className="  font-poppins font-light text-1xl w-4/5 h-24 p-16">
          <h3 className="text-[#0D2E48]">WHO ARE WE</h3>
        </div>
        <div className=" flex flex-col w-auto">
          <div className=" font-poppins font-medium text-5xl p-16 ">
            <h3 className=" text-[#0D2E48]">
              We are Elegance Project, a social media agency and creative
              marketing strategist based in National
            </h3>
          </div>
          <div className=" font-poppins font-light text-2xl w-auto h-96 p-16 ">
            <p className="text-[#0D2E48]">
              We help you simplify your work for your business development. We
              also help your business growth in digital as well as improve your
              digital marketing profit. With our expertise in visual branding
              combined with extensive knowledge about Digital Marketing, we
              would like to help you navigate this digital age to grow to your
              true potential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
