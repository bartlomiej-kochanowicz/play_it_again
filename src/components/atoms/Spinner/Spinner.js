import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Compass } from '@styled-icons/fa-regular/Compass';

const spin = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const StyledCompass = styled(Compass)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.grey300};
  animation: ${spin} 1.5s infinite;
`;

function Spinner() {
  return <StyledCompass />;
}

export default Spinner;
