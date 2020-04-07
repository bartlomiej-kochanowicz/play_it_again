import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const buttonAnimation = keyframes`
	from{
		transform: scaleX(0);
		width: calc(100% - 1em);
	}
	to{
	  transform: scaleX(1);
	  width: calc(100% - 1em);
	}
`;

const StyledButton = styled.button`
  padding: 1em 0 1em 1em;
  border: 0;
  background-color: transparent;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 2rem;
  color: ${({ theme, active }) => (active ? theme.spotifyBlack : theme.grey300)};
  cursor: pointer;
  position: relative;
  outline: none;
  margin-right: 1em;

  :hover {
    color: ${({ theme }) => theme.spotifyBlack};
  }
  :after {
    content: '';
    height: 3px;
    position: absolute;
    bottom: 0.8em;
    left: 1em;
    background-color: ${({ theme }) => theme.spotifyBlack};
    ${({ active }) =>
      active &&
      css`
        animation: ${buttonAnimation} 0.6s both;
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    margin-right: 0;
  }
`;

const TimeButton = ({ children, active, animation }) => (
  <StyledButton onClick={animation} active={active}>
    {children}
  </StyledButton>
);

export default TimeButton;

TimeButton.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool,
  animation: PropTypes.func.isRequired,
};
TimeButton.defaultProps = {
  active: false,
};
