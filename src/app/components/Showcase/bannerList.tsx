import React from "react";
import Image from "next/image";
import Mfda from "../../../../public/Mfa.png";
import Pdfa from "../../../../public/PDFA.png";

const data = [
  {
    image: Mfda,
    label: "MDFA",
    width: 116.568,
    height: 111.217,
    description1: "Currently playing",
    description2: "u-11 category",
  },
  {
    image: Pdfa,
    label: "PDFA",
    width: 200,
    height: 150,
    description1: "This page with",
    description2: "your stakeholders",
  },
];

const BannerList = () => {
  return (
    <div className="w-full  bg-[#00A9CF] mt-20 overflow-hidden">
      <div className="flex w-max animate-scroll">
        {[...data, ...data, ...data].map((item, index) => (
          <div
            className="flex justify-center self-center w-full items-center h-[187.967px]  gap-10"
            key={index}
          >
            <div className="flex gap-10 px-10 items-center h-[187.967px] ">
              <Image
                src={item.image}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="self-center"
              />
              <p className="text-[156.649px] text text-[#020037] font-schabo font-normal uppercase pt-4">
                {item.label}
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-[62.659px] leading-[56.394px] font-comedik font-normal text-[#020037] text-right self-center">
                {item.description1}
              </p>
              <p className="text-[62.659px] leading-[56.394px] font-comedik font-normal text-[#020037] text-right self-center">
                {item.description2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerList;
