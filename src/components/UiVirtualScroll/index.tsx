import React, { useEffect, useRef } from 'react';
import './UiVirtualScroll.css';

import UiMobileScroll from './mobile';

const data = [
  {
    "title": "OpenJDK-Based",
    "description": "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    "image": "feature-layers.svg"
  },
  {
    "title": "OpenJDK-Based",
    "description": "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    "image": "feature-layers.svg"
  },
  {
    "title": "OpenJDK-Based",
    "description": "Eclipse Temurin offers high-performance, cross-platform, open-source Java runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.",
    "image": "feature-layers.svg"
  },
];

const UiVirtualScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const progressDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const progressBar = progressFillRef.current;
      if (!scrollContainer || !progressBar) {
        return; // Exit if any are null
      }

      const textBlocks = scrollContainer.querySelectorAll('.text-scroll-item')

      let visibleBlockIndex = -1;
      textBlocks.forEach((block, index) => {
        const rect = block.getBoundingClientRect();
        const blockMiddle = rect.top + rect.height / 2;
        const windowMiddle = window.innerHeight / 2;

        if (blockMiddle >= windowMiddle - rect.height / 2 && blockMiddle <= windowMiddle + rect.height / 2) {
          visibleBlockIndex = index;
          block.classList.add('active');
          // append active class to image
          const images = scrollContainer.querySelectorAll('img');
          images.forEach((image, index) => {
            if (index === visibleBlockIndex) {
              image.classList.add('active');
            } else {
              image.classList.remove('active');
            }
          });
        } else {
          block.classList.remove('active');
        }
      });

      if (visibleBlockIndex !== -1) {
        const totalBlocks = data.length;
        let progress = (visibleBlockIndex + 1) / totalBlocks;
        if (progress < 1) {
          progress = progress - 0.15;
        }
        progressFillRef.current.style.transform = `scaleY(${progress})`;

        if (progressDotRef.current) {
          if (progress === 1) {
            progress= progress - 0.15;
          }

          const dotPosition = progress * (scrollContainerRef.current ? scrollContainerRef.current.offsetHeight : 0);
          progressDotRef.current.style.top = `${dotPosition}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='mx-auto max-w-5xl items-center'>
      {/* Desktop Version */}
      <div className="hidden lg:flex scroll-container h-screen m-12" ref={scrollContainerRef}>
        {/* Image Column */}
        <div className="flex flex-col flex-1 p-4">
          {data.map((item, index) => {
            const image = require(`../../images/${item.image}`);
            return (
              <img
                src={image.default}
                alt="Description"
                // add active to first image
                className={`w-full h-1/3 object-cover mb-4 scroll-item ${index === 0 ? 'active' : ''}`}
              />
            )
          })}
        </div>

        {/* Progress Bar Column */}
        <div className="md:w-12 flex-none p-4 relative">
          <div className="progress absolute top-4 bottom-4 left-0 right-0">
            <div className="progress-fill" ref={progressFillRef}></div>
          </div>
          <div className="progress-dot" ref={progressDotRef}></div>
        </div>

        {/* Header and Description Column */}
        <div className="flex flex-col ml-8 flex-1 p-4">
          {data.map((item, index) => (
            <div
              // append active class to first item
              className={`flex flex-col flex-1 p-10 text-scroll-item scroll-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <h1 className="text-xl pt-8 my-5 font-bold">
                {item.title}
              </h1>
              <p className="text-base text-white-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <UiMobileScroll data={data} />
    </div>
  );
};

export default UiVirtualScroll;
