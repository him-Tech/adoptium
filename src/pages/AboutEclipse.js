import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LatestReleases from "../components/about-eclipse-adoptium/latest-releases/LatestReleases"
import Experience from "../components/about-eclipse-adoptium/experience/Experience"
import UsingTemurin from "../components/about-eclipse-adoptium/using-temurin/UsingTemurin"
import divider from "../.././src/img/page-divider.png"
import Community from "../components/about-eclipse-adoptium/connect-with-the-community/Community"
import OurPartners from "../components/about-eclipse-adoptium/our-partners/OurPartners"

const AboutEclipse = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center max-w-[1048px] w-full mx-auto !mt-16 text-center pb-16 lg:pb-[128px] px-6 xl:px-0">
        <div className="flex items-center text-primary text-base font-normal leading-6 mt-16 border ">
          Who we are
        </div>
        <h2 className="text-white text-[56px] leading-[64px] md:text-[80px] md:leading-[96px] font-normal mt-4">
          About Eclipse Adoptium®
        </h2>
        <p className="text-[#C4BFCE] text-xl leading-7 mt-6 font-normal">
          Eclipse Temurin offers high-performance, cross-platform, open-source
          Java runtime binaries <br /> that are enterprise-ready and Java SE
          TCK-tested for general use in the Java ecosystem.
        </p>
      </div>
      <LatestReleases />
      <Experience />
      <div className="py-[56px]  block lg:hidden">
        <img src={divider} className="w-full h-6" alt="scroll-divider" />
      </div>
      <UsingTemurin />
      <Community />
      <OurPartners />
      <Footer />
    </>
  )
}

export default AboutEclipse
