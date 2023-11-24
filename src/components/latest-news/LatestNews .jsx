import React from "react"

const LatestNews = () => {
  return (
    <>
      <div className="bg-purple py-14 sm:py-18">
        <div className="mx-auto max-w-[1088px] flex items-center justify-center">
          <div className="max-w-[436px] w-full ">
            <h2 className="text-5xl leading-[56px] font-semibold text-white-900">
              The Power of Eclipse Temurin™
            </h2>
            <h3 className="text-m font-light text-gray-500 py-4">
              Eclipse Temurin offers high-performance, cross-platform,
              open-source Java™ runtime binaries that are enterprise-ready and
              Java SE TCK-tested for general use in the Java ecosystem.
            </h3>
          </div>
          <div className="max-w-[374px] w-full border ml-16 mr-8"></div>
          <div className="max-w-[374px] w-full border"></div>
        </div>
      </div>
    </>
  )
}

export default LatestNews
