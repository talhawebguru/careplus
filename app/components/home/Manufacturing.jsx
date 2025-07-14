import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import * as motion from "motion/react-client";
import { IoPlayCircle } from "react-icons/io5";

const Manufacturing = () => {
  return (
    <section className="bg-[#f8f8f8] py-16 lg:py-24 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-start gap-12 xl:gap-20">
          {/* Left: Image with play button */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex flex-col items-start max-w-xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-[#1e3d69] text-[44px] font-normal font-['Roboto'] mb-6 leading-tight"
            >
              Manufacturing
              <br />
              Techniques
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-[#323232] text-xl font-normal font-['Poppins'] mb-2"
            >
              Our manufacturing includes a wide variety of processes including{" "}
              <span className="font-medium">
                Injection moulding, Blow Moulding, Thermoforming
              </span>{" "}
              etc. and all those that are required for a World Class Medical
              Manufacturing Facility.
            </motion.p>
          </motion.div>
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative self-end w-full h-[320px] lg:h-[348px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-white flex-1"
          >
            <Image
              src="/images/manufacturing.png"
              alt="Manufacturing Facility"
              width={540}
              height={348}
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <IoPlayCircle className="text-white " size={80} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Manufacturing;
