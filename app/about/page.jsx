import React from 'react'
import Quality from '../components/home/Quality'
import NewsLetter from '../components/home/NewsLetter'
import { About } from '../components/about/About'
import WhoWeAre from '../components/about/WhoWeAre'
import OurMissionOurVision from '../components/about/OurMissionOurVision'

const page = () => {
  return (
    <>
    <About/>
    <WhoWeAre/>
    <OurMissionOurVision/>
    <Quality/>
    <NewsLetter/>
    </>
  )
}

export default page