import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: linear-gradient(194deg, rgba(64, 230, 151, 1) 0%, rgba(57, 183, 183, 1) 100%);
  color: ${({ theme }) => theme.grey100};
  border: none;
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;
  width: 260px;
  height: 50px;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  font-family: 'Rubik', sans-serif;

  &:hover {
    transform: scale(1.03);
  }
`;

export default Button;
