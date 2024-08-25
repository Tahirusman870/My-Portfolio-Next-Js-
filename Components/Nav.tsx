import { Bars3Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed w-[100%] top-0 h-[10vh] bg-[#f18920c2] z-[10000]">
      <div className="flex items-center justify-between w-[85%] mx-auto h-[100%] ">
        <Link
          href="#"
          className="flex-[0.6] cursor-pointer text-[70px] text-blue-500 font-bold"
        >
          <div className="w-[3rem] h-[3rem] relative lg:flex items-center rounded-lg">
            <Image
              src="/TU-Icon.png"
              alt="user"
              layout="fill"
              className="object-cover rounded-md"
            />
          </div>
        </Link>
        <Link href="#About" className="nav-link">
          About
        </Link>
        <Link href="#Tech" className="nav-link">
          Tech & Skills
        </Link>
        <Link href="#Project" className="nav-link">
          Project
        </Link>
        <Link href="#Contact" className="nav-link">
          Contact
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[3rem] md:hidden h-[3rem] cursor-pointer text-black " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
