import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const buttonAnimation = keyframes`
	from{
		transform: scaleX(0);
		width: calc(100% - 2em);
	}
	to{
	  transform: scaleX(1);
	  width: calc(100% - 2em);
	}
`;

const StyledButton = styled.button`
  padding: 1em;
  border: 0;
  background-color: transparent;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.9rem;
  color: ${({ theme, active }) => (active ? theme.spotifyBlack : theme.grey300)};
  cursor: pointer;
  position: relative;

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
        animation: ${buttonAnimation} .6s both;
      `}
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
