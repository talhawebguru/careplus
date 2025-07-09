import React from 'react'
import Container from '../common/Container'

const OurHistory = () => {
  return (
    <section className='bg-[url("/images/ourHistory.png")] bg-cover lg:bg-center bg-no-repeat h-auto lg:h-[663px] flex items-center min-h-[400px]'>
      <Container>
        <div className="flex flex-col items-start max-w-2xl py-16 px-4 md:px-0">
          <h2 className="text-white text-[44px] font-normal font-['Roboto'] leading-tight mb-2">
            Safecare Medical<br />Industries
          </h2>
          <div className="mb-6">
            <span className="text-white text-2xl font-medium font-['Poppins']">Our History</span>
          </div>
          <p className="text-white text-xl font-normal font-['Poppins'] max-w-xl">
            Headquartered in Abu Dhabi UAE. Safecare is a Domestic Profit Corporation providing quality Medical plastic consumable products across all GCC countries. With its registered subsidiary factories and subsidiary offices across UK, USA, Germany, and China, Safecare thrives on producing and providing quality medical products across the globe.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default OurHistory