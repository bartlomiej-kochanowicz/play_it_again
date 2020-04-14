import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  z-index: 999;
  top: 20px;
  right: 20px;
  display: block;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const StyledSpan = styled.span`
  width: 75%;
  height: 2px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  transition: 0.3s;
  z-index: 999;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    position: absolute;
    top: -9px;
    right: 0;
    background-color: #fff;
    transform-origin: 100% 50%;
    transition: 0.3s;
    z-index: 1000;
  }
  &:after {
    top: 9px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent;
      &:before {
        transform: rotate(-45deg) scaleX(1.25);
        background-color: ${({ theme }) => theme.spotifyBlack};
      }
      &:after {
        transform: rotate(45deg) scaleX(1.25);
        background-color: ${({ theme }) => theme.spotifyBlack};
      }
    `}
`;

const HamburgerButton = ({ isActive, handleFn }) => (
  <StyledButton isActive={isActive} onClick={handleFn}>
    <StyledSpan isActive={isActive} />
  </StyledButton>
);

HamburgerButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleFn: PropTypes.func.isRequired,
};

export default HamburgerButton;
