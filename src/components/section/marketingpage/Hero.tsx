"use client";
import { useRef } from "react";
import arrowRight from "@/assests/arrow-right.svg";
import cogImageb from "@/assests/cog-b.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#8B4513,#F5F5DC_80%)]"
    >
      <div className="container px-4 mx-auto">
        <div className="md:flex items-center pl-5">
          {/* Left Section */}
          <div className="md:w-[478px]">
            <div className="text-sm bg-brown-light/30 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg">
              <span className="tag">
                Version 2.0 is here
              </span>
              <span className="text-[#8B4513] italic">
                {"— Brown and beige never looked this good!"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-24 text-transparent bg-clip-text bg-gradient-to-b from-[#4B2E15] to-[#8B4513]">
              Pathway to Productivity
            </h1>
            <p className="text-xl tracking-tight mt-6 text-[#4B2E15]">
              Enjoy your work life by arranging and prioritizing your tasks through Taskprod.
            </p>
            <div className="flex gap-4 items-center mt-8">
              <Button className="btn rounded-xl">Start Now</Button>
              <button className="btn-text gap-1" aria-label="Learn more">
                <span>Learn more</span>
                <Image src={arrowRight} alt="Arrow Right Icon" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative lg:left-28">
            <div            >
              <Image
                src={cogImageb}
                alt="Main Productivity Cog"
                className="md:absolute md:h-full md:w-auto sm:p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;