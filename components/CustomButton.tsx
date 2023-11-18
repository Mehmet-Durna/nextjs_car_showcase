"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({ containerStyles, title, handleClick }: CustomButtonProps) => (
    <button
       type={`button`}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>{title}</span>

    </button>
);

export default CustomButton;