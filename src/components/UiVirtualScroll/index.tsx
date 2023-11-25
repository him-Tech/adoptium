import React, { useEffect, useRef } from "react"
import "./UiVirtualScroll.css"

import UiMobileScroll from "./mobile"
import UiVirtualContent from "./UiVirtualContent"

const data = [
  {
    title: "OpenJDK-Based",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    image: "feature-layers.svg",
  },
  {
    title: "OpenJDK-Based",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    image: "feature-layers.svg",
  },
  {
    title: "OpenJDK-Based",
    description:
      "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    image: "feature-layers.svg",
  },
]

const UiVirtualScroll = () => {
  return (
    <>
      {/* <div className="mx-auto max-w-5xl items-center">
        <div
          className="hidden lg:flex scroll-container h-screen m-12"
          ref={scrollContainerRef}
        >
          <div className="flex flex-col h-23 ml-8 flex-1 p-4">
            {data.map((item, index) => {
              const image = require(`../../images/${item.image}`)
              return (
                <img
                  src={image.default}
                  alt="Description"
                  className={`w-full h-1/3 object-cover mb-4 scroll-item ${
                    index === 0 ? "active" : ""
                  }`}
                />
              )
            })}
          </div>

          <div className="md:w-12 flex-none p-4 relative">
            <div className="progress absolute top-4 bottom-4 left-0 right-0">
              <div className="progress-fill" ref={progressFillRef}></div>
            </div>
            <div className="progress-dot" ref={progressDotRef}></div>
          </div>
          <div className="flex flex-col ml-8 flex-1 p-4">
            {data.map((item, index) => (
              <div
                className={`flex flex-col justify-center flex-1 text-scroll-item scroll-item ${
                  index === 0 ? "active" : ""
                }`}
                key={index}
              >
                <h1 className="text-xl md-pt-6 my-5 font-bold">{item.title}</h1>
                <p className="text-base text-white-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <UiMobileScroll data={data} />
      </div> */}
      <UiMobileScroll data={data} />
      <div className="lg:block hidden open-animation-wrapper">
        <UiVirtualContent data={data} />
      </div>
    </>
  )
}

export default UiVirtualScroll
