import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import background from 'assets/background.png';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Logo from 'components/atoms/Logo/Logo';

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
  padding: 120px 30px 70px 30px;
  overflow: hidden;
`;

const StyledHeader = styled(Heading)`
  color: #fff;
  justify-content: center;
`;

const StyledHyperlink = styled.a`
  text-decoration: none;
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 30px;
  left: 30px;
  opacity: 0.7;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  margin-top: 40px;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  @media (max-width: 500px) {
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
      <StyledLink to={routes.app_info}>What is this?</StyledLink>
    </StyledContainer>
  </StyledWrapper>
);

export default LoginPage;
