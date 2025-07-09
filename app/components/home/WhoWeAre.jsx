"use client";
import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import { motion } from "motion/react";

const WhoWeAre = () => {
  return (
    <section className="py-0 -mt-20">
        <Container>
          <div className="bg-[url('/images/whoWeAreBg.png')] bg-no-repeat bg-cover flex flex-col lg:flex-row items-center justify-between min-h-[623px] py-10 lg:py-10 px-3 md:px-14">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex-shrink-0 w-full max-w-[527px] h-[400px] lg:h-[622px] mb-8 lg:mb-0 lg:mr-10 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/whoWeAre.png"
                alt="Medical professional"
                width={527}
                height={622}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="flex-1 flex flex-col justify-center items-start max-w-xl"
            >
              <h2 className="text-white text-[44px] font-normal font-['Roboto'] mb-6 leading-tight">
                who we are?
              </h2>
              <div className="mb-8">
                <span className="text-white text-xl font-medium font-['Poppins']">Safecare Medical Industries</span>
                <span className="text-white text-xl font-normal font-['Poppins']"> was conceived and established in the year of 2016 that plans to give a different dimension to the medical industries all across the Middle East</span>
              </div>
              <button className="px-[26px] py-[11px] rounded outline-[1.5px] outline-offset-[-1.5px] outline-white inline-flex justify-center items-center gap-2.5 hover:bg-white/10 transition">
                <span className="text-white text-base font-medium font-['Poppins']">Contact Us</span>
              </button>
            </motion.div>
          </div>
        </Container>
    </section>
  );
};

export default WhoWeAre;
