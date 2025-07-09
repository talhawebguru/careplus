import React from 'react'
import Container from '../common/Container'
import Image from 'next/image'

const categories = [
  {
    title: 'Surgical Packs',
    img: '/images/category1.png',
    alt: 'Surgical Packs',
  },
  {
    title: 'Sterile Drapes',
    img: '/images/category2.png',
    alt: 'Sterile Drapes',
  },
  {
    title: 'Surgical Kits',
    img: '/images/category3.png',
    alt: 'Surgical Kits',
  },
  {
    title: 'CSSD Wrappers',
    img: '/images/category4.png',
    alt: 'CSSD Wrappers',
  },
]

const ProductCategories = () => {
  return (
    <section className="py-16 lg:py-28">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[#1e1e1e] text-[44px] font-medium font-['Roboto'] mb-4">Our Product Categories</h2>
          <p className="text-[#323232] text-xl font-normal font-['Poppins'] max-w-3xl mx-auto">
            Our solutions encompass the entire gamut of healthcare delivery, ranging from: Turnkey solutions, Surgical, Clinical, Life Sciences, Laboratory Medicine etc.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {categories.map((cat, idx) => (
            <div key={cat.title} className="relative group overflow-hidden shadow-md h-[338px] flex flex-col justify-end">
              <Image
                src={cat.img}
                alt={cat.alt}
                width={304}
                height={338}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-[57px] bg-gradient-to-b from-[#0898a3]/80 to-[#00d3b3]/80 flex items-center justify-center">
                <span className="text-white text-2xl font-medium font-['Poppins']">{cat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductCategories