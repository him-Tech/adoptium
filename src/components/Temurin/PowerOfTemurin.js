import React from 'react';
import UiVirtualScroll from '../UiVirtualScroll';

const PowerOfTemurin = () => {
  return (
    <div className="bg-purple py-14 sm:py-18">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold text-white-900">
          The Power of Eclipse Temurin™
        </h2>
        <h3 className="text-center text-m font-light text-gray-500 py-4">
          Eclipse Temurin offers high-performance, cross-platform, open-source Java™ runtime binaries that are enterprise-ready and Java SE TCK-tested for general use in the Java ecosystem.
        </h3>
        <a
          href="#"
          className="bg-transparent border-2 border-pink-500/0 text-white font-bold py-2 px-4 rounded-2xl gradient-border"
        >
          Business Benefits
        </a>
      </div>
      <UiVirtualScroll />
    </div>
  );
};

export default PowerOfTemurin;
