import React from "react";
import Image from "next/image";
import Mfda from "../../../../public/mfda.png";
import Pdfa from "../../../../public/PDFA.png";

const data = [
  {
    image: Mfda,
    label: "MDFA",
    description1: "Currently playing",
    description2: "u-11 category",
  },
  {
    image: Pdfa,
    label: "PDFA",
    description1: "This page with",
    description2: "your stakeholders",
  },
];

const BannerList = () => {
  return (
    <div className="w-full  bg-[#00A9CF] mt-20 overflow-hidden">
      <div className="flex w-max animate-scroll">
        {[...data, ...data].map((item, index) => (
          <div
            className="flex justify-evenly w-full items-center h-full px-10 gap-10"
            key={index}
          >
            <div className="flex gap-10">
              <Image
                src={item.image}
                alt={item.label}
                width={116}
                height={111}
                className="self-center"
              />
              <p className="text-[156.649px] text-[#020037] font-schabo font-normal uppercase">
                {item.label}
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-[62.659px] leading-[56.394px] font-comedik font-normal text-[#020037] text-left self-center">
                {item.description1}
              </p>
              <p className="text-[62.659px] leading-[56.394px] font-comedik font-normal text-[#020037] text-left self-center">
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
