import React from "react"

const SupportUs = () => {
  return (
    <>
      <div className="px-6 md:px-3 xl:0  pb-[64px] md:py-[64px] font-hanken">
        <div className="max-w-[840px] w-full mx-auto">
          <h3
            className="text-[36px] leading-[44px]
           sm:text-[48px] font-normal sm:leading-[56px]  text-center"
          >
            Ways to support us
          </h3>
          <p className="text-base font-hanken font-normal text-[#C4BFCE] text-center mt-[24px]">
            If you value Eclipse technologies, please consider becoming a
            sponsor through the Eclipse Foundation. Contributions from users
            like you help fund the operations of the Adoptium working group. All
            money contributed to the Eclipse Foundation will be used to support
            the Eclipse community through the Adoptium working group.
          </p>
          <div className="flex gap-8 lg:gap-0 flex-wrap justify-center lg:justify-between items-center   mt-[64px]">
            <div className="max-w-[410px] w-full  p-[32px] lg:p-[40px] newscard">
              {/* #################################################### for mobile #################################################### */}
              <h3 className="text-[30px] leading-[38px]  font-normal  md:hidden">
                How to contribute
              </h3>
              {/* ####################################### for desktop #####################################33 */}
              <h3 className="text-[40px] leading-[48px]font-normal hidden md:block ">
                How to <br /> contribute
              </h3>
              <p className="mt-[24px] mb-0 text-[#C4BFCE] text-xl font-normal">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime.
              </p>
              <button className="bg-transparent mt-[145px] border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[146px] h-[48px] rounded-[80px] gradient-border ">
                Learn More
              </button>
            </div>

            <div className="max-w-[400px] w-full p-[32px] lg:p-[40px] newscard">
              {/* #################################################### for mobile #################################################### */}
              <h3 className="text-[30px] leading-[38px]  font-normal  md:hidden">
                Become a sponsor
              </h3>
              {/* ####################################### for desktop #####################################33 */}
              <h3 className="text-[40px] leading-[48px]font-normal hidden md:block ">
                Become a <br /> sponsor
              </h3>
              <p className="mt-[24px] mb-0 text-[#C4BFCE] text-[20px] font-normal">
                Eclipse Temurin offers high-performance, cross-platform,
                open-source Java runtime.
              </p>
              <button className="bg-transparent mt-[145px] border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[197px] h-[48px] rounded-[80px] gradient-border ">
                Become a sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportUs
