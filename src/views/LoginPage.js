import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import background from 'assets/background.jpg';
import { Button, Heading, Logo } from 'components/atoms';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url(${background}) center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  padding: 150px 30px 70px 30px;
  text-shadow: 0 0 16px hsl(0, 0%, 30%);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 110px 30px 70px 30px;
  }
`;

const StyledHeader = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  color: ${({ theme }) => theme.grey100};
  justify-content: center;
`;

const StyledHyperlink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.grey100};
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 30px;
  left: 30px;
  opacity: 0.7;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.grey100};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  margin-top: 40px;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.grey300};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 310px;
    height: 70px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const LoginPage = () => (
  <StyledWrapper>
    <StyledLogo />
    <StyledHeader big>Replay your Spotify Hits</StyledHeader>
    <StyledContainer>
      <StyledHyperlink href="https://playitagain-auth.herokuapp.com/login">
        <StyledButton>Sign in with Spotify</StyledButton>
      </StyledHyperlink>
      <StyledLink to={routes.app_info}>
        What is this? + Overview link
      </StyledLink>
    </StyledContainer>
  </StyledWrapper>
);

export default LoginPage;
