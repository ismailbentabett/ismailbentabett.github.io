import React from "react";
import {
  FaBehance,
  FaCalendarAlt,
  FaDribbble,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import img from "../assets/images/about/avatar.jpg";
import downloadIcon from "../assets/images/download.png";

const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto   relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img
          src={img}
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
          alt=""
        />
        {/* Social card */}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">
            ISMAIL BENTABET
          </h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
            Software Engineer
          </h3>

          {/* Social Links */}

          <div className="flex justify-center space-x-3">
            {/* facebook link add here */}
            <a
              href="https://www.facebook.com/ismailbentabett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1773EA]">
                <FaFacebookF />
              </span>
            </a>
            {/* twitter link add here */}
            <a
              href="https://twitter.com/ismailbentabett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1C9CEA]">
                <FaTwitter />
              </span>
            </a>
            {/* drop link add here */}

            {/* linkedin link add here */}
            <a
              href="https://www.linkedin.com/ismailbentabett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://www.instagram.com/ismailbentabett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#e14a84]">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://www.github.com/ismailbentabett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#fff]">
                <FaGithub />
              </span>
            </a>
          </div>

          {/* personal information */}
          <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <a href="tel:+213794753644" className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                <FaMobileAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Phone
                </p>
                <p className="dark:text-white">+213 794 753 644</p>
              </div>
            </a>
            <a href="mailto:ismailbentabett@gmail.com" className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <FaEnvelopeOpenText />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Email
                </p>
                <p className="dark:text-white">ismailbentabett@gmail.com</p>
              </div>
            </a>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <FaMapMarkerAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Location
                </p>
                <p className="dark:text-white">Algeria</p>
              </div>
            </div>
            <div className="flex  py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                <FaCalendarAlt />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Birthday
                </p>
                <p className="dark:text-white">Mar 25, 2001</p>
              </div>
            </div>
          </div>
          <button  className="flex items-center mx-auto bg-gradient-to-r from-[#00a9bf] to-[#00a9bf] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#00a9bf]  to-[#00a9bfef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
            <img src={downloadIcon} alt="icon" className="mr-2" />
            <a href="../assets/pdfs/cv.pdf" download>Download CV</a>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
