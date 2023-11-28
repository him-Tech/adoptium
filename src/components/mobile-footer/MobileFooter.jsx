import React from "react"
import { Disclosure } from "@headlessui/react"
import {
  MobileFooterCat,
  MobileFooterFacebook,
  MobileFooterIcon,
  MobileFooterLinkedin,
  MobileFooterSlack,
  MobileFooterSocial,
  MobileFooterYoutube,
} from "../latest-news/AppIcons"

// Replace 'CustomSVG' with your actual SVG component
const CustomSVG = () => (
  <div>
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="23"
        stroke="#3E3355"
        strokeWidth="2"
      />
      <path
        d="M24 17V31"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 24H31"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

// Data for each disclosure section
const disclosureData = [
  {
    title: "Eclipse Foundation",
    links: [
      { text: "About Us", url: "https://example.com/about" },
      { text: "Board of Directors", url: "https://example.com/directors" },
      { text: "Governance", url: "https://example.com/governance" },
      { text: "Donate", url: "https://example.com/donate" },
      { text: "Contact Us", url: "https://example.com/contact" },
      { text: "Members", url: "https://example.com/members" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { text: "Contact", url: "https://example.com/contact" },
      { text: "FAQs", url: "https://example.com/faqs" },
      { text: "Live Chat", url: "https://example.com/live-chat" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Accessibility", url: "https://example.com/accessibility" },
      { text: "Returns Policy", url: "https://example.com/returns-policy" },
      { text: "Refund Policy", url: "https://example.com/refund-policy" },
      {
        text: "Hiring Statistics",
        url: "https://example.com/hiring-statistics",
      },
    ],
  },
  {
    title: "Other",
    links: [
      { text: "Research@Eclipse", url: "https://example.com/link-1" },
      { text: "IDE and Tools", url: "https://example.com/link-2" },
      { text: "Working Groups", url: "https://example.com/link-3" },
      { text: "Report a Vulnerability", url: "https://example.com/link-3" },
      { text: "Projects", url: "https://example.com/link-3" },
    ],
  },
]

// Custom Disclosure component
const CustomDisclosure = ({ title, links }) => (
  <Disclosure>
    {({ open }) => (
      <>
        {/* Disclosure button */}
        <Disclosure.Button className="flex justify-between w-full items-center">
          <span className="text-white text-xl font-semibold leading-7">
            {title}
          </span>
          <CustomSVG className={`${open ? "rotate-180 transform" : ""}`} />
        </Disclosure.Button>

        {/* Disclosure panel */}
        <Disclosure.Panel className="text-base font-normal leading-6 space-y-2 flex flex-col">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              {link.text}
            </a>
          ))}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

// Main App component
const MobileFooter = () => (
  <div className="flex flex-col space-y-4 !mt-0">
    {disclosureData.map((data, index) => (
      <CustomDisclosure key={index} {...data} />
    ))}
    <div className="border-t border-[#3E3355] !mt-8 ">
      <div className="flex  items-center space-x-4 pt-8">
        <div className="">
          <MobileFooterIcon />
        </div>
        <p className="text-[#C4BFCE] text-sm font-normal leading-5 !mb-0">
          Copyright © Eclipse Foundation. All Rights Reserved.
        </p>
      </div>
      <div className="flex items-center space-x-6 mt-6">
        <a href="">
          <MobileFooterFacebook />
        </a>
        <a href="">
          <MobileFooterSocial />
        </a>
        <a href="">
          <MobileFooterCat />
        </a>
        <a href="">
          <MobileFooterYoutube />
        </a>
        <a href="">
          <MobileFooterLinkedin />
        </a>
        <a href="">
          <MobileFooterSlack />
        </a>
      </div>
    </div>
  </div>
)

export default MobileFooter
