import React from 'react';

import Header from '@app/components/Header';
import ContentBlock from '@app/components/ContentBlock';
import Scroll from '@app/components/Scroll';
import Footer from '@app/components/Footer';

import './index.less';

import {
  firstArticle,
  secondArticle,
  horizontalScrollImages as items,
} from '@app/utils/content';

const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ContentBlock article={firstArticle} />
      <Scroll items={items} />
      <ContentBlock article={secondArticle} />
      <Footer />
    </>
  );
};

export default MainPage;
