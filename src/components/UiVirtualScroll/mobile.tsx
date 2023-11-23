import React from "react";

import { StaticImage } from "gatsby-plugin-image"

import ScrollDivider from '../../images/scroll-divider.svg';

const UiMobileScroll = ({data}) => {
    return (
        <>
        {data.map((item, index) => {
            const image = require(`../../images/${item.image}`);
            return (
                // render an image in the center and then the text below it centered
                <div className="lg:hidden flex flex-col text-center items-center">
                    <img
                        src={image.default}
                        alt="Description"
                        className="w-full h-1/3 object-cover"
                    />
                    <img alt='scroll divider' src={ScrollDivider} />
                    <div className="flex flex-col flex-1 p-4">
                    <h1 className="text-xl my-5 font-bold">
                        {item.title}
                    </h1>
                    <p className="text-base text-white-600">
                        {item.description}
                    </p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default UiMobileScroll;