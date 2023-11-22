import React, { useEffect, useRef, useState } from 'react';

const DownloadCounter = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const counterRef = useRef(null);

  const endValue = 265996558; // End value of counter
  const startValue = endValue - 10; // Start value of counter
  const duration = 500; // Duration of the animation in milliseconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * (endValue - startValue) + startValue));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { root: null, threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  return (
    <div className="bg-purple py-14 sm:py-18" ref={counterRef}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8 flex flex-col items-center justify-center">
         <h2 className="text-center text-3xl font-semibold text-white-900">
          Lorem ipsum dolor sit amet consectetur. Risus pretium aliquet
        </h2>
        <h3 className="text-center text-6xl md:text-7xl font-semibold text-pink text-pink-800 py-10">
          {count.toLocaleString()}
        </h3>
        <p className='text-xs'>Total Downloads/Docker pulls ever</p>
      </div>
    </div>
  );
};

export default DownloadCounter;
