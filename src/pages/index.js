import React from "react"

import Layout from "../components/layout"
import LogoCarousel from "../components/LogoCarousel"
import PowerOfTemurin from "../components/Temurin/PowerOfTemurin"
import Seo from "../components/seo"
import backgroundImage from "../images/temurin-cross.svg"
import DownloadCounter from "../components/Temurin/DownloadCounter"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import LatestNews from "../components/latest-news/LatestNews "

const Index = () => {
  return (
    <Layout>
      <div
        className="bg-purple bg-contain bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${backgroundImage})`,
        }}
      >
        <div className="relative isolate px-6 pt-14 pb-10 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl pb-20 pt-32 sm:pt-48 lg:pt-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-7xl">
                The Power of Eclipse Temurin™
              </h1>
              <p className="mt-6 text-lg leading-8 text-white-600">
                Download Temurin for macOS aarch64
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-2xl bg-pink bg-pink-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                   Download Temurin
                </a>
                <a
                  href="#"
                  className="text-sm underline font-semibold leading-6 text-white-900"
                >
                  Other Platforms
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
