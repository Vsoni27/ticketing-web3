"use client";
import React from "react";
import { logo } from "@/assets";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Event",
    link: "/events",
  },
  {
    name: "Tickets",
    link: "/tickets",
  },
  {
    name: "Transactions",
    link: "/transactions",
  },
];

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-2 rounded-full">
      <div className="flex w-1/2 ">
        <img src={logo.src} alt="" className="mx-4" />
        <div className="sm:flex hidden justify-around font-semibold text-white">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.link}>
              <div className="py-2 px-5 hover:bg-slate-400 rounded-full flex items-center justify-center">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ConnectWallet />
    </div>
  );
};

export default NavBar;
