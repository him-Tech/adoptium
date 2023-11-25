import React from "react"

import Layout from "../components/layout"
import LogoCarousel from "../components/LogoCarousel"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import Seo from "../components/seo"
import backgroundImage from "../images/hero-img-hero.png"
import DownloadCounter from "../components/Temurin/DownloadCounter"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import LatestNews from "../components/latest-news/LatestNews"
import LatestNewsSlider from "../components/latest-news/LatestNewsSlider"
import { AppleIcon, HeroBgImg } from "../components/common/Icon"

const Index = () => {
  return (
    <Layout>
      <div className="bg-purple  sm:bg-contain bg-img-hero bg-center bg-no-repeat relative">
        <div className="relative isolate">
          <div className="absolute sm:hidden top-[80px] z-[-1] left-[50%] translate-x-[-50%]">
            <HeroBgImg />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-[832px] w-full h-[680px] sm:h-[720px] px-8 lg:px-0 flex items-center">
            <div className="text-center w-full">
              <h1 className="font-bold tracking-tight leading-[70px] lg:leading-[120px] text-white-900 text-[64px] lg:text-[104px]">
                The Power of Eclipse Temurin™
              </h1>
              <p className="mt-6 text-[22px] leading-8 text-white-600">
                Download Temurin™ for macOS aarch64
              </p>
              <div className="mt-10 flex items-center sm:flex-row flex-col-reverse justify-center gap-6">
                <a
                  href="#"
                  className="text-sm underline transition duration-300 ease-in-out font-semibold leading-6 text-white-900"
                >
                  Learn More
                </a>
                <a
                  href="#"
                  className="rounded-[80px] bg-[#FF1464] hover:bg-transparent border transition duration-300 ease-in-out hover:text-[#FF1464] border-[#FF1464] flex items-center justify-center gap-3 w-[244px] h-[56px] text-white font-bold leading-6 text-[16px]  "
                >
                  <span>
                    <AppleIcon />
                  </span>{" "}
                  Download Temurin™
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <PowerOfTemurin />
      <DownloadCounter />
      <Projects />
      <Testimonials />
      <LatestNews />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default Index
