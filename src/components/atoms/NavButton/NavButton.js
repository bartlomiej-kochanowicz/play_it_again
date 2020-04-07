import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  cursor: pointer;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.spotifyBlack};
  }
  &.active {
    background-color: red;
  }

  ${({ last }) =>
    last &&
    css`
      margin-bottom: 0;
      position: absolute;
      left: 0;
      bottom: 0;
    `}
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 3px;
  }
`;

const NavButton = ({ icon, children, last }) => (
  <StyledDiv last={last}>
    <ButtonIcon icon={icon} />
    <StyledSpan>{children}</StyledSpan>
  </StyledDiv>
);

export default NavButton;

NavButton.propTypes = {
  icon: PropTypes.shape({
    $$typeof: PropTypes.symbol.isRequired,
    displayName: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

NavButton.defaultProps = {
  last: false,
};
