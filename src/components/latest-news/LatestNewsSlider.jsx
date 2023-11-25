import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import SwiperCore, { Navigation } from "swiper/core"
import { Link } from "react-scroll"

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
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      navigation={true}
      loop={true}
      className="mySwiper lg:hidden border flex justify-center"
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
            margin: "auto",
            "@media (min-width: 768px)": {
              width: "50%",
            },
            "@media (min-width: 1024px)": {
              width: "33.33%",
            },
          }}
        >
          <div
            className="newscard  p-8 lg:p-10"
            style={{
              margin: "auto",

              "@media (max-width: 690px)": {
                width: "40%",
              },
              "@media (max-width: 800px)": {
                width: "40%",
              },
            }}
          >
            <h2 className="text-primary text-lg leading-6 font-bold m-0 flex items-center gap-x-3">
              {card.news}
            </h2>
            <p className="text-white text-xl font-normal leading-7 mt-8 mb-2 lg:my-2">
              {card.content}
            </p>
            <span className="text-sm text-[#C4BFCE] font-normal leading-5 block mb-8">
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
  )
}

export default LatestNewsSlider
