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
        <h2 className="text-white md:text-[56px] text-5xl font-normal leading-[44px] md:leading-[56px] text-center">
          Latest Releases
        </h2>
        <p className="text-center mt-6 text-[#C4BFCE] text-base font-normal leading-6">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime <br /> binaries that are enterprise-ready and Java SE
          TCK-tested for general use in the Java ecosystem.
        </p>
        <div className="flex xl:flex-nowrap flex-wrap justify-center max-w-[1264px] w-full mx-auto gap-x-8 gap-y-4 py-16">
          {LatestReleasesCard.map((card, more) => (
            <div
              key={more}
              className="p-8 border-[2px] border-white rounded-3xl bg-tones-white"
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
                className="text-base font-bold leading-6 text-white  bg-primary rounded-[80px] w-[169px] h-[56px] mt-8 flex items-center justify-center gap-3 border border-primary hover:bg-transparent hover:text-primary duration-300 ease-in-out"
              >
                <span>
                  <AppleIcon />
                </span>
                Download
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center  items-center gap-x-10 sm:gap-y-0 gap-y-6">
          <p className="text-xl text-white font-normal leadig-7 !mb-0 text-center">
            Eclipse Temurin offers high-performance
          </p>
          <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px] ">
            See all Releases
          </button>
        </div>
      </section>
    </>
  )
}

export default LatestReleases
