import styled from 'styled-components';
import logo from 'assets/logo.png';

const Logo = styled.span`
  display: block;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
`;

export default Logo;
