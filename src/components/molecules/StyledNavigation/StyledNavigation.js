import React from 'react';
import styled, { css } from 'styled-components';
import { routes } from 'routes';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 998;
`;

const StyledCircle = styled.div`
  position: absolute;
  z-index: 998;
  top: 12px;
  right: 12px;
  display: block;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border-radius: 100%;
  transform: scale(0);
  transition: 0.6s;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: scale(80);
    `}
`;

const StyledUl = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const StyledLi = styled.li`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.grey300};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  padding: 15px;

  &.active {
    color: ${({ theme }) => theme.spotifyBlack};
    text-decoration: underline;
  }
`;

const StyledNavigation = ({ isActive, handleFn }) => {
  const handleLogout = () => {
    window.sessionStorage.clear();
  };

  return (
    <StyledWrapper>
      <StyledCircle isActive={isActive} />
      {isActive && (
        <StyledUl>
          <StyledLi
            as={NavLink}
            activeClassName="active"
            to={routes.top_artists}
            onClick={() => handleFn(false)}
          >
            Top Artists
          </StyledLi>
          <StyledLi
            as={NavLink}
            activeClassName="active"
            to={routes.top_tracks}
            onClick={() => handleFn(false)}
          >
            Top Tracks
          </StyledLi>
          <StyledLi
            as={NavLink}
            activeClassName="active"
            to={routes.recent}
            onClick={() => handleFn(false)}
          >
            Recent
          </StyledLi>
          <StyledLi as={Link} to={routes.login} onClick={handleLogout}>
            Logout
          </StyledLi>
        </StyledUl>
      )}
    </StyledWrapper>
  );
};

StyledNavigation.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleFn: PropTypes.func.isRequired,
};

export default StyledNavigation;
