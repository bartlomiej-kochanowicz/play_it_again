import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { theme as mainTheme } from 'theme/mainTheme';
import HamburgerMenu from '../components/organisms/HamburgerMenu/HamburgerMenu';

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

function UserPageTemplate({ children }) {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${mainTheme.breakpoints.tablet})`,
  });

  return (
    <>
      {!isTabletOrMobile && <Sidebar />}
      {isTabletOrMobile && <HamburgerMenu />}
      <StyledWrapper>{children}</StyledWrapper>
    </>
  );
}

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.bool])
  ).isRequired,
};
