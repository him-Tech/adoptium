import React from "react"
import { RedIcon } from "../../latest-news/AppIcons"
import { AppleIcon } from "../../common/Icon"

const LatestReleases = () => {
  const LatestReleasesCard = [
    {
      id: 1,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 2,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 3,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
    {
      id: 4,
      release: "Latest Release",
      content: "jdk-21+35 - Temurin",
      Date: "12 October 2023 •  macOS • aarch64",
      link: "/",
    },
  ]
  return (
    <>
      <section className="px-6 xl:px-0 flex flex-col items-center justify-center py-8 lg:py-16">
        <h2 className="text-white text-[36px] md:text-[48px] font-normal font-hanken leading-[44px] md:leading-[56px] text-center mt-8">
          Latest Releases
        </h2>
        <p className="text-center mt-6 text-[#C4BFCE] text-[16px] font-hanken font-normal mb-0 leading-6">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime <br /> binaries that are enterprise-ready and Java SE
          TCK-tested for general use in the Java ecosystem.
        </p>
        <div className="flex xl:flex-nowrap flex-wrap justify-center max-w-[1264px] w-full mx-auto gap-x-8 gap-y-4 py-16">
          {LatestReleasesCard.map((card, more) => (
            <div
              key={more}
              className="newscard-2 max-w-[420px] w-full  md:w-auto  p-8  transition-all duration-300 ease-in-out rounded-3xl bg-tones-white backdrop-blur-12"
            >
              <h2 className="text-primary text-base leading-6 font-normal underline flex items-center gap-x-3">
                <span className="">
                  <RedIcon />
                </span>
                {card.release}
              </h2>
              <p className="text-white text-2xl font-normal leading-8 mt-2">
                {card.content}
              </p>
              <span className="text-base text-[#C4BFCE] font-normal leading-6 block mt-4">
                {card.Date}
              </span>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold leading-6 text-white  bg-primary rounded-[80px] w-[169px] h-[56px] mt-8 flex items-center justify-center gap-3 border border-primary hover:shadow-slate-900 hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <span>
                  <AppleIcon />
                </span>
                Download
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center  items-center gap-x-14 sm:gap-y-0 gap-y-6">
          <p className="text-xl text-white font-normal leadig-7 !mb-0 text-center">
            Eclipse Temurin offers high-performance
          </p>
          <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out">
            See all Releases
          </button>
        </div>
      </section>
    </>
  )
}

export default LatestReleases
