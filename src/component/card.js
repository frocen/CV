import React, { useState } from "react";
import { joinClasses } from '@volusion/element-block-utils';
import { AiOutlineClose } from "react-icons/ai";
export default function Card({ url, number, name, decription, readMore }) {
  return (
    <div>
      <div className={joinClasses(url ? `bg-${url}` : `bg-[#ffffff1a]`,
        `card w-64 h-96 m-16 shadow-[16px_16px_40px_rgba(0,0,0,0.5)] 
        rounded-xl	bg-cover bg-top bg-no-repeat overflow-hidden	flex justify-center	items-center 
        border-l	border-t border-solid border-[#ffffff80]`)}>
        <div className='content p-5 text-center	delay-[50ms] translate-y-[100px] opacity-0'>
          <h2 className="absolute top-[-80px] right-7 text-9xl text-[#ffffff0d] pointer-events-none	">{number}</h2>
          <h3 className="text-3xl text-[#fff] z-[1]">{name}</h3>
          <p className="text-base text-[#fff] font-light	">{decription}
          </p>
          <a onClick={()=>readMore(true)} className={joinClasses(readMore?"cursor-pointer	px-5 py-2 mt-4 bg-white text-black rounded-2xl font-medium	hover:bg-white hover:text-black":"hidden")}>Read more</a>
        </div>
      </div>
    </div>
  );
}