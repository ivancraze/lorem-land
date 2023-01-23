import React, { useState, useEffect, useRef, ReactNode } from 'react';

import './index.less';

interface IHorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<IHorizontalScrollProps> = ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  const calcDynamicHeight = (objectWidth: number) => {
    return objectWidth - window.innerWidth + window.innerHeight;
  };

  const handleDynamicHeight = (
    ref: React.RefObject<HTMLDivElement>,
    setDynamicHeight: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    const objectWidth = ref.current?.scrollWidth;
    if (!objectWidth) return;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  };

  const handleScrollListener = () => {
    const offsetTop = containerRef.current && -containerRef.current.offsetTop;
    offsetTop && setTranslateX(offsetTop);
  };

  const handleResize = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScrollListener);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollListener);
    };
  }, []);

  return (
    <div className="horizontal-scroll" style={{ height: `${dynamicHeight}px` }}>
      <div className="horizontal-scroll__sticky-container" ref={containerRef}>
        <div
          className="horizontal-scroll__translate-container"
          style={{ transform: `translateX(${translateX}px)` }}
          ref={objectRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
