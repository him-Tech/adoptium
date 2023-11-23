import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const LogoCarousel = () => {
  return (
    <div className="bg-purple py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-m font-light text-gray-500">
          Temurin powers some of the largest companies in the world
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <StaticImage
            src="../images/atlassian.svg"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="github"
          />
          <StaticImage
            src="../images/atlassian.svg"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="github"
          />
          <StaticImage
            src="../images/atlassian.svg"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="github"
          />
          <StaticImage
            src="../images/atlassian.svg"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="github"
          />
          <StaticImage
            src="../images/atlassian.svg"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="github"
          />
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel
