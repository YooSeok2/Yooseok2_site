import React from 'react';
import { GithubLogo } from '../images';

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/YooSeok2/Yooseok2Site" target="_blank" rel="noreferrer">
        <div className="github-logo">
          <img src={GithubLogo} alt="깃헙로고" />
        </div>
      </a>
      <span>ⓒ 2022. Kim Yoo Seok. all rights reserved.</span>
    </div>
  );
}

export default Footer;
