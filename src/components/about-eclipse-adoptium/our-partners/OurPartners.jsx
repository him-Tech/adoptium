import React from "react"
import { useState } from "react"
import { Tab } from "@headlessui/react"
import { GithubIcon } from "../../common/Icon"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const OurPartners = () => {
  let [categories] = useState({
    "Strategic Members": {
      title: "Strategic Members",
      partners: [
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
      ],
    },

    "Enterprise Members": {
      title: "Enterprise Members",
      partners: [
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
      ],
    },
    "Participant Members": {
      title: "Participant Members",
      partners: [
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
      ],
    },
  })

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
        <div className="w-full flex flex-col items-center justify-center mt-[15px] md:mt-[64px]">
          <Tab.Group>
            <div className="overflow-auto px-3 py-2 w-full md:w-auto">
              <Tab.List className="flex space-x-10 whitespace-nowrap ">
                {Object.keys(categories).map((category, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        "w-full py-3 text-base font-normal leading-6 outline-none ",
                        selected
                          ? "text-white border-b border-[#ff1464]"
                          : "text-[#8a809e] border-b border-transparent"
                      )
                    }
                  >
                    {categories[category].title}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="w-full flex justify-between">
              {Object.keys(categories).map((category, idx) => (
                <Tab.Panel key={idx} className={classNames("w-full", "")}>
                  <div className="col-span-full text-center mb-4">
                    <h2 className="hidden md:block text-5xl leading-[56px] font-normal text-white">
                      {categories[category].title}
                    </h2>
                  </div>
                  <div className="min-w-full overflow-auto">
                    <div className="grid grid-cols-4 gap-4 md:gap-6 min-w-[850px] md:min-w-[1220px]">
                      {categories[category].partners.map(post => (
                        <div
                          key={post.id}
                          className="relative border w-[200px] md:w-[296px] flex justify-center items-center border-[#574974] rounded-[20px] bg-tones-white backdrop-blur-[12px] px-3 py-4"
                        >
                          {post.svg}
                        </div>
                      ))}
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="flex justify-center flex-wrap items-center gap-6 mt-10">
          <p className="text-[20px] font-hanken leading-[28px] text-white my-0 text-center">
            Are you interested in becoming a member?
          </p>
          <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[179px] h-[48px] ">
            Become a Member
          </button>
        </div>
      </section>
    </>
  )
}

export default OurPartners
