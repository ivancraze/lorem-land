interface IArticle {
  title: string;
  text: string;
  textSecond: string;
  image: string;
}

export interface IContentBlockArticles {
  title: string;
  articleFirst: IArticle;
  articleSecond: IArticle;
}
