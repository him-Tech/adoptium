import React from "react"
import { useState } from "react"
import { Tab } from "@headlessui/react"
import { GithubIcon } from "../../common/Icon"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const OurPartners = () => {
  let [categories] = useState({
    "Strategic Members": [
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
      {
        id: 17,
        tittle: "Strategic Members",
      },
    ],
    "Enterprise Members": [
      { id: 1, svg: <GithubIcon className="" /> },
      { id: 2, svg: <GithubIcon className="" /> },
      { id: 3, svg: <GithubIcon className="" /> },
      { id: 4, svg: <GithubIcon className="" /> },
    ],
    "Participant Members": [
      { id: 1, svg: <GithubIcon className="" /> },
      { id: 2, svg: <GithubIcon className="" /> },
      { id: 3, svg: <GithubIcon className="" /> },
      { id: 4, svg: <GithubIcon className="" /> },
    ],
  })

  return (
    <>
      <section className="max-w-[1264px] w-full mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <Tab.Group>
            <Tab.List className="flex space-x-10 whitespace-nowrap w-fit">
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
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="w-full ">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx} className={classNames("w-full ", "")}>
                  <div className="grid grid-cols-4 gap-4 w-full ">
                    {/* Title for "Strategic Members" */}
                    {idx === 0 && (
                      <div className="col-span-full text-center mb-4">
                        <h2 className="text-5xl leading-[56px] font-normal text-white">
                          Strategic Members
                        </h2>
                      </div>
                    )}
                    {posts.map(post => (
                      <div key={post.id} className="relative border w-fit">
                        {/* Add any additional information you want to display */}
                        {post.svg}
                      </div>
                    ))}
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
