import React from "react"

// @ts-ignore
import ScrollDivider from "../../images/scroll-divider.svg"

const UiMobileScroll = ({ data }) => {
  return data.map((item, index) => {
    const image = require(`../../images/${item.image}`)
    return (
      // render an image in the center and then the text below it centered
      <div className="lg:hidden max-w-[500px] mx-auto flex flex-col text-center items-center">
        <img
          src={image.default}
          alt="Description"
          className="w-full mb-0 max-w-[366px] object-cover"
        />
        <img src={ScrollDivider} className="mb-0" alt="scroll-divider" />
        <div className="flex flex-col flex-1 px-4">
          <h1 className="text-xl my-5 font-bold">{item.title}</h1>
          <p className="text-base text-[#C4BFCE]">{item.description}</p>
        </div>
      </div>
    )
  })
}

export default UiMobileScroll
