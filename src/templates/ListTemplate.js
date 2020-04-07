import React from 'react';
import styled, {keyframes} from 'styled-components';
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
  min-height: 101vh;

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
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 320px;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  padding: 32px 0 70px 0;
  position: relative;
  background-color: #fff;
  height: 100%;

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

const appear = keyframes`
  from{
    transform: translateX(-300px);
  }
  to{
    transform: translateX(0);
  }
`;

const StyledHeading = styled(Heading)`
  color: #fff;
  position: absolute;
  left: 20px;
  bottom: 30px;
  animation: ${appear} .5s .5s both;
`;

const StyledList = styled.ul`
  padding: 20px 0;
  margin: 0;
  list-style: none;
`;

const ListTemplate = ({ image, header, children,update }) => (
  <UserPageTemplate>
    {!token && <Redirect to="/login" />}
    <StyledWrapper>
      <StyledHero image={image}>
        <StyledHeading big>{header}</StyledHeading>
      </StyledHero>
      <StyledInnerWrapper>
        {(header !== 'Recently Played') && <TimeNavbar update={update} />}
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
  update: PropTypes.func.isRequired,
};