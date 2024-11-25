import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#EBFEFF]">
      <div className="w-[1150px] h-[524px] flex justify-between ">
        {/* Left */}
     
          <div className="w-[651px] h-[166px] ml-[2px] mt-[109px] flex flex-col gap-5">
            <h2 className="sora text-[24px] font-normal leading-[30.24px] text-[#457B9D]">
              Hi Everyone, I am
            </h2>
            <h1 className="sora text-[48px] font-bold leading-[60.48px]">
              Rizfan Herlaya
            </h1>
            <p className="sora font-normal text-[20px] leading-[25.2px] text-gray-800">
              Lorem ipsum dolor sit amet consectetur. Vitae maecenas
              pellentesque tellus tempus purus integer nisi cras fermentum.
            </p>
         
          <div className="flex gap-3 mt-10">
            <button className="w-[274px] h-[64px] rounded-[5px] bg-[#457B9D] sora font-[400] text-[20px] leading-[25.2px] text-[#FFFFFF]">
              Download CV
              <Image
                src="/download.png"
                alt="download"
                width={30}
                height={30}
                className="ml-[210px] -mt-7"
              />
            </button>
            <button className="w-[274px] h-[64px] rounded-[5px] bg-[#457B9D1A] text-[#457B9D] border-[1px] border-solid border-[#457B9D]">
              Explore More
            </button>
          </div>
          </div>
       
        {/* right */}
        <div className="w-[479px] h-[390px] bg-[#457B9D] rounded-[40px] mt-[84px] [box-shadow:0px_4px_4px_0px_#00000040]">
        <Image
                src="/574cdb1182b5767b58c4cc5ee9bfccba.png"
                alt="download"
                width={905}
                height={524.76}
                className="-mt-[90px] rounded-[15px]"
              />
        </div>
      </div>
    </div>
  );
}

export default Hero;
