import React from "react"
import { MassageIcon } from "../../latest-news/AppIcons"

const Community = () => {
  return (
    <>
      <section className=" community xl:px-0 px-6 md:py-24 pt-6 pb-16">
        <div className="max-w-[832px] w-full mx-auto md:py-0 py-8 flex justify-center items-center flex-col text-center md:bg-transparent bg-tones-white rounded-3xl md:backdrop-blur-0 backdrop-blur-12 px-6">
          <MassageIcon />
          <p className="text-white text-4xl md:text-5xl leading-[44px] md:leading-[56px] font-normal mt-8">
            Connect with the community
          </p>
          <span className="mt-6 text-[#C4BFCE] text-base font-normal leading-6">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </span>
          <button className=" !bg-transparent mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[146px] h-[48px] rounded-[80px] gradient-btn  transition-all duration-500 ease-in-out">
            Learn More
          </button>
        </div>
      </section>
    </>
  )
}

export default Community
