"use client";
import React from "react";


const CustomButton = (props: {
  btnType: "button" | "submit" | "reset";
  title: string;
  handleClick: () => void;
  styles: string;
}) => {
  return (
    <button
      type={props.btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[42px] px-4 rounded-full bg-[#2fab54] ${props.styles}`}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
