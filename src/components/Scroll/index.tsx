import React from 'react';

import './index.less';

import HorizontalScroll from '@app/components/Scroll/components/HorizontalScroll';

interface IScrollProps {
  items: string[];
}

const Scroll: React.FC<IScrollProps> = ({ items }): JSX.Element => {
  return (
    <section className="scroll">
      <h2 className="scroll__title container">Lorem ipsum dolor sit amet</h2>
      <HorizontalScroll items={items} />
    </section>
  );
};

export default Scroll;
