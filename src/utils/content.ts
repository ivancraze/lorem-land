import { IContentBlockArticles } from '@app/types';

import articleImage1 from '../assets/articles/1-1.png';
import articleImage2 from '../assets/articles/1-2.png';
import articleImage3 from '../assets/articles/2-1.png';
import articleImage4 from '../assets/articles/2-2.png';

import scrollImage1 from '../assets/scroll-items/1.png';
import scrollImage2 from '../assets/scroll-items/2.png';
import scrollImage3 from '../assets/scroll-items/3.png';
import scrollImage4 from '../assets/scroll-items/4.png';
import scrollImage5 from '../assets/scroll-items/5.png';
import scrollImage6 from '../assets/scroll-items/6.png';
import scrollImage7 from '../assets/scroll-items/7.png';
import scrollImage8 from '../assets/scroll-items/8.png';
import scrollImage9 from '../assets/scroll-items/9.png';
import scrollImage10 from '../assets/scroll-items/10.png';
import scrollImage11 from '../assets/scroll-items/11.png';
import scrollImage12 from '../assets/scroll-items/12.png';

export const horizontalScrollImages: string[] = [
  scrollImage1,
  scrollImage2,
  scrollImage3,
  scrollImage4,
  scrollImage5,
  scrollImage6,
  scrollImage7,
  scrollImage8,
  scrollImage9,
  scrollImage10,
  scrollImage11,
  scrollImage12,
];

export const firstArticle: IContentBlockArticles = {
  title: 'ut aliquip ex ea commodo consequat',
  articleFirst: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    textSecond:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    image: articleImage1,
  },
  articleSecond: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    textSecond:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    image: articleImage2,
  },
};

export const secondArticle: IContentBlockArticles = {
  title: 'ut aliquip ex ea commodo consequat',
  articleFirst: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    textSecond:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    image: articleImage3,
  },
  articleSecond: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    textSecond:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    image: articleImage4,
  },
};
