import React, { useEffect, useState } from 'react';
import { MoveMethods } from '../pages/index';
import { HeaderCont } from './StyleComponents';
import { Logo } from '../images';

function Header({ onMoveHome, onMoveSkils, onMoveCareer }: MoveMethods) {
  const [isBorder, setIsBorder] = useState(false);

  useEffect(() => {
    function onScroll() {
      const { scrollY } = window;
      if (scrollY > 0) {
        setIsBorder(true);
      } else {
        setIsBorder(false);
      }
    }
    const options:any = { passive: true };

    window.addEventListener('scroll', onScroll, options);
    return () => {
      window.removeEventListener('scroll', onScroll, options);
    };
  }, []);
  return (
    <HeaderCont isBorder={isBorder} className="header">
      <div className="header-wrap">
        <div tabIndex={0} role="button" className="logo" onClick={onMoveHome}>
          <div className="logo-img">
            <img src={Logo} alt="로고" />
          </div>
        </div>
        <ul className="header-menu">
          <li onClick={onMoveHome}>소개</li>
          <li onClick={onMoveSkils}>기술</li>
          <li onClick={onMoveCareer}>경력</li>
        </ul>
      </div>
    </HeaderCont>
  );
}

export default Header;
