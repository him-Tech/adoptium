import React, { useState } from "react"

const Frequently = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const handleToggleFaq = index => {
    setOpenFaq(prevOpenFaq => (prevOpenFaq === index ? null : index))
  }

  return (
    <>
      <div className="mx-auto max-w-[1264px] px-4 flex flex-col gap-3 items-center lg:flex-row justify-between">
        <div className=" md:max-w-[420px] newscard w-full p-[24px] flex flex-col justify-between">
          <div>
            <h3 className="text-[40px] font-semibold leading-[48px] font-hanken">
              Frequently asked questions
            </h3>
            <p className="text-[20px] font-normal font-hanken leading-[28px] text-[#C4BFCE] mt-[24px]">
              Eclipse Temurin offers high-performance, cross-platform,
              open-source Java runtime.
            </p>
          </div>
          <div>
            <p className="text-[20px] font-semibold font-hanken">
              Have a question that hasn’t been answered? Get in touch
            </p>
            <button className="rounded-2xl bg-transparent gradient-border border-2 border-pink-500/0 text-white text-base leading-6 font-bold w-[154px] h-[48px] block ">
              Contact Us
            </button>
          </div>
        </div>
        <div className="md:max-w-[780px] w-full">
          <div>
            {[0, 1, 2, 3, 4, 5].map(index => (
              <div
                key={index}
                className={`flex flex-col py-3 border-[#3E3355] border-b ${
                  openFaq === index ? "" : ""
                }`}
              >
                <div
                  onClick={() => handleToggleFaq(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="text-[20px] font-semibold leading-[28px]">
                    Where are the latest Adoptium® JDKs?
                  </h3>
                  <span>
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
                        stroke-width="2"
                      />
                      <path
                        d="M24 17V31"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17 24H31"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                {openFaq === index && (
                  <div className="flex items-center">
                    <p className="my-0 pt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem, itaque culpa in recusandae ipsam ea quisquam
                      temporibus praesentium quas esse animi cupiditate dicta
                      qui maxime quam, doloremque iure. Repudiandae, animi.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Frequently
