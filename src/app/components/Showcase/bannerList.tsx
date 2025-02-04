import React from "react";
import Image from "next/image";
import Mfda from "../../../../public/mfda.png";
import Pdfa from "../../../../public/PDFA.png";

const data = [
  {
    image: Mfda,
    label: "MDFA",
    description1: "Currently playing ",
    description2: "u-11 category",
  },
  {
    image: Pdfa,
    label: "PDFA",
    description1: "This page with",
    description2: "your stakeholders",
  },
  {
    image: Mfda,
    label: "MDFA",
    description1: "Currently playing ",
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
    <div className="w-full h-[187.967px] bg-[#00A9CF] mt-20 overflow-y-auto scrollbar-hide-x">
      {/* Wrapper for scrolling */}
      <div className="flex animate-scroll">
        {/* Map over the data array */}
        {data.map((item, index) => (
          <div className="flex gap-10" key={index}>
            <Image
              src={item.image}
              alt={item.label}
              className="w-[116.568px] h-[111.217px] self-center"
            />
            <p className="text-[156.649px] text-[#020037] font-schabo font-normal uppercase">
              {item.label}
            </p>
            <div className="flex flex-col justify-start">
              <p className="text-[62.659px] leading-[56.394px] font-normal text-[#020037] text-left self-center">
                {item.description1}
              </p>
              <p className="text-[62.659px] leading-[56.394px] font-normal text-[#020037] text-left self-center">
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
