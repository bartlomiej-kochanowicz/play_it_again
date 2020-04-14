import React, { useState } from 'react';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import StyledNavigation from 'components/molecules/StyledNavigation/StyledNavigation';

const HamburgerMenu = () => {
  const [isButtonActive, setButtonActive] = useState(false);

  const handleClick = () => {
    setButtonActive(!isButtonActive);
  };

  return (
    <div>
      <HamburgerButton isActive={isButtonActive} handleFn={handleClick} />
      <StyledNavigation isActive={isButtonActive} handleFn={handleClick} />
    </div>
  );
};

export default HamburgerMenu;
