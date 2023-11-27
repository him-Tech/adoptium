import React from "react"
import LatestNewsSlider from "./LatestNewsSlider"
import { RedIcon } from "./AppIcons"

const LatestNews = () => {
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
  const set1 = newsmap.slice(0, 2)
  const set2 = newsmap.slice(2, 4)

  return (
    <>
      <div className="bg-purple py-14 lg:py-32 xl:px-0 lg:px-8 px-0">
        <div className="mx-auto max-w-[1264px] w-full flex lg:flex-row flex-col items-start lg:items-center justify-center lg:space-x-8 xl:space-x-16 relative overflow-hidden">
          <div className="max-w-[436px] w-full mb-16 lg:mb-0 px-6">
            <h2 className="here text-4xl lg:text-5xl leading-[44px] lg:leading-[56px] font-semibold text-white-900">
              Latest news and updates
            </h2>
            <h3 className="text-xl font-normal leading-7 text-[#C4BFCE] mt-6 mb-8">
              Eclipse Temurin offers high-performance, cross-platform,
              open-source Java runtime binaries that are enterprise-ready and
              Java SE TCK-tested for general use in the Java ecosystem.
            </h3>
            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[154px] h-[48px] block ">
              See all news
            </button>
          </div>
          <div className="max-w-[780px] w-full lg:flex gap-4 xl:gap-x-8 hidden  ">
            {/* First set of news items */}
            <div className="max-w-[374px] w-full lg:flex hidden flex-col space-y-4 xl:space-y-8">
              {set1.map((card, more) => (
                <div key={more} className="newscard p-8 xl:p-10">
                  <h2 className="text-primary text-lg leading-6 font-bold m-0 flex items-center gap-x-3">
                    <RedIcon />
                    {card.news}
                  </h2>
                  <p className="text-white text-lg xl:text-xl font-normal leading-6 xl:leading-7 my-2">
                    {card.content}
                  </p>
                  <span className="text-sm text-[#C4BFCE] font-normal leading-5 block">
                    {card.Date}
                  </span>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 text-base font-bold leading-6 text-white mt-2 block border-b-[1.5px] border-white w-fit"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
            {/* Second set of news items */}
            <div className="max-w-[374px] w-full  lg:flex hidden flex-col space-y-4 xl:space-y-8 mt-16">
              {set2.map((card, more) => (
                <div key={more} className="newscard p-8 xl:p-10">
                  <h2 className="text-primary text-lg leading-6 font-bold m-0 flex items-center gap-x-3">
                    <RedIcon />
                    {card.news}
                  </h2>
                  <p className="text-white text-lg xl:text-xl font-normal leading-6 xl:leading-7 my-2">
                    {card.content}
                  </p>
                  <span className="text-sm text-[#C4BFCE] font-normal leading-5 block">
                    {card.Date}
                  </span>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 text-base font-bold leading-6 text-white mt-2 block border-b-[1.5px] border-white w-fit"
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex relative lg:hidden">
            <LatestNewsSlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNews
