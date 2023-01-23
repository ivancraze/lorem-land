import React from 'react';

import './index.less';

import logo from '../../assets/logo.svg';
import phone from '../../assets/phone.svg';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper ">
          <div className="header__logo">
            <a href="/">
              <img src={logo} alt="Circeya" />
            </a>
          </div>
          <div className="header__phone">
            <a href="tel:+7495495454">
              <img
                className="header__phone-icon"
                src={phone}
                alt="+7 (495) 495-49-54"
              />
              <span className="header__phone-number">+7 (495) 495-49-54</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
