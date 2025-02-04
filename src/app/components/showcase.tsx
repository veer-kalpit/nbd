"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BannerList from "./Showcase/bannerList";

const Showcase = () => {
  const [index, setIndex] = useState(0);
  const texts = {
    texts1: ["Under-9", "Senior team", "Under-11"],
    texts2: ["under-11", "Under-9", "senior team"],
    texts3: ["senior team", "Under-11", "under-9"],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.texts1.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.texts1.length]);

  return (
    <div>
      <div className="tilted-div overflow-hidden scrollbar-hide-x">
        <BannerList />
      </div>
      {/* red text */}
      <div className="mt-[72px] lg:mx-[174px] mx-5">
        <div className="relative lg:mx-[186px] mx-5">
          <p className="text-[#EB4545] font-[Comedik] text-[40px] font-normal leading-[37.13px] relative tilted-text">
            WE JUST THINK OF MONEY
            <br /> NO KID FUTURE HERE
          </p>
          <div className="absolute top-5 left-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="356"
              height="21"
              viewBox="0 0 356 21"
              fill="none"
            >
              <path
                d="M0.952238 19.7642C0.952238 19.7642 0.952238 19.7642 0.94485 19.7645C1.23022 19.4641 2.05323 19.3091 2.60819 19.1034C5.35541 18.3445 8.46021 17.8699 11.4986 17.4008C15.7812 16.7651 20.1258 16.2093 24.4952 15.7252C41.878 13.8428 59.4952 12.5268 77.0936 11.3124C113.256 9.00466 149.538 7.5609 185.772 5.79364C212.336 4.43033 238.911 3.09194 265.511 2.28616C293.177 1.53469 320.846 1.03887 348.49 0.518632C357.869 0.304746 358.252 6.15691 348.704 6.64185C340.149 6.95321 331.598 7.11607 323.046 7.3074C305.256 7.67608 287.47 7.95624 269.675 8.44821C225.164 9.7816 180.754 12.4942 136.283 14.3407C95.0229 15.9678 53.9396 19.0725 12.7047 20.8029C10.3522 20.7903 -0.265806 21.5273 0.952458 19.7705L0.952238 19.7642Z"
                fill="#B5F1FF"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="313"
              height="14"
              viewBox="0 0 313 14"
              fill="none"
            >
              <path
                d="M0.265917 12.4805C0.265917 12.4805 0.265917 12.4805 0.259425 12.4807C0.514037 12.1859 1.23893 12.0471 1.72907 11.8523C4.15199 11.1474 6.88522 10.7336 9.56005 10.3241C13.3299 9.77232 17.1531 9.30171 20.9971 8.90329C36.2894 7.36155 51.7799 6.39065 67.2528 5.52103C99.0451 3.92164 130.93 3.18838 162.778 2.13076C186.128 1.28774 209.486 0.46981 232.86 0.184885C257.169 -0.0248686 281.477 0.0210041 305.764 0.0419927C314.004 0.0117444 314.263 5.87006 305.871 6.16801C298.353 6.31185 290.84 6.30729 283.327 6.33119C267.697 6.35155 252.071 6.28351 236.435 6.42704C197.324 6.88888 158.283 8.73154 119.199 9.70721C82.9386 10.5263 46.814 12.8261 10.5745 13.749C8.50836 13.6904 -0.827182 14.2194 0.266027 12.4869L0.265917 12.4805Z"
                fill="#B5F1FF"
              />
            </svg>
          </div>
        </div>
        <div className="lg:mx-[186px] mx-5 mt-7 flex gap-[22.13px]">
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="35"
              viewBox="0 0 16 35"
              fill="none"
            >
              <path
                d="M15.2831 3.12856C14.9693 1.99702 13.7639 1.32442 12.5958 1.62837C10.7582 2.10687 6.7304 1.27175 4.65358 0.462216C3.83652 0.144722 2.90763 0.328297 2.28629 0.930181C1.66496 1.53206 1.4739 2.43188 1.8001 3.22186C4.99532 10.9485 7.07058 17.9996 8.10974 24.658C7.17621 24.345 6.11993 24.2562 5.04347 24.4609C3.52275 24.7498 2.18222 25.5909 1.36672 26.7676C0.663058 27.7833 0.403651 28.969 0.633545 30.1095C0.864994 31.2486 1.57021 32.2523 2.61871 32.9339C3.83186 33.7239 5.4023 34.0098 6.92301 33.7194C8.44374 33.4305 9.78427 32.5893 10.6013 31.4141C10.8234 31.0921 10.9943 30.7551 11.1264 30.409C12.1919 30.248 12.9795 29.3722 12.9795 28.3159L12.9701 28.1128C12.2789 21.0512 10.4661 13.6932 7.43095 5.61284C9.21111 5.9514 11.7492 6.24633 13.7328 5.72871C14.2983 5.58124 14.772 5.23065 15.0625 4.74011C15.3545 4.24807 15.4338 3.67628 15.2815 3.12856H15.2831Z"
                fill="#B5F1FF"
              />
            </svg>
            <p className="text-[#B5F1FF] font-[Comedik] text-[27px] font-normal leading-[21.6px]">
              *Foul <br />
              whistle*
            </p>
          </div>
          <p className="text-[#EB4545] font-[Comedik] text-[41.3px] font-normal leading-[37.13px] ">
            NO. WAY.
          </p>
        </div>
      </div>

      {/* We have  */}
      <div className="lg:mx-[193px] mt-[106px] lg:mt-[64px] flex gap-6 relative justify-center lg:justify-start">
        <p className="text-[#00A9CF] font-[SCHABO] text-[30px] lg:text-[108px]  font-normal leading-[97.2px] uppercase z-50">
          We have team for
        </p>
        <div className="absolute lg:-top-24 lg:right-[350px] ">
          <motion.div
            key={index}
            className="relative text-[#00A9CF] font-[SCHABO] text-[100px] lg:text-[108px] font-normal leading-[97.2px] uppercase flex flex-col"
          >
            <div
              className="absolute -top-1 lg:-top-2 lg:left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, #000000 16.6%, rgba(0, 0, 0, 0.00) 42.3%, rgba(0, 0, 0, 0.00) 60.98%, #000000 86.68%)",
                zIndex: 1,
              }}
            />
            {texts.texts1[index]} <br />
            {texts.texts2[index]} <br />
            {texts.texts3[index]}
          </motion.div>
        </div>
      </div>

      {/* Green Text  */}
      <div className="relative">
        <div className="absolute lg:top-16 lg:right-80 -bottom-[300px] right-0 z-10 tilted-text">
          <p className=" text-[#00CF78] font-[Comedik] text-[41.3px] font-normal leading-[37.13px] ">
            And that&apos;s why <br />
            we are the best
          </p>
        </div>
        <div className="absolute lg:top-32 lg:right-[570px]  -bottom-[300px] right-[250px] z-20 tilted-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
          >
            <path
              d="M7.66283 6.75277C7.22069 7.38033 6.79554 8.01774 6.33172 8.6307C5.9088 9.18836 5.20185 10.0519 4.30208 10.0126C3.99968 9.99948 3.67443 9.88375 3.33205 9.62005C2.71376 9.07741 2.54958 8.34353 2.21501 7.70148C1.70301 6.54399 1.12369 5.39269 0.737706 4.2213C0.289903 3.07233 0.338121 1.56852 1.74704 1.32198C3.17762 1.0627 4.25523 2.57572 4.58332 3.65103C5.00269 2.80457 5.80185 2.01918 6.99693 1.97779C7.77562 1.97413 8.65691 2.49517 8.90691 3.1963C9.44208 4.64799 8.32289 5.71147 7.66276 6.75391L7.66283 6.75277Z"
              fill="#00CF78"
            />
          </svg>
        </div>
        <div className="absolute top-36 right-[440px] tilted-text hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="77"
            height="15"
            viewBox="0 0 77 15"
            fill="none"
          >
            <path
              d="M1.36047 13.0268C1.36047 13.0268 1.36047 13.0268 1.35892 13.0269C1.40607 12.7338 1.57404 12.5987 1.68275 12.4065C2.23258 11.7142 2.87118 11.3143 3.49592 10.9183C4.37764 10.3855 5.27611 9.93406 6.18308 9.5548C9.79326 8.08922 13.4787 7.19471 17.1647 6.40127C24.7475 4.95814 32.3944 4.38046 40.0166 3.47867C45.6017 2.74998 51.1901 2.0464 56.8078 1.8752C62.6547 1.78361 68.5134 1.94731 74.3659 2.08605C76.3499 2.09581 76.6941 7.94774 74.6866 8.2046C72.8822 8.3118 71.072 8.27081 69.2628 8.25824C65.498 8.20278 61.7301 8.05904 57.9698 8.12657C48.5688 8.39812 39.2513 10.0491 29.8818 10.8339C21.1849 11.4761 12.592 13.5977 3.90519 14.3436C3.40458 14.2751 1.18082 14.7581 1.36081 13.0331L1.36047 13.0268Z"
              fill="#B5F1FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
