import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="w-[1440px] h-[616px] flex justify-evenly items-center" id="about">
      <div>
        <Image
          src="/Code typing-amico 1 (1).png"
          alt="code"
          width={500}
          height={500}
        />
      </div>
      {/* right */}
      <div className="w-[564px] h-[358px]">
        <h1 className="sora font-[600] text-[24px] leading-[30.24px] text-[#457B9D]">About</h1>
        <h1 className="sora font-[700] text-[48px] leading-[60.48px] mb-2">About Me?</h1>
        <p className="sora font-[400] text-[20px] leading-[25.2px] text-[#455A64]">
          Lorem ipsum dolor sit amet consectetur. Iaculis diam augue a
          adipiscing non aliquet. Leo semper lacus fringilla consectetur cras ac
          ullamcorper ut. Risus nunc diam accumsan feugiat. Tristique diam
          consectetur aliquam vitae suspendisse vel leo. Nec quisque senectus
          laoreet id pulvinar id vulputate. Montes consectetur diam non aliquam
          nunc maecenas non. Molestie pretium amet id dictum vitae nam vel sit.
          Rhoncus massa velit ut amet massa morbi eget.
        </p>
      </div>
    </div>
  );
}

export default About;
