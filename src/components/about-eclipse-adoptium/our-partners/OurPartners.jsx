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
      <section className="max-w-[1264px] md:px-0 px-4 w-full mx-auto flex flex-col items-center justify-center border py-20">
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-[42px] font-hanken leading-[56px] text-center">
            Our Partners
          </h3>
          <p className="text-[16px] font-hanken leading-[24px] text-[#C4BFCE] text-center mt-[64px]">
            Eclipse Temurin offers high-performance, cross-platform, open-source
            Java runtime binaries that are enterprise-ready and Java SE
            TCK-tested for general use in the Java ecosystem.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-[64px]">
          <Tab.Group>
            <Tab.List className="flex space-x-10 whitespace-nowrap">
              {Object.keys(categories).map((category, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-3 text-base font-normal leading-6 outline-none",
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

            <Tab.Panels className="w-full flex justify-between">
              {Object.keys(categories).map((category, idx) => (
                <Tab.Panel key={idx} className={classNames("w-full", "")}>
                  {idx === 0 && (
                    <div className="col-span-full text-center mb-4">
                      <h2 className="text-5xl leading-[56px] font-normal text-white">
                        {categories[category].title}
                      </h2>
                    </div>
                  )}
                  <div className="min-w-full overflow-auto">
                    <div className="grid grid-cols-4 gap-6 min-w-[1220px]">
                      {categories[category].partners.map(post => (
                        <div
                          key={post.id}
                          className="relative border w-[296px] flex justify-center items-center border-white rounded-[24px] bg-tones-white backdrop-blur-[12px] px-3 py-4"
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
      </section>
    </>
  )
}

export default OurPartners
