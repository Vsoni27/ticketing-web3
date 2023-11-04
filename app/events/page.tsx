"use client";
import CustomButton from "@/components/CustomButton";
import { Card, Inset, Strong, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import blockchain  from "@/assets/blockchain.jpg";

let arr: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const events = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="flex justify-start w-[90%] mb-3">
        <Link href="/my-events">
          <button className="h-[42px] w-[140px] p-2 bg-blue-900 rounded-xl font-semibold">My events</button>
        </Link>
      </div>
      <div className="grid grid-cols-4 w-[90%] space-x-3 space-y-3">
        {arr.map((it) => (
          <div key={it} className="bg-gray-900 rounded-xl transform transition-transform duration-300 hover:scale-105">
            <div >
              <img src={blockchain.src} alt="" className="rounded-xl"/>
            </div>
            <div className="p-2 text-ellipsis ">
              <h1 className="text-xs my-3 text-gray-300">Category</h1>
              <h1 className="font-semibold">Title</h1>
              <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, dolorum?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default events;
