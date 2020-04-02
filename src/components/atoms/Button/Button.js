import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
  color: ${({ theme }) => theme.grey100};
  border: 2px solid ${({ theme }) => theme.first};
  cursor: pointer;
  transition: 0.6s;
  overflow: hidden;
  width: 260px;
  height: 50px;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  font-family: 'Rubik', sans-serif;

  &:hover {
    color: ${({ theme }) => theme.first};
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 180%;
    background: ${({ theme }) => theme.first};
    z-index: -1;
    transition: 0.6s;
    top: 0;
    left: 0;
    border-radius: 0 0 50% 50%;
  }
  &:hover:before {
    height: 0;
  }
`;

export default Button;
