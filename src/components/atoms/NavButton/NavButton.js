import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/atoms';

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
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: 10px;
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
