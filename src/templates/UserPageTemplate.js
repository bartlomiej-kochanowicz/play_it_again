import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  margin-left: 120px;
  padding: 0 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    padding: 0;
  }
`;

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.bool])).isRequired,
};
