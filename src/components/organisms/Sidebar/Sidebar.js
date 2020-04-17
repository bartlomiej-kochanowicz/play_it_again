import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { routes } from 'routes';

import NavButton from 'components/atoms/NavButton/NavButton';
import Logo from 'components/atoms/Logo/Logo';
import { Star } from '@styled-icons/fa-regular/Star';
import { Heart } from '@styled-icons/fa-regular/Heart';
import { Clock } from '@styled-icons/fa-regular/Clock';
import { ShareSquare } from '@styled-icons/fa-regular/ShareSquare';

const StyledWrapper = styled.nav`
  width: 120px;
  height: 100vh;
  padding: 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 10px 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background-color: #fff;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 50px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledLi = styled.li`
  ${({ last }) =>
    last &&
    css`
      flex-grow: 1;
    `};
`;

const sharedLinkStyle = css`
  display: block;
  text-decoration: none;
  width: 100%;
  color: ${({ theme }) => theme.grey300};

  &.active {
    color: ${({ theme }) => theme.spotifyBlack};
  }
`;

const StyledNavLink = styled(NavLink)`
  ${sharedLinkStyle}
`;

const StyledLink = styled(Link)`
  ${sharedLinkStyle};
  position: absolute;
  left: 0;
  bottom: 0;
`;

const StyledLogo = styled(Logo)`
  transform: scale(1);
  width: 50px;
`;

const Sidebar = () => {
  const handleLogout = () => {
    window.sessionStorage.clear();
  };

  return (
    <StyledWrapper>
      <StyledLogo />
      <StyledUl>
        <StyledLi>
          <StyledNavLink activeClassName="active" to={routes.top_artists}>
            <NavButton icon={Star}>Top Artists</NavButton>
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink activeClassName="active" to={routes.top_tracks}>
            <NavButton icon={Heart}>Top Tracks</NavButton>
          </StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink activeClassName="active" to={routes.recent}>
            <NavButton icon={Clock}>Recent</NavButton>
          </StyledNavLink>
        </StyledLi>
        <StyledLi last>
          <StyledLink to={routes.login} onClick={handleLogout}>
            <NavButton icon={ShareSquare}>Logout</NavButton>
          </StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledWrapper>
  );
};

export default Sidebar;
