import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import TimeNavbar from 'components/molecules/TimeNavbar/TimeNavbar';
import Heading from 'components/atoms/Heading/Heading';
import { token } from 'api';

const StyledWrapper = styled.div`
  width: 1050px;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 320px;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  padding: 32px 0;
  min-height: 400px;
  position: relative;
  background-color: #fff;

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 10;
    top: -49px;
    left: -10px;
    width: 0;
    height: 0;
    border-bottom: 50px solid #fff;
    border-left: 1100px solid transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }
`;

const StyledHeading = styled(Heading)`
  color: #fff;
  position: absolute;
  left: 20px;
  bottom: 30px;
`;

const StyledList = styled.ul`
  padding: 20px 0;
  margin: 0;
  list-style: none;
`;

const ListTemplate = ({ image, header, children }) => (
  <UserPageTemplate>
    {!token && <Redirect to="/login" />}
    <StyledWrapper>
      <StyledHero image={image}>
        <StyledHeading big>{header}</StyledHeading>
      </StyledHero>
      <StyledInnerWrapper>
        {(header !== 'Recently Played') && <TimeNavbar />}
        <StyledList>{children}</StyledList>
      </StyledInnerWrapper>
    </StyledWrapper>
  </UserPageTemplate>
);

export default ListTemplate;

ListTemplate.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
