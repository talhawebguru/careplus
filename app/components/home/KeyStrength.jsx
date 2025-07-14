import React from "react";
import Container from "../common/Container";
import * as motion from "motion/react-client";
import ourMissionVector from "@/public/images/ourMissionVectorR.png";
import Image from "next/image";

const strengths = [
  {
    badge: "Classified ISO 7, ISO 8",
    title: "Clean Rooms",
    desc: "Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
  {
    badge: "High Tech Automated",
    title: "Storage System",
    desc: `Safecare holds the unique accomplishment of having the world's finest automated storage system spread over a vast area of 30000 sq ft. The system ensures 100 percent efficiency in storage without involving any manual interventions`,
  },
  {
    badge: "Made with Supreme",
    title: "Pharma Grade",
    desc: "Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
];

const KeyStrength = () => {
  return (
    <section className="overflow-hidden py-16 lg:py-28 relative">
      <Image
        src={ourMissionVector}
        alt="Molecule vector"
        className="absolute w-[48%] object-cover left-[45%] top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-20"
        draggable={false}
      />
      <Container>
        <h2 className="text-[#1e3d69] text-[44px] font-normal font-['Roboto'] text-center mb-14">
          Our Key Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {strengths.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: "easeOut",
              }}
              className="bg-white/90 rounded-lg backdrop-blur-[0.50px] p-8 flex flex-col justify-start shadow"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#a9d6eb] rounded-lg text-[#1e3d69] text-[13px] font-medium font-['Poppins']">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-[#323232] text-[28px] font-medium font-['Poppins'] mb-4">
                {item.title}
              </h3>
              <p className="text-[#323232] text-base font-normal font-['Poppins']">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyStrength;
