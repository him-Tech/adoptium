import React from "react"
import experience from "../../../img/experience.png"

const Experience = () => {
  return (
    <>
      <section className="py-16 max-w-[1048px] w-full mx-auto flex justify-center lg:justify-between xl:px-0 px-6">
        <div className="max-w-[400px] w-full hidden lg:block">
          <img src={experience} className="mb-0" alt="scroll-divider" />
        </div>
        <div className="lg:max-w-[560px] w-full  ">
          <h2 className="md:text-5xl text-[40px] font-normal leading-[48px] md:leading-[56px]">
            More than 10 years' experience, and a focus firmly on your future
          </h2>
          <p className="md:mt-6 my-10 text-[#C4BFCE] text-base leading-6 font-normal">
            Feugiat ullamcorper justo dolor arcu ut porttitor ultrices rutrum.
            Eget molestie sit tellus viverra. Bibendum at ut eu feugiat tellus
            diam turpis. Massa posuere ornare dignissim orci consequat.
          </p>{" "}
          <p className=" lg:hidden  mb-10 text-[#C4BFCE] text-base leading-6 font-normal">
            Vestibulum feugiat ullamcorper justo dolor arcu ut porttitor
            ultrices rutrum. Eget molestie sit tellus viverra. Bibendum at ut eu
            feugiat tellus diam turpis.
          </p>
          <button className="bg-transparent mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[150px] h-[48px] rounded-2xl gradient-border lg:block hidden">
            Who we are
          </button>{" "}
          <button className="bg-transparent mt-10 border-2 border-pink-500/0 text-white text-base leading-6 font-normal w-[151px] h-[48px] rounded-2xl gradient-border block lg:hidden">
            Get a Quote
          </button>
        </div>
      </section>
    </>
  )
}

export default Experience
