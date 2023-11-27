import React, { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import { LeftSlider, Lock, RightSlider } from "../latest-news/AppIcons"
import SwiperCore, { Navigation } from "swiper"
SwiperCore.use([Navigation])

const OpenBased = () => {
  const OpenJDK = [
    {
      id: 1,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
    {
      id: 2,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
    {
      id: 3,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
    {
      id: 4,
      heading: "OpenJDK-Based",
      content:
        "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are.",
    },
  ]

  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update()
    }
  }, [OpenJDK])

  const handlePrevbase = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextbase = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <div className="OpenJDK-Based">
      <div className=" lg:py-14 md:py-18 pb-8 mx-auto w-full">
        <div className="mx-auto lg:pl-[88px] pl-6 w-full flex lg:flex-row flex-col items-start lg:items-end justify-center lg:space-x-8 xl:space-x-16 relative overflow-hidden">
          <div className="max-w-[600px] w-full flex flex-col justify-between mb-16 lg:mb-0">
            <div className="">
              <h2 className="here text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900">
                OpenJDK-Based
              </h2>
              <h3 className="text-xl font-normal leading-7 text-[#C4BFCE] mt-6 mb-8">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime binaries that are enterprise-ready and
                Java SE TCK-tested for general use in the Java ecosystem.
              </h3>
              <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[212px] h-[48px] ">
                Download Temurin™
              </button>
            </div>
            <div className="lg:flex gap-4 items-center mt-16 hidden">
              <button onClick={handlePrevbase} className="text-white">
                <LeftSlider />
              </button>
              <button onClick={handleNextbase} className="text-white">
                <RightSlider />
              </button>
            </div>
          </div>
          <Swiper
            loop={true}
            slidesPerView={"auto"}
            className="mySwiperbase w-full"
            breakpoints={{
              320: {
                spaceBetween: 16,
              },
              1024: {
                spaceBetween: 32,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            ref={swiperRef}
          >
            {OpenJDK.map((card, index) => (
              <SwiperSlide
                className={`!w-[256px] p-8 lg:p-16 lg:w-[256px] newscard `}
                key={index}
              >
                <span>
                  <Lock />
                </span>
                <div className=" space-y-6 mt-[106px]">
                  <h2 className="text-primary text-base leading-6 font-bold m-0 flex items-center gap-x-3">
                    {card.heading}
                  </h2>
                  <p className="text-white text-xl font-normal leading-7 mt-6">
                    {card.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>{" "}
          <div className="flex gap-4 items-center mt-16 w-full justify-center lg:hidden">
            <button onClick={handlePrevbase} className="text-white">
              <LeftSlider />
            </button>
            <button onClick={handleNextbase} className="text-white">
              <RightSlider />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenBased
