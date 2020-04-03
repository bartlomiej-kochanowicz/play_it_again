import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes';

import NavButton from 'components/atoms/NavButton/NavButton';
import Logo from 'components/atoms/Logo/Logo';
import { Star } from '@styled-icons/fa-regular/Star';
import { Heart } from '@styled-icons/fa-regular/Heart';
import { Clock } from '@styled-icons/fa-regular/Clock';

const StyledWrapper = styled.div`
  width: 120px;
  height: 100vh;
  padding: 30px 0;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 50px 0;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.grey300};

  &.active {
    color: ${({ theme }) => theme.spotifyBlack};
  }
`;

const Sidebar = () => (
  <StyledWrapper>
    <Logo />
    <StyledUl>
      <li>
        <StyledNavLink activeClassName="active" to={routes.top_artists}>
          <NavButton icon={Star}>Top Artists</NavButton>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink activeClassName="active" to={routes.top_tracks}>
          <NavButton icon={Heart}>Top Tracks</NavButton>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink activeClassName="active" to={routes.recent}>
          <NavButton icon={Clock}>Recent</NavButton>
        </StyledNavLink>
      </li>
    </StyledUl>
  </StyledWrapper>
);

export default Sidebar;
