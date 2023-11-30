import React from "react"

const PromoteSection = () => {
  return (
    <>
      <div className=" px-6 md:px-4 xl:px-0 bg-[#0E002A]">
        <div className="max-w-[1048px] w-full mx-auto py-[64px]">
          <div className="flex md:flex-row flex-col justify-between gap-0 md:gap-8 lg:gap-[64px] items-center">
            <div className="max-w-[584px] w-full text-center mx-auto lg:mx-0 md:text-left">
              <h2 className=" text-[36px] md:text-[48px] font-normal text-white  leading-[56px] font-hanken">
                Help promote Temurin
              </h2>
              <p className=" mt-[24px] text-base font-normal text-[#C4BFCE] mb-0  space-y-3  ">
                <span className="block">
                  Svennekoloni paheten fronta didoling. Grönt körfält mitt, och
                  astrongar fastän animoji. Doxa exosm morotsmobb diska. Såsuss
                  bröllopsklänning i preppare. Fulparkerare nirad mms biorat.{" "}
                </span>
                <span className="block">
                  Eurosinde processturism vasiminade. Äga frågan
                  bekymringssamtal, alltså prens. Drevkultur tredönde bilmålvakt
                  i ypren. Exoska semiras digt, eller makror. Cosplay faras
                  attefallshus ber.
                </span>
              </p>
            </div>
            <div className="max-w-[360px] w-full mx-auto lg:mx-0 mt-[64px] lg:mt-0 p-[32px] md:p-[40px] supportus-card   rounded-[24px]    ">
              <h3 className="text-[30px] md:text-[40px] font-hanken font-normal leading-[48px] text-white ">
                Media & Promotion
              </h3>
              <p className="mt-[24px] text-xl text-[#C4BFCE]">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime.
              </p>
              <button className="bg-transparent mt-[140px] border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[146px] h-[48px] rounded-[80px] gradient-border ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PromoteSection
