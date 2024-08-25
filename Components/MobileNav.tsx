import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link onClick={closeNav} href="#About" className="nav-link-mobile">
          About
        </Link>
        <Link onClick={closeNav} href="#Tech" className="nav-link-mobile">
          Tech & Skills
        </Link>
        <Link onClick={closeNav} href="#Project" className="nav-link-mobile">
          Project
        </Link>
        {/* <Link onClick={closeNav} href="#Blog" className="nav-link-mobile">
          Blog
        </Link> */}
        <Link onClick={closeNav} href="#Contact" className="nav-link-mobile">
          Contact
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-blue-500"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
