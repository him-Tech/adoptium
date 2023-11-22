import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image";

const FeatureColumn = ({ textContent }) => {
  const [imageOpacity, setImageOpacity] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Image Opacity Calculation
    if (imageRef.current) {
      const imagePosition = imageRef.current.getBoundingClientRect();
      setImageOpacity(imagePosition.top < windowHeight && imagePosition.bottom >= 0 ? 1 : 0.7);
    }

    // Line Height Calculation
    if (lineRef.current) {
      const linePosition = lineRef.current.getBoundingClientRect();
      if (linePosition.top < windowHeight && linePosition.bottom >= 0) {
        setLineHeight(((windowHeight - linePosition.top) / windowHeight) * 100);
      }
    }

    // Text Opacity Calculation
    if (textRef.current) {
      const textPosition = textRef.current.getBoundingClientRect();
      setTextOpacity(textPosition.top < windowHeight && textPosition.bottom >= 0 ? 1 : 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex px-32 py-12">
      <div className="flex-1" ref={imageRef}>
        {/* <StaticImage
          src='../images/feature-icon.svg'
          height={200}
          alt="Feature"
          className="transition-opacity duration-500"
          style={{ opacity: imageOpacity }}
        /> */}
      </div>
      <div className="flex-1" ref={lineRef}>
        <div className="relative w-2 mx-auto">
          <div className="absolute left-0 top-0 h-full bg-gradient-to-b from-transparent to-gray-300"></div>
          <div className="absolute left-0 top-0 bg-gradient-to-t from-transparent to-pink-500" style={{ height: `${lineHeight}%` }}></div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full" style={{ width: '1rem', height: '1rem', top: `${lineHeight}%` }}></div>
        </div>
      </div>
      <div className="flex-1" ref={textRef}>
        <div
          className="transition-opacity duration-500"
          style={{ opacity: textOpacity }}
        >
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default FeatureColumn;