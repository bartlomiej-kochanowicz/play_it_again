import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { routes } from 'routes';

import NavButton from 'components/atoms/NavButton/NavButton';
import Logo from 'components/atoms/Logo/Logo';
import { Star } from '@styled-icons/fa-regular/Star';
import { Heart } from '@styled-icons/fa-regular/Heart';
import { Clock } from '@styled-icons/fa-regular/Clock';
import { ShareSquare } from '@styled-icons/fa-regular/ShareSquare';

const StyledWrapper = styled.div`
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 60px;
    padding: 0;
    top: auto;
    bottom: 0;
    flex-direction: row;
  }
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 50px 0;
  list-style: none;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledLi = styled.li`
  ${({ last }) =>
    last &&
    css`
      flex-grow: 1;
      position: relative;
    `};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-grow: 0;
  }
`;

const sharedLinkStyle = css`
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.grey300};

  &.active {
    color: ${({ theme }) => theme.spotifyBlack};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 60px;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${sharedLinkStyle}
`;

const StyledLink = styled(Link)`
  ${sharedLinkStyle};
`;

const StyledLogo = styled(Logo)`
  transform: scale(0.7);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

class Sidebar extends Component {
  handleLogout = () => {
    window.sessionStorage.clear();
  };

  render() {
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
            <StyledLink to={routes.login} onClick={this.handleLogout}>
              <NavButton icon={ShareSquare} last>
                Logout
              </NavButton>
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledWrapper>
    );
  }
}

export default Sidebar;
