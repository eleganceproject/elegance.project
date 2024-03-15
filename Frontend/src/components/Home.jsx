import React from "react";
import Header from "../assets/Images/HeaderHome.jpg";
import WhatWeDo from "../assets/Images/WhatWeDo.jpg";
import {HiArrowUpRight} from "react-icons/hi2";
import {BiCheckDouble} from "react-icons/bi";


function Home() {
    return (
        <div>
            {/* // HOME 1 */}
            <div className="font-poppins font-medium text-6xl flex justify-center mt-16">
                <h1 className=" mt-10 mb-10 text-[#0D2E48]">
                    CRAFTING SUCCESS THROUGH INNOVATION, <br/>
                    DESIGN, AND DEVELOPMENT.
                </h1>
            </div>
            <div className=" bg-cover">
                <img src={Header}/>
            </div>


            {/* HOME 2 */}
            <div className="w-full h-auto flex flex-row mt-16">
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
                        <div className=" flex flex-row w-96 h-40 justify-start items-center">
                            <a
                                href="https://wa.me/6281291757139?text=Hi%2C%20Saya%20ingin%20konsultasi%20nih"
                                target="_blank"
                            >
                                <button
                                    className='text-[#0D2E48] rounded-full px-8 py-2 text-base font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-72 h-14 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center'
                                >
                                    Get to know us
                                    <HiArrowUpRight className="ml-4"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/*HOME 3*/}
            <div className="w-full h-auto flex flex-col mt-16">
                <div className="font-poppins p-16">
                    <h3 className=" font-light text-1xl text-[#0D2E48] mb-8">WHO ARE WE</h3>
                    <h3 className=" font-poppins font-medium text-5xl text-[#0D2E48]">
                        We're here to simplify your business life with tailored solutions. Our services and packages are
                        flexible to meet your specific needs.
                    </h3>
                </div>

                <div className="w-full h-auto -mt-20">
                    <div className=" flex flex-row justify-self-center">
                        <img src={WhatWeDo} alt="" className="w-1/2 p-16"/>
                        {/*Button 1*/}
                        <div className="flex flex-col gap-8 mt-24">
                            <a
                                href="#"
                                target="_blank"
                                className=" ml-4"
                            >
                                <button
                                    className='text-[#0D2E48] rounded-full px-8 py-2 text-base font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-auto h-12 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center'
                                >
                                    <BiCheckDouble className="mr-4 w-7 h-7 font-light"/>
                                    Business Model Client Detect
                                </button>
                            </a>
                            {/*BUTTON 2*/}
                            <a
                                href="#"
                                target="_blank"
                                className=" ml-4"
                            >
                                <button
                                    className='text-[#0D2E48] rounded-full px-8 py-2 text-base font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-auto h-12 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center'
                                >
                                    <BiCheckDouble className="mr-4 w-7 h-7 font-light"/>
                                    Analysis Market Potential (Ads Dashboard)
                                </button>
                            </a>
                            {/*BUTTON 3*/}
                            <a
                                href="#"
                                target="_blank"
                                className=" ml-4"
                            >
                                <button
                                    className='text-[#0D2E48] rounded-full px-8 py-2 text-base font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-auto h-12 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center'
                                >
                                    <BiCheckDouble className="mr-4 w-7 h-7 font-light"/>
                                    Make Lead for Funneling Sales Strategy
                                </button>
                            </a>
                            {/*BUTTON 4*/}
                            <a
                                href="#"
                                target="_blank"
                                className=" ml-4"
                            >
                                <button
                                    className='text-[#0D2E48] rounded-full px-8 py-2 text-base font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-auto h-12 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center'
                                >
                                    <BiCheckDouble className="mr-4 w-7 h-7 font-light"/>
                                    Get Lead for Client Potensial (Ads)
                                </button>
                            </a>
                            {/*BUTTON 5*/}
                            <a
                                href="#"
                                target="_blank"
                                className=" ml-4"
                            >
                                <button
                                    className='text-[#0D2E48] rounded-full px-8 py-2 text-base font-medium  font-poppins hover:bg-[#0D2E48] hover:text-white transition-all border-2 w-auto h-12 border-[#0D2E48] focus:outline-none focus:border-[#0D2E48] flex flex-row justify-center items-center'
                                >
                                    <BiCheckDouble className="mr-4 w-7 h-7 font-light"/>
                                    Report & Evaluation
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            {/*END HOME*/}
        </div>
    );
}

export default Home;
