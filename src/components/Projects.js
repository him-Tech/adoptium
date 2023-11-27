import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const projects = [
  {
    title: "Eclipse Temurin™",
    imagePath: "images/about-products-img-2.png",
    link: "#",
  },
  {
    title: "Eclipse AQAvit",
    imagePath: "images/about-products-img.png",
    link: "#",
  },
  {
    title: "Eclipse Mission Control",
    imagePath: "images/about-products-img-1.png",
    link: "#",
  },
]

const Projects = () => {
  return (
    <div className="bg-blue py-24 sm:py-28">
      <div className="mx-auto max-w-[1264px] w-full px-6 xl:px-0">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-center text-[36px] md:text-[48px] font-semibold text-white md:leading-[56px] leading-[44px] ">
            A short title about products
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl mb-0 text-base leading-6 text-[#C4BFCE] text-center">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime binaries that are enterprise-ready and Java SE TCK-tested
          for general use in the Java ecosystem.
        </p>
        <div className="mt-16 flex justify-around lg:justify-between flex-wrap lg:flex-nowrap  gap-6 xl:gap-8">
          <div className="  max-w-[400px] h-[420px] sm:h-[520px] w-full ">
            <div className="bg-white flex justify-between flex-col bg-opacity-5 p-8 xl:p-[64px] h-full rounded-3xl border-2 border-white border-opacity-50">
              <StaticImage
                src="../images/about-products-img-temurin.png"
                alt="images/about-products-img-temurin.png"
                height={120}
                class="w-[120px]"
              />
              <div className=" flex-col justify-center items-start gap-2">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="w-2 h-2 bg-rose-600 rounded-sm border-2 border-rose-600 border-opacity-25" />
                  <p className="text-rose-600 mb-0 text-base leading-6 font-bold">
                    Overline
                  </p>
                </div>
                <h2 className="text-white text-[26px] md:text-[32px] font-hanken leading-8 md:leading-10 font-semibold mt-2">
                  Eclipse Temurin™
                </h2>
                <a href="#">
                  <button className="bg-transparent border-2 mt-8 sm:mt-10 border-pink-500/0 text-whit text-base leading-6 font-bold w-[148px] h-[48px] rounded-2xl gradient-border">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="  max-w-[400px] h-[420px] sm:h-[520px] w-full ">
            <div className="bg-white flex justify-between flex-col bg-opacity-5 p-8 xl:p-[64px] h-full rounded-3xl border-2 border-white border-opacity-50">
              <StaticImage
                src="../images/about-products-img.png"
                alt="images/about-products-img.png"
                height={120}
                class="w-[120px]"
              />
              <div className=" flex-col justify-center items-start gap-2">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="w-2 h-2 bg-rose-600 rounded-sm border-2 border-rose-600 border-opacity-25" />
                  <p className="text-rose-600 mb-0 text-base leading-6 font-bold">
                    Overline
                  </p>
                </div>
                <h2 className="text-white text-[26px] md:text-[32px] font-hanken leading-8 md:leading-10 font-semibold mt-2">
                  Eclipse AQAvit™
                </h2>
                <a href="#">
                  <button className="bg-transparent border-2 mt-8 sm:mt-10 border-pink-500/0 text-whit text-base leading-6 font-bold w-[148px] h-[48px] rounded-2xl gradient-border">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="  max-w-[400px] h-[420px] sm:h-[520px] w-full ">
            <div className="bg-white flex justify-between flex-col bg-opacity-5 p-8 xl:p-[64px] h-full rounded-3xl border-2 border-white border-opacity-50">
              <StaticImage
                src="../images/about-products-img-mission.png"
                alt="images/about-products-img-mission.png"
                height={120}
                class="w-[120px]"
              />
              <div className=" flex-col justify-center items-start gap-2">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="w-2 h-2 bg-rose-600 rounded-sm border-2 border-rose-600 border-opacity-25" />
                  <p className="text-rose-600 mb-0 text-base leading-6 font-bold">
                    Overline
                  </p>
                </div>
                <h2 className="text-white text-[26px] md:text-[32px] font-hanken leading-8 md:leading-10 font-semibold mt-2">
                  Eclipse Mission Control™
                </h2>
                <a href="#">
                  <button className="bg-transparent border-2 mt-8 sm:mt-10 border-pink-500/0 text-whit text-base leading-6 font-bold w-[148px] h-[48px] rounded-2xl gradient-border">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
