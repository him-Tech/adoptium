import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import SwiperCore, { Navigation } from "swiper/core"
import { Link } from "react-scroll"
import { RedIcon } from "./AppIcons"

// Use SwiperCore modules
SwiperCore.use([Navigation])

const LatestNewsSlider = () => {
  const newsmap = [
    {
      id: 1,
      news: "News",
      content:
        "Explore the Eclipse Temurin Community and Join the Elite List of Adopters",
      Date: "5 Jun, 2023",
      link: "/",
    },
    {
      id: 2,
      news: "News",
      content:
        "Explore the Eclipse Temurin Community and Join the Elite List of Adopters",
      Date: "5 Jun, 2023",
      link: "/",
    },
    {
      id: 3,
      news: "News",
      content:
        "Explore the Eclipse Temurin Community and Join the Elite List of Adopters",
      Date: "5 Jun, 2023",
      link: "/",
    },
    {
      id: 4,
      news: "News",
      content:
        "Explore the Eclipse Temurin Community and Join the Elite List of Adopters",
      Date: "5 Jun, 2023",
      link: "/",
    },
  ]

  return (
    <div className="overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={true}
        loop={true}
        className="mySwiper lg:hidden flex justify-center"
        breakpoints={{
          414: {
            slidesPerView: 1.2,
          },
          550: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
        }}
      >
        {newsmap.map((card, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "320px",
            }}
          >
            <div className="newscard  p-8">
              <h2 className="text-primary text-base leading-6 font-bold m-0 flex items-center gap-x-3">
                <RedIcon />
                {card.news}
              </h2>
              <p className="text-white text-xl font-normal leading-7 mt-6 mb-2">
                {card.content}
              </p>
              <span className="text-sm text-[#C4BFCE] font-normal leading-5 block mb-6">
                {card.Date}
              </span>
              <Link
                to={card.link}
                className="py-3 text-base font-bold leading-6 text-white  block border-b-[1.5px] border-white w-fit"
              >
                Read More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default LatestNewsSlider
