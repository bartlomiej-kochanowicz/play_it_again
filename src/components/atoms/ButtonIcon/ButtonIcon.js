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

ButtonIcon.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default ButtonIcon;
