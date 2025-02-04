"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import AnsImg from "../../../public/answer_img.png";
import AnsImg2 from "../../../public/answer_img2.png";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  image: StaticImageData;
  image2: StaticImageData;
};

const FAQData: FAQItem[] = [
  {
    id: 1,
    question: "training ",
    answer:
      ' At the heart of our football ethos lies an unwavering commitment to excellence in training. With a dedicated cadre of professional coaches, we cultivate a culture of continuous improvement, pushing the boundaries of skill and strategy. Each session is a journey towards mastery, embodying the spirit of "Never Back Down" on and off the field.',
    image: AnsImg,
    image2: AnsImg2,
  },
  {
    id: 2,
    question: "training ",
    answer:
      ' At the heart of our football ethos lies an unwavering commitment to excellence in training. With a dedicated cadre of professional coaches, we cultivate a culture of continuous improvement, pushing the boundaries of skill and strategy. Each session is a journey towards mastery, embodying the spirit of "Never Back Down" on and off the field.',
    image: AnsImg,
    image2: AnsImg2,
  },
  {
    id: 3,
    question: "training ",
    answer:
      ' At the heart of our football ethos lies an unwavering commitment to excellence in training. With a dedicated cadre of professional coaches, we cultivate a culture of continuous improvement, pushing the boundaries of skill and strategy. Each session is a journey towards mastery, embodying the spirit of "Never Back Down" on and off the field.',
    image: AnsImg,
    image2: AnsImg2,
  },
  {
    id: 4,
    question: "training ",
    answer:
      ' At the heart of our football ethos lies an unwavering commitment to excellence in training. With a dedicated cadre of professional coaches, we cultivate a culture of continuous improvement, pushing the boundaries of skill and strategy. Each session is a journey towards mastery, embodying the spirit of "Never Back Down" on and off the field.',
    image: AnsImg,
    image2: AnsImg2,
  },
  {
    id: 5,
    question: "training ",
    answer:
      ' At the heart of our football ethos lies an unwavering commitment to excellence in training. With a dedicated cadre of professional coaches, we cultivate a culture of continuous improvement, pushing the boundaries of skill and strategy. Each session is a journey towards mastery, embodying the spirit of "Never Back Down" on and off the field.',
    image: AnsImg,
    image2: AnsImg2,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  console.log(openIndex);

  return (
    <section className="flex mx-5 lg:mx-[173px] flex-col mt-[120px] lg:mt-[276px] mb-20">
      <h2 className="text-[#00A9CF] font-schabo text-[30px] lg:text-[60px] font-normal uppercase ">
        NBD FC: Always Striving, Never Giving Up.
      </h2>

      {FAQData.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="border-b-2 border-[#B5F1FF] border-dashed ">
              <DisclosureButton
                className="flex items-center justify-between w-full  py-6 text-left"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span
                  className={` flex text-[#B5F1FF] font-object-sans text-[20px] font-extrabold uppercase`}
                >
                  <span className="text-[#B5F1FF] font-comedik text-[38px] font-normal leading-[33.75px] flex h-[54px] rotate-[-1.2deg] flex-col justify-center opacity-50 mr-2 self-center">
                    #{item.id}
                  </span>
                  {item.question}
                </span>
                
                <span className="flex ">
                  {/* Cone Icon  */}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="65"
                      viewBox="0 0 97 65"
                      fill="none"
                    >
                      <path
                        d="M0.180069 22.2572C0.218999 22.0615 0.330598 21.9791 0.405863 21.8554C0.776992 21.4125 1.19484 21.1705 1.60231 20.9284C2.17847 20.604 2.76242 20.3361 3.34896 20.1121C5.68217 19.2598 8.0439 18.7937 10.403 18.3946C15.2485 17.6967 20.1096 17.5809 24.9628 17.2435C28.521 16.9526 32.0792 16.6796 35.64 16.7594C39.3436 16.9036 43.0445 17.2152 46.7454 17.5114C48.0016 17.5886 48.0249 21.5001 46.7454 21.5979C45.6009 21.6056 44.4564 21.5155 43.3118 21.4434C40.9319 21.2761 38.552 21.0469 36.1694 20.9593C30.2106 20.8125 24.2595 21.585 18.3032 21.7808C12.7778 21.9043 7.2705 23.0194 1.74765 23.2125C1.43361 23.1481 0.00877774 23.3928 0.180069 22.2494V22.2572Z"
                        fill="#B5F1FF"
                      />
                      <path
                        d="M2.20476 32.0783C2.24369 31.8825 2.35529 31.8002 2.43055 31.6766C2.80168 31.2336 3.21953 30.9916 3.627 30.7496C4.20316 30.4251 4.78711 30.1573 5.37365 29.9333C7.70684 29.0809 10.0686 28.6148 12.4278 28.2157C17.2733 27.5178 17.089 27.6106 21.9423 27.2758C25.5004 26.9848 26.0922 26.7119 29.6529 26.7916C33.3565 26.9359 37.0574 27.2475 40.7584 27.5436C42.0145 27.6208 42.0378 31.5323 40.7584 31.6302C39.6138 31.6379 38.4693 31.5478 37.3247 31.4757C34.9448 31.3083 32.5649 31.0791 30.1824 30.9916C24.2235 30.8448 21.2389 31.6173 15.2826 31.813C9.75715 31.9366 9.29263 32.8405 3.76974 33.0336C3.45571 32.9692 2.03087 33.2139 2.20216 32.0705L2.20476 32.0783Z"
                        fill="#B5F1FF"
                      />
                      <path
                        d="M45.8681 39.2936C45.946 40.6429 45.3854 41.8866 44.7391 41.8017C39.6315 41.1321 36.6313 41.4283 31.1318 40.9081C25.622 40.3287 25.1003 41.1682 19.5878 40.6583C19.279 40.5554 17.8437 40.6171 18.0929 39.4995C18.1448 39.3116 18.2616 39.242 18.3446 39.1287C18.7443 38.7348 19.1752 38.5468 19.5982 38.3562C20.1925 38.1064 20.7921 37.9133 21.3915 37.7666C23.7715 37.2155 26.1566 37.0507 28.5313 36.9554C33.4053 36.8781 33.2133 36.9476 38.0692 37.231C41.3626 37.3829 42.1308 37.2232 45.0298 37.6224C45.471 37.6842 45.8162 38.3666 45.8681 39.291V39.2936Z"
                        fill="#B5F1FF"
                      />
                      <path
                        d="M63.5911 6.7934C63.9126 6.09296 64.4602 5.52091 65.146 5.1691C65.8317 4.81729 66.6158 4.70615 67.3723 4.85351L71.4957 5.65564C72.2388 5.80033 72.9134 6.18632 73.4148 6.7537C73.9161 7.32108 74.2161 8.03809 74.2681 8.79343L77.7379 59.3991L84.8778 60.7881C85.3252 60.8751 85.7198 61.1363 85.9746 61.5143C86.2295 61.8922 86.3237 62.3559 86.2367 62.8034C86.1497 63.2508 85.8884 63.6454 85.5105 63.9002C85.1325 64.1551 84.6688 64.2493 84.2214 64.1623L33.6077 54.3161C33.1602 54.2291 32.7657 53.9679 32.5108 53.5899C32.256 53.212 32.1617 52.7483 32.2488 52.3008C32.3358 51.8533 32.5971 51.4588 32.975 51.204C33.3529 50.9491 33.8167 50.8548 34.2641 50.9419L41.3973 52.3295C42.887 49.226 44.4577 46.0121 46.076 42.7339L66.6015 46.7269C67.049 46.8139 67.5127 46.7196 67.8907 46.4648C68.2686 46.2099 68.5298 45.8154 68.6169 45.3679C68.7039 44.9205 68.6097 44.4568 68.3548 44.0788C68.1 43.7009 67.7054 43.4397 67.258 43.3526L47.6536 39.5389L50.2352 34.3329L50.8223 33.1514L65.1965 35.9477C65.644 36.0347 66.1077 35.9405 66.4856 35.6856C66.8636 35.4308 67.1248 35.0362 67.2119 34.5888C67.2989 34.1413 67.2046 33.6776 66.9498 33.2997C66.6949 32.9217 66.3004 32.6605 65.8529 32.5735L52.4066 29.9577C56.3277 22.0426 60.2237 14.1122 63.5911 6.7934Z"
                        fill="#B5F1FF"
                      />
                    </svg>
                  </span>
                  {/* Info Button */}
                  <span className="bg-[#00A9CF] p-3 w-[164.719px] h-[55.965px] flex-shrink-0">
                    {open ? (
                      <div className="flex flex-row justify-center">
                        <p className="text-[#020037]  text-[26.3px] not-italic font-normal leading-[23.63px]">
                          Less Info
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="32"
                          viewBox="0 0 31 32"
                          fill="none"
                        >
                          <path
                            d="M4.17988 22.0085C4.06935 21.7514 4.09701 21.5234 4.10965 21.4288L4.11028 21.3927L4.12239 21.329C4.1934 20.9424 4.35252 20.6437 4.48103 20.4032L4.49763 20.3725C4.67657 20.0531 4.87825 19.7384 5.10264 19.4307C5.93053 18.3175 6.87997 17.3138 7.78226 16.3949L7.79341 16.3842C9.38604 14.8215 9.62992 14.6083 10.8004 13.5824C11.047 13.3667 11.3346 13.1148 11.6799 12.811C12.1258 12.4115 12.4498 12.109 12.7353 11.8427C13.1582 11.4487 13.4969 11.133 13.9937 10.7218C14.0986 10.5792 14.2209 10.4503 14.3581 10.3368C14.6911 10.0638 15.0818 9.91783 15.4571 9.92438C15.7555 9.92958 16.0286 10.0292 16.247 10.2127C17.0888 10.921 17.4903 11.3227 18.0463 11.8782C18.3232 12.1542 18.6365 12.4679 19.0623 12.8775C19.4018 13.1984 19.6805 13.4594 19.9185 13.6835C21.0534 14.7496 21.2897 14.972 22.8268 16.5892L22.8376 16.6003C23.7082 17.5501 24.6212 18.5863 25.4147 19.7346C25.6241 20.0439 25.8147 20.3654 25.9824 20.69L25.9979 20.7214C26.118 20.9661 26.2666 21.2701 26.3241 21.6591L26.3331 21.7231L26.3325 21.7592C26.3426 21.8542 26.3615 22.083 26.243 22.3362L26.2158 22.3886C26.0107 22.7553 25.6441 22.9706 25.2358 22.9635C24.7472 22.955 24.3679 22.6377 24.1421 22.4473C24.1245 22.4327 24.1087 22.419 24.0954 22.4087L24.056 22.3845L24.0019 22.3357C22.8637 21.3132 22.2904 20.6802 21.7353 20.0668C21.1728 19.4448 20.6409 18.8578 19.5082 17.8589C18.4799 16.9375 17.7033 16.1791 16.9532 15.4464C16.4344 14.9394 15.9371 14.4538 15.387 13.9446C14.7929 14.4548 14.2601 14.9401 13.7033 15.4477C12.9282 16.1538 12.1255 16.8846 11.0614 17.7738C9.89974 18.7284 9.34777 19.2966 8.76387 19.8985C8.18781 20.4914 7.59275 21.1049 6.41953 22.0871L6.36378 22.1339L6.32362 22.1568C6.30988 22.1675 6.29361 22.1806 6.27559 22.1946C6.04242 22.3761 5.65316 22.6808 5.16451 22.6723C4.75618 22.6652 4.39735 22.4381 4.20514 22.0636L4.17984 22.0111L4.17988 22.0085Z"
                            fill="#020037"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex flex-row justify-center">
                        <p className="text-[#020037] text-[26.3px] not-italic font-normal leading-[23.63px]">
                          More Info
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                        >
                          <path
                            d="M4.17988 9.49287C4.06935 9.75005 4.09701 9.97798 4.10965 10.0726L4.11028 10.1088L4.12239 10.1724C4.1934 10.5591 4.35252 10.8578 4.48103 11.0982L4.49763 11.1289C4.67657 11.4483 4.87825 11.763 5.10264 12.0707C5.93053 13.184 6.87997 14.1877 7.78226 15.1065L7.79341 15.1172C9.38604 16.6799 9.62992 16.8931 10.8004 17.919C11.047 18.1347 11.3346 18.3866 11.6799 18.6905C12.1258 19.0899 12.4498 19.3925 12.7353 19.6587C13.1582 20.0527 13.4969 20.3684 13.9937 20.7796C14.0986 20.9222 14.2209 21.0511 14.3581 21.1646C14.6911 21.4376 15.0818 21.5836 15.4571 21.577C15.7555 21.5718 16.0286 21.4722 16.247 21.2887C17.0888 20.5804 17.4903 20.1787 18.0463 19.6232C18.3232 19.3472 18.6365 19.0335 19.0623 18.6239C19.4018 18.303 19.6805 18.0421 19.9185 17.8179C21.0534 16.7518 21.2897 16.5294 22.8268 14.9122L22.8376 14.9011C23.7082 13.9513 24.6212 12.9152 25.4147 11.7669C25.6241 11.4575 25.8147 11.136 25.9824 10.8114L25.9979 10.7801C26.118 10.5353 26.2666 10.2313 26.3241 9.8423L26.3331 9.77832L26.3325 9.74226C26.3426 9.64721 26.3615 9.41846 26.243 9.16522L26.2158 9.11283C26.0107 8.74608 25.6441 8.53081 25.2358 8.53793C24.7472 8.54645 24.3679 8.86372 24.1421 9.05411C24.1245 9.06867 24.1087 9.0824 24.0954 9.09267L24.056 9.1169L24.0019 9.16569C22.8637 10.1882 22.2904 10.8212 21.7353 11.4347C21.1728 12.0566 20.6409 12.6436 19.5082 13.6425C18.4799 14.5639 17.7033 15.3223 16.9532 16.055C16.4344 16.562 15.9371 17.0477 15.387 17.5569C14.7929 17.0466 14.2601 16.5613 13.7033 16.0537C12.9282 15.3477 12.1255 14.6168 11.0614 13.7276C9.89974 12.773 9.34777 12.2049 8.76387 11.6029C8.18781 11.0101 7.59275 10.3965 6.41953 9.41434L6.36378 9.36747L6.32362 9.34463C6.30988 9.33396 6.29361 9.3208 6.27559 9.30686C6.04242 9.12533 5.65316 8.8206 5.16451 8.82912C4.75618 8.83624 4.39735 9.06335 4.20514 9.43784L4.17984 9.49033L4.17988 9.49287Z"
                            fill="#020037"
                          />
                        </svg>
                      </div>
                    )}
                  </span>
                </span>
              </DisclosureButton>
              <Transition
                show={open}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <DisclosurePanel
                  className={`text-[#B5F1FF] font-objectSans text-[16.5px] font-normal leading-[24.75px]`}
                >
                  {item.answer}
                  <div className="self-center mt-10 justify-center flex gap-12 mb-36">
                    <Image src={item.image} alt={item.question} />
                    <Image src={item.image2} alt={item.question} />
                  </div>
                </DisclosurePanel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </section>
  );
};

export default Faq;
