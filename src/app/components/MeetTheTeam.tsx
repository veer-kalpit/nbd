"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowL from "../../../public/arrowR.png";
import ArrowR from "../../../public/Container.png";

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rakesh Shankar Karmaran",
      role: "Coach",
      image: "/Rakesh.png",
      imageM: "/RakeshM.png",
      bio: `At Never Back Down Football Club, our vision transcends the boundaries of the field, aiming to create a dynamic and inclusive environment where the love for football flourishes. Having actively participated in Mumbai FC, our team has weathered both triumphs and setbacks. Guided by a coach who also serves as a teacher at Ameya Club, we have taken a brief hiatus to delve into global athletics over the past three to four years.`,
    },
    {
      id: 2,
      name: "John Doe",
      role: "Forward",
      image: "/T2.png",
      imageM: "/RakeshM.png",
      bio: `John is a dynamic forward with an incredible ability to score goals under pressure. Having played for several local clubs, his passion and energy on the field inspire his teammates.`,
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Goalkeeper",
      image: "/T3.png",
      imageM: "/RakeshM.png",
      bio: `Jane is a skilled goalkeeper with a record of saving crucial penalties. Her dedication and strategic thinking make her a pillar of strength for the team.`,
    },
    {
      id: 4,
      name: "Alex Brown",
      role: "Defender",
      image: "/T4.png",
      imageM: "/RakeshM.png",
      bio: `Alex's defensive prowess and tactical acumen ensure the team's stability. With years of experience, he is known for his unwavering determination.`,
    },
  ];

  // State to track the current member
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  // Current member details
  const currentMember = teamMembers[currentIndex];

  return (
    <div className=" text-white mt-[141px] mx-[173px] justify-center items-center self-center flex flex-col ">
      {/* Header Section */}
      <div className="flex gap-[120px] ">
        <h1 className="text-lightBlue font-schabo text-[60px] font-normal leading-normal uppercase">
          MEET THE TEAM..
        </h1>

        {/* Profile Navigation */}
        <div className="flex justify-center items-center gap-[59px] ">
          <button onClick={handlePrev}>
            <Image src={ArrowL} alt="Arrow" />
          </button>
          <div className="flex gap-[87px]">
            {teamMembers.map((member, index) => (
              <Image
                key={member.id}
                src={member.image}
                alt={member.name}
                width={63.57}
                height={63.57}
                className={`rounded-full border-2 ${
                  index === currentIndex
                    ? "border-[#B5F1FF]"
                    : "border-transparent"
                } cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button onClick={handleNext}>
            <Image src={ArrowR} alt="Arrow" />
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <section className="flex lg:flex-row   items-center mt-[48.8px] gap-[30px] ">
        <Image
          src={currentMember.imageM}
          alt={currentMember.name}
          width={469}
          height={469}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-[40px] text-[#00A9CF] font-normal leading-[37.13px]">
            HELLO, I&apos;M
          </h2>
          <h1 className="text-[60px] text-[#B5F1FF] font-schabo font-normal uppercase">
            {currentMember.name}
          </h1>
          <p className="text-[#B5F1FF] font-object-sans text-[16.5px] font-normal leading-[24.75px] mt-[50px] w-[612.444px]">
            {currentMember.bio}
          </p>
          <div className="relative mt-[60px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="299"
              height="61"
              viewBox="0 0 299 61"
              fill="none"
            >
              <path
                d="M6.41619 7.81253L6.29169 7.86572L6.18297 7.92849C2.25629 10.1956 0.78499 12.8251 0.273853 15.383C-0.0737879 17.1228 0.0184295 18.9397 0.101577 20.5781C0.136865 21.2734 0.17053 21.9366 0.168243 22.548C0.145679 28.9239 0.421213 35.2974 0.992594 41.6564C1.07251 42.5422 1.07717 43.5596 1.08233 44.6831C1.08506 45.2808 1.08794 45.9085 1.10235 46.5625C1.14299 48.4062 1.27753 50.4001 1.79828 52.2566C2.31527 54.0995 3.23822 55.908 4.9762 57.3196C6.77064 58.7771 9.41598 59.7897 13.12 59.977C25.5646 60.6083 40.7611 60.211 54.3588 59.8555C58.4741 59.7479 62.4429 59.6442 66.1448 59.5739C74.5891 59.4135 82.174 59.2681 89.6864 59.1241C98.5765 58.9537 107.365 58.7852 117.356 58.5961C135.759 58.2465 154.178 57.897 172.594 57.5474C191.052 57.1971 209.509 56.8468 227.954 56.4965L274.406 55.6159C280.763 55.4949 286.284 54.6057 290.283 52.5076C294.296 50.4015 296.434 47.2591 296.712 43.0348L296.712 43.0333L298.427 16.0604L298.428 16.0423L298.429 16.0243C298.439 13.6628 298.184 10.8405 296.91 8.31154C295.639 5.79009 293.262 3.38555 288.785 2.13339C285.204 1.13059 281.259 0.964366 277.818 0.848915C256.864 0.142313 235.827 0.771178 214.931 1.39583C205.741 1.67056 196.577 1.94449 187.461 2.10361L187.445 2.1039L187.43 2.10429C156.93 2.89094 139.944 3.27385 109.578 3.69808L109.565 3.69825L109.552 3.69853L35.0278 5.26146L35.014 5.26175L35.0004 5.26214C34.0971 5.28772 32.9231 5.30603 31.5711 5.3271C28.5629 5.37401 24.6736 5.43465 20.9256 5.61972C18.1734 5.75562 15.3833 5.96208 12.9038 6.29166C10.4682 6.61539 8.12045 7.08432 6.41619 7.81253Z"
                fill="#00A9CF"
              />
            </svg>
            <button className="absolute top-1 flex text-[#020037] font-comedik text-[15px] font-normal leading-[23.63px] py-[17px] left-6 gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16.1598 8.04721H14.6213C14.6207 7.43534 14.3774 6.8487 13.9447 6.41604C13.5121 5.98338 12.9254 5.74005 12.3136 5.73944V4.20093C13.3333 4.20215 14.3109 4.60777 15.0319 5.32883C15.753 6.04988 16.1586 7.02748 16.1598 8.04721Z"
                    fill="#020037"
                  />
                  <path
                    d="M19.2368 8.0473H17.6983C17.6963 6.61979 17.1283 5.25133 16.1189 4.24192C15.1095 3.23252 13.7411 2.66454 12.3135 2.66251V1.124C14.1491 1.12603 15.9089 1.8561 17.2068 3.15403C18.5047 4.45196 19.2348 6.21175 19.2368 8.0473ZM13.339 14.5721L15.0621 12.849C15.2929 12.6185 15.5862 12.4608 15.9057 12.3951C16.2252 12.3295 16.5569 12.3589 16.8598 12.4797L18.9584 13.3198C19.2675 13.4438 19.5324 13.6574 19.7192 13.9333C19.9059 14.2091 20.0058 14.5344 20.0061 14.8675V18.6838C20.0066 18.9106 19.9609 19.1352 19.8716 19.3437C19.7824 19.5522 19.6515 19.7403 19.487 19.8965C19.3226 20.0527 19.1279 20.1737 18.9151 20.2521C18.7022 20.3304 18.4756 20.3646 18.2491 20.3523C3.53942 19.4369 0.568553 6.97803 0.0169971 2.20711C-0.00971638 1.97387 0.0132529 1.73761 0.0843945 1.51389C0.155536 1.29016 0.273238 1.08403 0.429757 0.90905C0.586277 0.734074 0.778068 0.594217 0.992516 0.498679C1.20696 0.403141 1.43921 0.354087 1.67397 0.354743H5.42255C5.75562 0.355044 6.08099 0.454975 6.3568 0.641686C6.63262 0.828397 6.84628 1.09335 6.9703 1.40247L7.80955 3.501C7.93037 3.80396 7.95978 4.13568 7.89416 4.45517C7.82854 4.77466 7.67076 5.06793 7.44031 5.29875L5.71718 7.02188C5.71718 7.02188 6.67259 13.739 13.339 14.5721Z"
                    fill="#020037"
                  />
                </svg>
              </span>
              CONNECT WITH {currentMember.role.toUpperCase()}
            </button>
          </div>
          {/* Connect Button */}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
