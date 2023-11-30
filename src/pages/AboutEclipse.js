import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LatestReleases from "../components/about-eclipse-adoptium/latest-releases/LatestReleases"
import Experience from "../components/about-eclipse-adoptium/experience/Experience"
import UsingTemurin from "../components/about-eclipse-adoptium/using-temurin/UsingTemurin"
import divider from "../.././src/img/page-divider.png"
import Community from "../components/about-eclipse-adoptium/connect-with-the-community/Community"
import OurPartners from "../components/about-eclipse-adoptium/our-partners/OurPartners"
import PromoteSection from "../components/about-eclipse-adoptium/promote-section/PromoteSection"
import SupportUs from "../components/about-eclipse-adoptium/ways-to-support-us/SupportUs"
import Documentation from "../components/about-eclipse-adoptium/documentation/Documentation"
import ContributorsThanks from "../components/about-eclipse-adoptium/contributors-thanks/ContributorsThanks"

const AboutEclipse = () => {
  return (
    <>
      <div className="hero-bg ">
        <Navbar />
        <div className=" z-10 flex flex-col items-center justify-center max-w-[1048px] w-full mx-auto pt-14 text-center pb-16 lg:pb-[128px] px-6 xl:px-0">
          <div className="flex gap-2 items-center text-primary text-base font-normal leading-6 mt-16  ">
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="8" height="8" rx="2" fill="#FF1464" />
                <rect
                  x="1.5"
                  y="1.5"
                  width="11"
                  height="11"
                  rx="3.5"
                  stroke="#FF1464"
                  stroke-opacity="0.25"
                  stroke-width="3"
                />
              </svg>
            </span>
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
      </div>
      <LatestReleases />
      <Experience />
      <div className="py-[40px] md:py-[56px]  block lg:hidden">
        <img src={divider} className="w-full h-6" alt="scroll-divider" />
      </div>
      <UsingTemurin />
      <Community />
      <OurPartners />
      <SupportUs />
      <PromoteSection />
      <Documentation />
      <ContributorsThanks />
      <Footer />
    </>
  )
}

export default AboutEclipse
