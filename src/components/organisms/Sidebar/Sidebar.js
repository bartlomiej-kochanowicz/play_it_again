import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { routes } from 'routes';
import { scrollToTop, logout } from 'utils';

import NavButton from 'components/atoms/NavButton/NavButton';
import Logo from 'components/atoms/Logo/Logo';
import { Star } from '@styled-icons/fa-regular/Star';
import { Heart } from '@styled-icons/fa-regular/Heart';
import { Clock } from '@styled-icons/fa-regular/Clock';
import { ShareSquare } from '@styled-icons/fa-regular/ShareSquare';
import { Gem } from '@styled-icons/fa-regular/Gem';

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

const Sidebar = () => (
  <StyledWrapper>
    <StyledLogo />
    <StyledUl>
      <StyledLi>
        <StyledNavLink activeClassName="active" to={routes.dashboard} onClick={scrollToTop}>
          <NavButton icon={Gem}>Dashboard</NavButton>
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink activeClassName="active" to={routes.top_artists} onClick={scrollToTop}>
          <NavButton icon={Star}>Top Artists</NavButton>
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink activeClassName="active" to={routes.top_tracks} onClick={scrollToTop}>
          <NavButton icon={Heart}>Top Tracks</NavButton>
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink activeClassName="active" to={routes.recent} onClick={scrollToTop}>
          <NavButton icon={Clock}>Recent</NavButton>
        </StyledNavLink>
      </StyledLi>
      <StyledLi last>
        <StyledLink to={routes.login} onClick={logout}>
          <NavButton icon={ShareSquare}>Logout</NavButton>
        </StyledLink>
      </StyledLi>
    </StyledUl>
  </StyledWrapper>
);

export default Sidebar;
