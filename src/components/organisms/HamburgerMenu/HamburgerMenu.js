import React, { useState, useEffect } from 'react';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import StyledNavigation from 'components/molecules/StyledNavigation/StyledNavigation';
import { scrollToTop } from 'utils';

function HamburgerMenu() {
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  const [isButtonBlack, setButtonBlack] = useState(false);

  const changeColor = () => {
    const scroll = window.scrollY;
    if (scroll > 175) {
      setButtonBlack(true);
    } else {
      setButtonBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  const handleClick = () => {
    if (isHamburgerActive) {
      scrollToTop();
    }

    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <div>
      <HamburgerButton
        isActive={isHamburgerActive}
        handleFn={handleClick}
        isBlack={isButtonBlack}
      />
      <StyledNavigation isActive={isHamburgerActive} handleFn={handleClick} />
    </div>
  );
}

export default HamburgerMenu;
