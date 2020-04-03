import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledDiv = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  cursor: pointer;

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

const NavButton = ({ icon, children }) => (
  <StyledDiv>
    <ButtonIcon icon={icon} />
    <StyledSpan>{children}</StyledSpan>
  </StyledDiv>
);

export default NavButton;

NavButton.propTypes = {
  icon: PropTypes.element.isRequired,
  children: PropTypes.string.isRequired,
};
