import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Logo from 'components/atoms/Logo/Logo';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { fillDummyData as fillDummyDataAction } from 'actions';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.grey100};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    height: 100%;
  }
`;

const StyledModal = styled.div`
  width: 615px;
  height: 770px;
  padding: 32px;
  color: ${({ theme }) => theme.spotifyBlack};
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 34px -6px rgba(138, 138, 138, 0.1);
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding-bottom: 100px;
  }
`;
const StyledLogo = styled(Logo)`
  margin-bottom: 20px;
`;

const StyledListItem = styled.li`
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledLinksWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const StyledHyperlink = styled.a`
  display: block;
  color: ${({ theme }) => theme.spotifyBlack};
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.spotifyBlack};
`;

const StyledButton = styled(Button)`
  position: absolute;
  z-index: 1;
  left: 32px;
  bottom: 32px;
  width: calc(100% - 64px);
`;

const AppInfo = ({ fillDummyData }) => (
  <StyledWrapper>
    <StyledModal>
      <StyledLogo />
      <Heading big>Play It Again App</Heading>
      <Paragraph>
        Web app which allows you to discover your top artist, songs and more.You
        can make playlist based on your music preferences.
      </Paragraph>
      <Heading>Required Spotify access</Heading>
      <Paragraph>
        Application requires access to your Spotify account. We use Spotify
        Implicit Grant Flow for user Authorization. Application works as client
        side only and your Spotify data is not stored to any server.
      </Paragraph>
      <Heading>Used Scopes and API</Heading>
      <Paragraph>
        Scopes enable the application to access specific Spotify API endpoints.
        The set of scopes that are required for you to access this Application:
      </Paragraph>
      <ul>
        <StyledListItem>user-read-recently-played</StyledListItem>
        <StyledListItem>user-top-read</StyledListItem>
        <StyledListItem>playlist-modify-public</StyledListItem>
      </ul>
      <Paragraph>
        Created & Powered by bartekmajster sp z o.o. using Google Firebase and
        Spotify API.
      </Paragraph>
      <StyledLinksWrapper>
        <StyledHyperlink
          href="https://github.com/bartekmajster/play_it_again"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repository
        </StyledHyperlink>
        <StyledLink to={routes.dashboard} onClick={fillDummyData}>
          Open app with dummy data.
        </StyledLink>
      </StyledLinksWrapper>
      <Link to={routes.login}>
        <StyledButton>
          OK, got it
          <span aria-label="OK" role="img">
            👌🏻
          </span>
        </StyledButton>
      </Link>
    </StyledModal>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  fillDummyData: () => dispatch(fillDummyDataAction()),
});

export default connect(null, mapDispatchToProps)(AppInfo);
AppInfo.propTypes = {
  fillDummyData: PropTypes.func.isRequired,
};
