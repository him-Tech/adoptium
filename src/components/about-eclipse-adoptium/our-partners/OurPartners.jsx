import React from "react"

import { Tab } from "@headlessui/react"
import { GithubIcon } from "../../common/Icon"
import { Link } from "gatsby"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const OurPartners = () => {
  const github = [
    { id: 1, svg: <GithubIcon className="" /> },
    { id: 2, svg: <GithubIcon className="" /> },
    { id: 3, svg: <GithubIcon className="" /> },
    { id: 4, svg: <GithubIcon className="" /> },
    { id: 5, svg: <GithubIcon className="" /> },
    { id: 6, svg: <GithubIcon className="" /> },
    { id: 7, svg: <GithubIcon className="" /> },
    { id: 8, svg: <GithubIcon className="" /> },
    { id: 9, svg: <GithubIcon className="" /> },
    { id: 10, svg: <GithubIcon className="" /> },
    { id: 11, svg: <GithubIcon className="" /> },
    { id: 12, svg: <GithubIcon className="" /> },
    { id: 13, svg: <GithubIcon className="" /> },
    { id: 14, svg: <GithubIcon className="" /> },
    { id: 15, svg: <GithubIcon className="" /> },
    { id: 16, svg: <GithubIcon className="" /> },
  ]

  return (
    <>
      <section className="max-w-[1264px] md:px-0 px-6 w-full mx-auto flex flex-col items-center justify-center  py-20">
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-[36px] sm:text-[42px] font-hanken leading-[56px] text-center">
            Our Partners
          </h3>
          <p className="text-[16px] font-hanken leading-[24px] text-[#C4BFCE] text-center mt-3">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-[15px] md:mt-[64px]  ">
          <div className="overflow-auto px-3 py-2 w-full md:w-auto">
            <h3 className="flex space-x-10 whitespace-nowrap  justify-center py-2">
              <a href="#Strategic">
                <span
                  className="text-[16px] py-2 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                >
                  Strategic Members
                </span>
              </a>
              <a href="#Enterprise">
                <span
                  className="text-[16px] py-3 border-primary w-full text-base font-normal leading-6
                outline-none hover:text-white hover:border-b
                hover:border-[#ff1464] text-[#8a809e] border-b
                border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                >
                  Enterprise Members
                </span>
              </a>
              <a href="#Participant">
                <span
                  className="text-[16px] py-2 border-primary w-full text-base font-normal leading-6
                  outline-none hover:text-white hover:border-b
                  hover:border-[#ff1464] text-[#8a809e] border-b
                  border-transparent cursor-pointer transition-all duration-200 ease-in-out"
                >
                  Participant Members
                </span>
              </a>
            </h3>
          </div>
          <Tab.Group>
            <div id="Strategic" className="w-full flex justify-between">
              <div className={classNames("w-full", "")}>
                <div className="col-span-full text-center mb-4">
                  <h2 className="text-center text-[28px] md:text-5xl leading-[56px] font-normal text-white py-4">
                    Strategic Members
                  </h2>
                </div>
                <div className="min-w-full overflow-auto">
                  <div className="grid grid-cols-4 gap-4 md:gap-6 min-w-[850px] md:min-w-[1220px]">
                    {github.map(data => (
                      <Link href="">
                        <div
                          key={data.id}
                          className="github relative  w-[200px] md:w-[296px] h-[86px] md:h-[112px] flex justify-center items-center  rounded-[20px] bg-tones-white backdrop-blur-[12px] px-4 py-5"
                        >
                          {data.svg}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Tab.Group>
        </div>
        <div id="Enterprise" className="mt-5 md:mt-16 w-full">
          <Tab.Group>
            <div className="w-full flex justify-between ">
              <div className={classNames("w-full", "")}>
                <div className="col-span-full text-center mb-4">
                  <h2 className="text-center text-[28px] md:text-5xl leading-[56px] font-normal text-white py-4 ">
                    Enterprise Members
                  </h2>
                </div>
                <div className="min-w-full overflow-auto">
                  <div className="grid grid-cols-4 gap-4 md:gap-6 min-w-[850px] md:min-w-[1220px]">
                    {github.map(data => (
                      <Link href="">
                        <div
                          key={data.id}
                          className="github relative  w-[200px] md:w-[296px] h-[86px] md:h-[112px] flex justify-center items-center  rounded-[20px] bg-tones-white backdrop-blur-[12px] px-4 py-5"
                        >
                          {data.svg}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Tab.Group>
        </div>

        <div id="Participant" className="mt-4 md:mt-16 w-full">
          <Tab.Group>
            <div className="w-full flex justify-between ">
              <div className={classNames("w-full", "")}>
                <div className="col-span-full text-center mb-4">
                  <h2 className="text-center text-[28px] md:text-5xl leading-[56px] font-normal text-white py-4 ">
                    Participant Members
                  </h2>
                </div>
                <div className="min-w-full overflow-auto">
                  <div className="grid grid-cols-4 gap-4 md:gap-6 min-w-[850px] md:min-w-[1220px]">
                    {github.map(data => (
                      <Link href="">
                        <div
                          key={data.id}
                          className="github relative  w-[200px] md:w-[296px] h-[86px] md:h-[112px] flex justify-center items-center  rounded-[20px] bg-tones-white backdrop-blur-[12px] px-4 py-5"
                        >
                          {data.svg}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Tab.Group>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-5 md:gap-14 mt-10">
          <p className="text-[20px] font-hanken leading-[28px] text-white my-0 text-center">
            Are you interested in becoming a member?
          </p>
          <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px]  transition-all duration-500 ease-in-out ">
            Become a Member
          </button>
        </div>
      </section>
    </>
  )
}

export default OurPartners
