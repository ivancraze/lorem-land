import React from 'react';

import { IContentBlockArticles } from '@app/types';

import './index.less';

interface IContentBlockProps {
  article: IContentBlockArticles;
}

const ContentBlock: React.FC<IContentBlockProps> = ({
  article,
}): JSX.Element => {
  return (
    <section className="content-block">
      <div className="container">
        <div className="content-block__wrapper">
          <h2 className="content-block__title">{article.title}</h2>
          <div className="content-block__article">
            <div className="content-block__article-image content-block__article-image_left">
              <img
                src={article.articleFirst.image}
                alt={article.articleFirst.title}
              />
            </div>
            <div className="content-block__article-content">
              <h3 className="content-block__article-title">
                {article.articleFirst.title}
              </h3>
              <p className="content-block__article-text">
                {article.articleFirst.text}
              </p>
              <p className="content-block__article-text">
                {article.articleFirst.textSecond}
              </p>
            </div>
          </div>
          <div className="content-block__article content-block__article_right">
            <div className="content-block__article-content">
              <h3 className="content-block__article-title">
                {article.articleSecond.title}
              </h3>
              <p className="content-block__article-text">
                {article.articleSecond.text}
              </p>
              <p className="content-block__article-text">
                {article.articleSecond.textSecond}
              </p>
            </div>
            <div className="content-block__article-image">
              <img
                src={article.articleSecond.image}
                alt={article.articleSecond.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
