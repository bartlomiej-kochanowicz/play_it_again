import styled from 'styled-components';
import logo from 'assets/logo.png';

const Logo = styled.span`
  display: block;
  background-image: url(${logo});
  background-size: cover;
  width: 70px;
  height: 70px;
`;

export default Logo;
