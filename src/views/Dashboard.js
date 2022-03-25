import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import hero from 'assets/hero_images/hero1.jpg';
import ListTemplate from 'templates/ListTemplate';
import { connect } from 'react-redux';
import {
  fetchUser as fetchUserAction,
  fetchPlaylists as fetchPlaylistsAction,
  fetchNewReleases as fetchNewReleasesAction,
} from 'actions';
import DashboardProfile from 'components/molecules/DashboardProfile/DashboardProfile';
import DashboardPlaylists from 'components/molecules/DashboardPlaylists/DashboardPlaylists';
import DashboardNewReleases from 'components/molecules/DashboardNewReleases/DashboardNewReleases';
import Spinner from 'components/atoms/Spinner/Spinner';
import ErrorModal from 'components/molecules/ErrorModal/ErrorModal';

const StyledWrapper = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'playlists playlists profil'
    'info countryPlaylists countryPlaylists';
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'playlists playlists'
      'info profil'
      'countryPlaylists countryPlaylists';
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileXl}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      'profil'
      'playlists'
      'info'
      'countryPlaylists';
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 20px;
  }
`;

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

const Dashboard = ({
  fetchUser,
  fetchPlaylists,
  fetchNewReleases,
  user,
  recommendPlaylistsByCountry,
  recommendPlaylists,
  newReleases,
}) => {
  useEffect(() => {
    if (!user.country) {
      fetchUser();
      fetchPlaylists('PL');
      fetchPlaylists();
      fetchNewReleases();
    }
  }, []);

  return user.country !== undefined &&
    recommendPlaylistsByCountry.message !== undefined &&
    recommendPlaylists.message !== undefined ? (
    <ListTemplate header="Dashboard" image={hero}>
      <StyledWrapper>
        <DashboardPlaylists
          playlists={recommendPlaylists}
          position="playlists"
        />
        <DashboardProfile
          image={user.images[0].url}
          name={user.display_name}
          followers={user.followers.total}
          link={user.external_urls.spotify}
        />
        <DashboardNewReleases albums={newReleases} />
        <DashboardPlaylists
          playlists={recommendPlaylistsByCountry}
          position="countryPlaylists"
        />
      </StyledWrapper>
    </ListTemplate>
  ) : (
    <ListTemplate header="Dashboard" image={hero}>
      {user === 'error' ? (
        <ErrorModal />
      ) : (
        <StyledLoading>
          <Spinner />
        </StyledLoading>
      )}
    </ListTemplate>
  );
};

const mapStateToProps = (state) => {
  const { user, recommendPlaylistsByCountry, recommendPlaylists, newReleases } =
    state;
  return {
    user,
    recommendPlaylistsByCountry,
    recommendPlaylists,
    newReleases,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUserAction()),
  fetchPlaylists: (country) => dispatch(fetchPlaylistsAction(country)),
  fetchNewReleases: () => dispatch(fetchNewReleasesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

Dashboard.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchPlaylists: PropTypes.func.isRequired,
  fetchNewReleases: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.object,
      ])
    ),
  ]).isRequired,
  recommendPlaylistsByCountry: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  recommendPlaylists: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  newReleases: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};
