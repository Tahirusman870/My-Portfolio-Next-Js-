import React from "react";
import Particle from "./Particle";
import TextAnimation from "./TextAnimation";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  return (
    <div className="h-[90vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid h-[100%] items-center text-center">
        <div>
          <h2 className="text-slate-200 text-[16px] md:text-[20px] pb-2">
            Welcome To My Porfolio
          </h2>
          <h1 className="text-[28px] md:text-[40px] text-slate-200 font-bold">
            Hi, I&apos;m{" "}
            <span className="text-[#2563eb] text-[36px] md:text-[50px] block lg:inline">
              TAHIR USMAN!
            </span>
          </h1>
          <TextAnimation />
          <p className="mt-[2rem] text-slate-200 text-[16px] md:text-[20px] ">
            Currently, I&apos;m working{" "}
            <a href="https://dynamatics.co/" className="hover:text-[#f18720]">
              @Dynamatics
            </a>{" "}
            as a front-end developer, Here you will find more information{" "}
            <a href="#About" className="hover:text-[#f18720]">
              About Me
            </a>
            , what can I do, and my current skills mostly in terms of
            programming and technology.
          </p>
          {/* space-y-6 sm:space-y-0 sm:flex sm:flex-row */}
          <SocialIcon/>
        </div>
        {/* <div className="w-[450px] hidden bg-[#f18720] relative lg:flex items-center rounded-full h-[450px]">
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
