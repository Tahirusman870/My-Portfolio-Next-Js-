import React from "react";
import SocialIcon from "./SocialIcon";

import { FaPhone } from "react-icons/fa";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div id="Contact" className="pt-[4rem] md:pt-[5rem] pb-[2.5rem] bg-[#121121]">
      <h1 className="heading">
        Contact
        <span className="text-blue-500"> Us</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[4rem] w-[80%] mx-auto gap-[2rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-xl bg-[#f18720]">
            <FaPhone className="md:w-[3rem] md:h-[3rem] w-[2rem] h-[2rem] text-black" />
          </div>
          <div>
            <h1 className="text-[20px] mb-[0.2rem] font-semibold text-blue-500">
              Phone
            </h1>
            <p className="text-[14px] text-slate-300 ">+923333393495</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-xl bg-[#f18720]">
            <IoLogoWhatsapp className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[20px] mb-[0.2rem] font-semibold text-blue-500">
              WhatsApp
            </h1>
            <p className="text-[14px] text-slate-300 ">+923333393495</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-xl bg-[#f18720]">
            <IoIosMail className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-[20px] mb-[0.2rem] font-semibold text-blue-500">
              Send Us
            </h1>
            <p className="text-[14px] text-slate-300 ">
              tahirusmanflancer@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-[80%] h-[100%] mx-auto my-[4rem] pb-[2rem] border-t-[2px] border-b-[2px] border-slate-400">
        <SocialIcon />
      </div>
      <div className="w-[80%] border-t-[2px] border-slate-400 mt-[2rem] mx-auto grid grid-cols-1 items-center text-center">
        <div className="text-[12px] md:text-[14px] mt-8 text-slate-300 ">
          <p>
            <a href="https://dynamatics.co/" className="hover:text-[#f18720]">
              © Tahir Usman
            </a>{" "}
            | All Rights Reserved
          </p>
        </div>
        {/* <div className="flex items-center space-x-10">
            <p className="text-[16px] text-white opacity-20">Trems & Condition</p>
            <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
            <p className="text-[16px] text-white opacity-20">SiteMap</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
