import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import { token } from 'api';

const StyledWrapper = styled.div`
  width: 1050px;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  
  @media(max-width: 1200px){
  width: 100%;
  }
`;

const StyledHero = styled.div`
  width: 100%;
  height: 420px;
  background-image: url(${({image})=> image});
  background-size: cover;
  background-position: center;
`;

const StyledList = styled.div`
  width: 100%;
  padding: 32px;
  height: 300px;
  position: relative;
  background-color: #fff;
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 10;
    top: -50px;
    left: -10px;
    width: 0;
    height: 0;
    border-bottom: 50px solid #fff;
    border-left: 1100px solid transparent;
  }
`;

const ListTemplate = ({ image }) => (
  <UserPageTemplate>
    {!token && <Redirect to="/login" />}
    <StyledWrapper>
      <StyledHero image={image} />
      <StyledList />
    </StyledWrapper>
  </UserPageTemplate>
);

export default ListTemplate;
