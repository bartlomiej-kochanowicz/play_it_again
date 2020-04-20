import React, { useState } from 'react';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import StyledNavigation from 'components/molecules/StyledNavigation/StyledNavigation';
import { scrollToTop } from 'utils';

const HamburgerMenu = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleClick = () => {
    if (isHamburgerActive) {
      scrollToTop();
    }

    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <div>
      <HamburgerButton isActive={isHamburgerActive} handleFn={handleClick} />
      <StyledNavigation isActive={isHamburgerActive} handleFn={handleClick} />
    </div>
  );
};

export default HamburgerMenu;
