import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Sidebar, HamburgerMenu } from 'components/organisms';
import { theme as mainTheme } from 'theme/mainTheme';
import { useBreakpoint } from 'hooks/useBreakpoint';

const StyledWrapper = styled.div`
  margin-left: 120px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey100};

  @media (max-width: 1200px) {
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    padding: 0;
  }
`;

const UserPageTemplate = ({ children }) => {
  const isTabletOrMobile = useBreakpoint(mainTheme.breakpoints.tablet, 'max');

  return (
    <>
      {!isTabletOrMobile && <Sidebar />}
      {isTabletOrMobile && <HamburgerMenu />}
      <StyledWrapper>{children}</StyledWrapper>
    </>
  );
};

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
  ).isRequired,
};
