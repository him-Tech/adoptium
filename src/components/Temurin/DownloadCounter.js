import React from 'react';

const DownloadCounter = () => {
  return (
    <div className="bg-purple py-14 sm:py-18">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold text-white-900">
        Lorem ipsum dolor sit amet consectetur. Risus pretium aliquet
        </h2>
        <h3 className="text-center text-6xl md:text-7xl font-seminbold text-pink text-pink-800 py-10">
            234,406,827
        </h3>
        <p className='text-xs'>Total Downloads/Docker pulls ever</p>
      </div>
    </div>
  );
};

export default DownloadCounter;
