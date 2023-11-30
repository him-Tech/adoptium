import React from "react"
import contributor from "../../../img/contributor.png"

const ContributorsThanks = () => {
  return (
    <div className="bg-[#0E002A] border-[#3E3355] border-b py-10 px-6">
      <div className="flex flex-col lg:flex-row max-w-[1048px] mx-auto  justify-center lg:justify-between gap-5  items-center ">
        <h3 className=" text-[30px] md:text-[40px] font-hanken leading-[38px] md:leading-[48px] text-white my-0 text-center">
          Thank you to our <span className="text-[#FF1464]">300+</span>
          contributors
        </h3>
        <div className="bg-tones-white rounded-[24px] gap-4 backdrop-blur-[12px] border-[#574974] border p-[14px] flex justify-between items-center">
          <div>
            <img
              className="w-[72px] h-[72px] my-0"
              src={contributor}
              alt=""
              srcset=""
            />
          </div>
          <p className="flex flex-col text-[16px] font-hanken text-white leading-[24px] my-0">
            <span>Thank you sxa for making </span>
            <span>2 contribution(s) to STF</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContributorsThanks
