import React, { useState } from 'react';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import StyledNavigation from 'components/molecules/StyledNavigation/StyledNavigation';

const HamburgerMenu = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleClick = () => {
    if (isHamburgerActive) {
      window.scroll(0, 0);
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
