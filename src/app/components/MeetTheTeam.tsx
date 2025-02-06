"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowL from "../../../public/arrowR.png";
import ArrowR from "../../../public/Container.png";
import RakeshM from "../../../public/rakeshM.png"

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rakesh Shankar Karmaran",
      role: "Coach",
      image: "/Rakesh.png",
      imageM: RakeshM,
      bio: `At Never Back Down Football Club, our vision transcends the boundaries of the field, aiming to create a dynamic and inclusive environment where the love for football flourishes. Having actively participated in Mumbai FC, our team has weathered both triumphs and setbacks. Guided by a coach who also serves as a teacher at Ameya Club, we have taken a brief hiatus to delve into global athletics over the past three to four years.`,
    },
    {
      id: 2,
      name: "John Doe",
      role: "Forward",
      image: "/T2.png",
      imageM:  RakeshM ,
      bio: `John is a dynamic forward with an incredible ability to score goals under pressure. Having played for several local clubs, his passion and energy on the field inspire his teammates.`,
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Goalkeeper",
      image: "/T3.png",
      imageM:  RakeshM ,
      bio: `Jane is a skilled goalkeeper with a record of saving crucial penalties. Her dedication and strategic thinking make her a pillar of strength for the team.`,
    },
    {
      id: 4,
      name: "Alex Brown",
      role: "Defender",
      image: "/T4.png",
      imageM:  RakeshM ,
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
    <div className=" text-white mt-[128px] lg:mt-[141px] mx-5 lg:mx-[173px] justify-center items-center self-center flex flex-col ">
      {/* Header Section */}
      <div className="flex gap-[71px] lg:gap-[120px] lg:flex-row flex-col ">
        <div className="relative">
          <div className="relative z-10">
            <h1 className=" text-lightBlue font-schabo text-[30px] lg:text-[60px] font-normal leading-normal uppercase">
              MEET THE TEAM..
            </h1>
          </div>
          <div className="absolute lg:-top-5 lg:left-[70px] left-[40px] -top-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 220 140"
              fill="none"
              className="w-[96px] h-[61px] lg:w-[220px] lg:h-[140px]"
            >
              <g filter="url(#filter0_d_2092_80870)">
                <mask
                  id="mask0_2092_80870"
                  maskUnits="userSpaceOnUse"
                  x="2"
                  y="-5"
                  width="227"
                  height="141"
                >
                  <path
                    d="M216.36 42.2677C223.307 72.0191 183.816 106.674 128.154 119.67C72.4934 132.667 21.7394 119.085 14.7926 89.3329C7.84567 59.5817 47.3366 24.9274 102.998 11.9306C158.659 -1.0661 209.413 12.5162 216.36 42.2677Z"
                    stroke="white"
                    strokeWidth="22.5"
                    strokeLinecap="round"
                    strokeDasharray="485.02 25.68"
                  />
                </mask>
                <g mask="url(#mask0_2092_80870)">
                  <path
                    d="M76.3895 131.271C57.8625 130.689 38.5994 128.552 21.9974 118.232C11.5451 111.936 4.57269 99.6199 4.77326 85.3609C5.48054 54.8566 30.667 34.1125 52.4472 24.3158C67.4083 17.6865 83.1755 14.134 98.8332 10.997C120.444 7.58353 142.474 5.37882 164.099 8.91293C169.995 9.94186 175.951 11.1501 181.457 13.913C182.677 14.5838 183.909 15.2844 184.887 16.4063C185.146 16.5217 185.258 16.907 185.125 17.1979C184.986 17.4977 184.686 17.5657 184.455 17.4016C182.509 16.9973 180.54 16.7801 178.562 16.6714C166.898 16.1584 155.241 15.1907 143.56 15.3147C134.529 15.5082 125.502 16.1388 116.5 17.1233C102.389 18.6673 88.409 21.5308 74.595 25.4051C61.5723 28.9888 48.7112 34.1894 37.2635 42.6681C28.1337 49.5322 19.7584 58.6091 14.9317 70.3048C9.722 83.7297 11.2162 99.0957 21.6929 107.867C35.3378 118.813 55.3287 121.602 71.5665 122.511C85.0362 123.257 98.5212 121.911 111.886 119.703C127.224 117.146 142.23 112.246 156.832 105.999C165.651 102.294 174.33 97.9025 182.293 91.9715C189.837 86.378 196.251 78.7625 200.888 69.698C207.066 58.7114 207.826 45.0321 200.265 34.8779C198.172 31.6568 201.845 27.6212 204.328 30.3638C205.955 32.3564 207.301 34.6889 208.415 37.1345C212.694 46.309 213.493 57.0008 210.069 66.8666C205.68 79.0085 198.091 89.4222 188.997 96.9042C178.292 105.804 166.006 111.419 153.744 116.341C131.976 125.306 109.059 130.242 86.12 131.141C82.8755 131.268 79.6332 131.313 76.3896 131.28L76.3895 131.271Z"
                    fill="#181818"
                  />
                  <path
                    d="M79.97 124.887C61.4428 124.302 42.1795 122.162 25.5768 111.84C15.1239 105.542 8.1508 93.2254 8.35049 78.9664C9.05591 48.4626 34.2412 27.7221 56.0208 17.9284C70.9817 11.3013 86.7485 7.75091 102.406 4.61612C124.017 1.20571 146.047 -0.995931 167.673 2.54119C173.568 3.57088 179.525 4.78001 185.031 7.54354C186.251 8.21456 187.483 8.91543 188.461 10.0374C188.721 10.1529 188.832 10.5381 188.7 10.829C188.559 11.1288 188.26 11.1968 188.03 11.0326C186.083 10.6281 184.113 10.4105 182.136 10.3016C170.472 9.78701 158.815 8.81756 147.134 8.94011C138.103 9.13233 129.076 9.76158 120.073 10.745C105.963 12.2869 91.9827 15.1485 78.1689 19.0209C65.1463 22.6026 52.2855 27.8015 40.8384 36.2785C31.7088 43.1413 23.3341 52.2171 18.508 63.912C13.2992 77.3359 14.7943 92.7019 25.2716 101.475C38.9172 112.423 58.9083 115.215 75.1464 116.127C88.616 116.874 102.101 115.529 115.466 113.324C130.804 110.769 145.809 105.871 160.411 99.6259C169.23 95.9224 177.91 91.5319 185.871 85.6024C193.416 80.0089 199.829 72.3951 204.465 63.331C210.643 52.3453 211.402 38.6662 203.84 28.5111C201.747 25.2897 205.419 21.2545 207.903 23.9975C209.529 25.9903 210.876 28.323 211.99 30.7688C216.27 39.9438 217.07 50.6356 213.645 60.5009C209.258 72.6419 201.67 83.0547 192.576 90.5352C181.871 99.4339 169.586 105.048 157.325 109.968C135.556 118.929 112.639 123.863 89.7005 124.758C86.456 124.884 83.2137 124.929 79.97 124.895V124.887Z"
                    fill="#00A9CF"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_2092_80870"
                  x="0.769043"
                  y="0.740967"
                  width="219.011"
                  height="138.549"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2092_80870"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2092_80870"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="flex flex-row items-center gap-5 lg:gap-[59px]">
          <button onClick={handlePrev} title="Previous">
            <Image src={ArrowL} alt="Arrow" />
          </button>
          <div className="flex gap-6 lg:gap-[87px]">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="relative w-[63.57px] h-[63.57px] flex items-center justify-center"
                onClick={() => setCurrentIndex(index)}
              >
                {currentIndex === index && (
                  <div className="absolute -top-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="130"
                      height="130"
                      viewBox="0 0 130 130"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_2092_80902)">
                        <mask
                          id="mask0_2092_80902"
                          maskUnits="userSpaceOnUse"
                          x="17"
                          y="5"
                          width="96"
                          height="120"
                        >
                          <path
                            d="M96.5398 14.6429C111.334 23.931 109.24 53.8977 91.8633 81.5758C74.4868 109.254 48.4071 124.162 33.613 114.873C18.819 105.585 20.9127 75.6187 38.2894 47.9408C55.6661 20.263 81.7456 5.35506 96.5398 14.6429Z"
                            stroke="white"
                            strokeWidth="12.8644"
                            strokeLinecap="round"
                            strokeDasharray="277.31 14.68"
                          />
                        </mask>
                        <g mask="url(#mask0_2092_80902)">
                          <path
                            d="M75.5072 107.119C67.7485 114.338 59.0647 121.222 48.1688 123.711C41.3898 125.36 33.6019 123.164 27.9453 117.292C15.957 104.618 17.8386 86.0574 22.7422 73.3137C26.1509 64.6006 31.1252 56.8127 36.2222 49.2376C43.6259 39.1545 51.6861 29.3938 61.8912 22.1269C64.6998 20.1723 67.6053 18.266 70.9532 17.1725C71.7188 16.9539 72.5012 16.7426 73.3499 16.8047C73.5014 16.7474 73.7019 16.8589 73.765 17.0305C73.829 17.2084 73.7348 17.3564 73.575 17.3827C72.6218 18.0018 71.7345 18.7061 70.8875 19.4578C65.9437 23.9433 60.82 28.2411 56.1256 32.9922C52.5356 36.705 49.1231 40.5937 45.863 44.6163C40.753 50.922 36.2274 57.7108 32.176 64.8434C28.3289 71.5395 25.1982 78.8273 23.9607 86.8777C23.0149 93.3396 23.266 100.397 26.0122 107.089C29.2987 114.638 36.0892 120.278 43.8741 119.624C53.8209 118.579 63.0626 111.667 70.0234 105.502C75.7942 100.384 80.7293 94.4108 85.2693 88.136C90.4697 80.9248 94.5924 72.8964 98.0093 64.4829C100.1 59.4294 101.858 54.1527 102.705 48.5394C103.518 43.2317 103.058 37.5578 101.294 32.0102C99.382 25.0619 94.1861 19.2 87.0287 18.1188C84.8826 17.6526 84.7503 14.5355 86.8625 14.6501C88.3251 14.8048 89.8106 15.2104 91.2471 15.7555C96.6772 17.7595 101.304 21.7806 103.883 27.1657C106.987 33.863 108.096 41.1466 107.413 47.8449C106.646 55.7676 103.916 62.9922 100.917 69.9258C95.6832 82.327 88.362 93.5542 79.407 103.15C78.1403 104.507 76.8415 105.83 75.5109 107.122L75.5072 107.119Z"
                            fill="#181818"
                          />
                          <path
                            d="M74.3924 103.085C66.6321 110.303 57.9473 117.186 47.0502 119.675C40.2704 121.323 32.4819 119.127 26.8249 113.255C14.836 100.582 16.7186 82.0236 21.6233 69.2813C25.0327 60.5692 30.0077 52.7823 35.1056 45.2081C42.5106 35.1262 50.572 25.3668 60.7786 18.1009C63.5875 16.1465 66.4933 14.2406 69.8416 13.1474C70.6072 12.9289 71.3897 12.7176 72.2385 12.7798C72.3903 12.7222 72.5904 12.834 72.6539 13.0053C72.7176 13.1835 72.6234 13.3315 72.4638 13.3575C71.5102 13.9767 70.6227 14.6809 69.7757 15.4326C64.8315 19.9171 59.7068 24.2145 55.0118 28.965C51.4213 32.6772 48.0082 36.5654 44.7474 40.5878C39.6369 46.8924 35.1105 53.6805 31.0584 60.8122C27.2106 67.5075 24.0793 74.7945 22.8414 82.844C21.8951 89.3052 22.146 96.3615 24.8921 103.053C28.1786 110.602 34.9695 116.241 42.7555 115.588C52.7032 114.543 61.946 107.632 68.908 101.468C74.6793 96.351 79.6151 90.3782 84.156 84.1043C89.3573 76.8941 93.4808 68.8665 96.8981 60.454C98.9894 55.4011 100.748 50.125 101.595 44.5126C102.409 39.2049 101.949 33.5317 100.185 27.9848C98.2729 21.0369 93.0767 15.1754 85.9187 14.0941C83.7722 13.6281 83.64 10.5112 85.7524 10.626C87.2151 10.7807 88.7009 11.1861 90.1375 11.7313C95.5681 13.7353 100.195 17.756 102.775 23.1408C105.878 29.8375 106.987 37.1201 106.304 43.8179C105.537 51.7402 102.806 58.9639 99.8064 65.8963C94.5714 78.2963 87.249 89.5223 78.2925 99.1167C77.0257 100.474 75.7267 101.797 74.3957 103.088L74.3924 103.085Z"
                            fill="#00A9CF"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2092_80902"
                          x="15.5395"
                          y="10.6229"
                          width="94.3543"
                          height="118.034"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="2.28701" />
                          <feGaussianBlur stdDeviation="1.1435" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2092_80902"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2092_80902"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                )}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={63.57}
                  height={63.57}
                  className="rounded-full cursor-pointer"
                />
              </div>
            ))}
          </div>
          <button onClick={handleNext} title="Next">
            <Image src={ArrowR} alt="Arrow" />
          </button>
        </div>
      </div>

      {/* Profile Details */}
      <section className="flex lg:flex-row flex-col items-center mt-[48.8px] gap-[30px] ">
        <Image
          src={currentMember.imageM}
          alt={currentMember.name}
          width={469}
          height={469}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-[40px] font-comedik text-[#00A9CF] font-normal leading-[37.13px] text-center lg:text-left">
            HELLO, I&apos;M
          </h2>
          <h1 className="lg:text-[60px] text-[30px] text-[#B5F1FF] font-schabo font-normal uppercase text-center lg:text-left">
            {currentMember.name}
          </h1>
          <p className="text-[#B5F1FF] font-object-sans text-[16.5px] font-normal leading-[24.75px] mt-[32px] lg:mt-[50px] text-center lg:text-left">
            {currentMember.bio}
          </p>
          <div className="relative lg:mt-[60px] mt-[49px] self-center lg:justify-start flex justify-center">
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
            {/* Connect Role */}
            <button className="absolute top-0 flex text-[#020037] font-comedik text-[26px] font-normal leading-[23.63px] py-[17px] lg:left-8 gap-3 left-20 tilted-text">
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
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
