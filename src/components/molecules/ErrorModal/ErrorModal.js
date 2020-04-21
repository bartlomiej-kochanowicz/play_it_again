import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
import { logout } from 'utils';
import Button from '../../atoms/Button/Button';
import { routes } from '../../../routes';

const StyledWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;
`;

const ErrorModal = () => (
  <StyledWrapper>
    <StyledHeading>There was a problem with the server.</StyledHeading>
    <Button onClick={logout}>
      <StyledLink to={routes.login}>Please log in again</StyledLink>
    </Button>
  </StyledWrapper>
);

export default ErrorModal;
