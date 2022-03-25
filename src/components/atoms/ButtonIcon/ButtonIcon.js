import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: block;
  width: 27px;
  height: 27px;
`;

const ButtonIcon = ({ icon: Icon }) => (
  <StyledSpan>
    <Icon />
  </StyledSpan>
);

export default ButtonIcon;

ButtonIcon.propTypes = {
  icon: PropTypes.shape({
    $$typeof: PropTypes.symbol.isRequired,
    displayName: PropTypes.string.isRequired,
  }).isRequired,
};
