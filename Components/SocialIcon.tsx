import { TbBrandFiverr, TbBrandGithub } from "react-icons/tb";
import { SiUpwork, SiFreelancer } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { CgNpm } from "react-icons/cg";

import React from 'react'

function SocialIcon() {
  return (
    <div className="mt-[2rem] flex-raw inline-flex space-x-4 justify-evenly items-center">
    <a
      href="https://www.linkedin.com/in/tahir1usman/"
      title="LinkdeIn"
      className="space-x-2"
    >
      <SlSocialLinkedin className="w-[1.8rem] md:w-[2.7rem] h-[1.8rem] md:h-[2.7rem] hover:text-[#f18720] transition-all duration-200 text-[#2563eb] scale-100 hover:scale-110" />
    </a>
    <a
      href="https://github.com/Tahirusman870"
      title="GitHub"
      className="space-x-2"
    >
      <TbBrandGithub className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] hover:text-[#f18720] transition-all duration-200 text-[#2563eb] scale-100 hover:scale-110" />
    </a>
    <a
      href="https://www.npmjs.com/~tahir1usman"
      title="Node Package Manager (npm)"
      className="space-x-2"
    >
      <CgNpm className="w-[2.2rem] md:w-[3.2rem] h-[2.2rem] md:h-[3.2rem] hover:text-[#f18720] transition-all duration-200 text-[#2563eb] scale-100 hover:scale-110" />
    </a>
    <a
      href="https://www.facebook.com/tahirusman88/"
      title="Facebook"
      className="space-x-2"
    >
      <FiFacebook className="w-[2rem] md:w-[3rem] h-[1.9rem] md:h-[2.8rem] hover:text-[#f18720] transition-all duration-200 text-[#2563eb] scale-100 hover:scale-110" />
    </a>
    <a
      href="https://www.upwork.com/"
      title="Upwork"
      className="space-x-2"
    >
      <SiUpwork className="w-[2.1rem] md:w-[3.1rem] h-[2.1rem] md:h-[3.1rem] hover:text-[#f18720] transition-all duration-200 text-[#2563eb] scale-100 hover:scale-110" />
    </a>
    <a
      href="https://www.fiverr.com/"
      title="Fiverr"
      className="space-x-2"
    >
      <TbBrandFiverr className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] hover:text-[#f18720] transition-all duration-200 text-[#2563eb] scale-100 hover:scale-110" />
    </a>
    <a
      href="https://www.freelancer.com/"
      title="Freelancer"
      className="space-x-2"
    >
      <SiFreelancer className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] hover:text-[#f18720] transition-all duration-200 text-[#2563eb] scale-100 hover:scale-110" />
    </a>
  </div>
  )
}

export default SocialIcon;