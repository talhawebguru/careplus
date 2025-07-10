import React from 'react'
import Container from '../common/Container'

const NewsLetter = () => {
  return (
    <>
    <section className="overflow-hidden bg-[#f4f4f4] py-12">
      <Container>
        <div className="w-full max-w-[1248px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 h-14">
          <div className="text-[#1e3d69] text-2xl font-normal font-['Roboto'] text-left md:w-auto w-full mb-4 md:mb-0">
            Join our newsletter to<br />keep up to date With us!
          </div>
          <form className="flex w-full md:w-auto items-center gap-3">
            <div className="relative w-full md:w-[436px]">
              <input
                type="email"
                placeholder="Enter your gmail"
                className="w-full h-[49px] bg-white/90 rounded border border-[#323232]/20 px-5 text-[#bebebe] text-base font-normal font-['Roboto'] leading-normal focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="px-[35px] cursor-pointer py-[15px] bg-[#1fb9fb] rounded text-white text-base font-medium font-['Inter'] hover:bg-primary transition"
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
    </>
  )
}

export default NewsLetter