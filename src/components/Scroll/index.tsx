import React from 'react';

import './index.less';

import HorizontalScroll from '@app/components/Scroll/components/HorizontalScroll';

interface IScrollProps {
  items: string[];
}

const Scroll: React.FC<IScrollProps> = ({ items }): JSX.Element => {
  const itemsRenderer = () =>
    items.map((item, index) => (
      <div className="scroll__item" key={`scroll__image-${index}`}>
        <img className="scroll__image" src={item} alt="" />
      </div>
    ));

  return (
    <section className="scroll">
      <h2 className="scroll__title container">Lorem ipsum dolor sit amet</h2>
      <HorizontalScroll>
        <div className="scroll__container">{itemsRenderer()}</div>
      </HorizontalScroll>
    </section>
  );
};

export default Scroll;
