import React from 'react'
import Container from '../common/Container'
import * as motion from "motion/react-client"

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[url('/images/heroBg.png')] bg-cover bg-center bg-no-repeat h-auto lg:h-[calc(100vh-80px)] lg:max-h-[950px] flex items-center min-h-fit">
      <Container>
        <div className="flex items-center min-h-[663px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full max-w-[623px]"
          >
            {/* Welcome Badge */}
            <div className="absolute left-0 top-0 z-10">
              <div className="bg-white rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[0px] rounded-br-[0px] px-6 py-2 min-w-[167px] min-h-[57px] flex items-center">
                <span className="text-primary text-[33.09px] font-normal font-['Roboto'] leading-none">Welcome!</span>
              </div>
            </div>
            {/* Glass Card */}
            <div className="mt-[45px] pl-[14px]">
              <div className="bg-white/50 border-l-[6px] border-primary backdrop-blur-[7px] p-8 pt-12 relative">
                <h1 className="text-[#000d21] text-[42px] font-normal font-roboto leading-14 mb-6 max-w-[420px]">
                  Revolutionise care. For people and planet.
                </h1>
                <div className="mt-2">
                  <p className="text-[#000e21] text-[23.02px] font-medium font-['Poppins']">
                    Safecare Medical Industries
                    <span className="font-normal"> was conceived and established in the year of 2016.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero