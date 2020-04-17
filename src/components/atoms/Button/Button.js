import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: ${({ theme }) => theme.first};
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
