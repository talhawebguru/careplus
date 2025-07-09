import React from 'react'
import Image from 'next/image'
import EndSectionImg from "@/public/images/endSection.png"

const EndSection = () => {
  return (
    <>
    <section className='h-32'>
        <Image
        src={EndSectionImg}
        alt={"End Section"}
        className='h-32 w-full'
        />
    </section>
    </>
  )
}

export default EndSection