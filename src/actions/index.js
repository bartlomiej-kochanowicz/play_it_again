import spotifyApi from 'api';

export const FETCH_ARTISTS_REQUEST = 'FETCH_ARTISTS_REQUEST';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAILURE = 'FETCH_ARTISTS_FAILURE';

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const FETCH_RECENT_REQUEST = 'FETCH_RECENT_REQUEST';
export const FETCH_RECENT_SUCCESS = 'FETCH_RECENT_SUCCESS';
export const FETCH_RECENT_FAILURE = 'FETCH_RECENT_FAILURE';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const FETCH_PLAYLISTS_REQUEST = 'FETCH_PLAYLISTS_REQUEST';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_FAILURE = 'FETCH_PLAYLISTS_FAILURE';

export const FETCH_NEW_RELEASES_REQUEST = 'FETCH_NEW_RELEASES_REQUEST';
export const FETCH_NEW_RELEASES_SUCCESS = 'FETCH_NEW_RELEASES_SUCCESS';
export const FETCH_NEW_RELEASES_FAILURE = 'FETCH_NEW_RELEASES_FAILURE';

export const FILL_DUMMY_DATA = 'FILL_DUMMY_DATA';

export const CLEAR_STORAGE_REQUEST = 'CLEAR_STORAGE_REQUEST';

export const fetchArtists = time => dispatch => {
  dispatch({ type: FETCH_ARTISTS_REQUEST });
  return spotifyApi
    .getMyTopArtists({ limit: 50, time_range: time })
    .then(payload => {
      dispatch({ type: FETCH_ARTISTS_SUCCESS, payload, time });
    })
    .catch(() => {
      dispatch({ type: FETCH_ARTISTS_FAILURE, time });
    });
};

export const fetchTracks = time => dispatch => {
  dispatch({ type: FETCH_TRACKS_REQUEST });
  return spotifyApi
    .getMyTopTracks({ limit: 50, time_range: time })
    .then(payload => {
      dispatch({ type: FETCH_TRACKS_SUCCESS, payload, time });
    })
    .catch(() => {
      dispatch({ type: FETCH_TRACKS_FAILURE, time });
    });
};

export const fetchRecent = () => dispatch => {
  dispatch({ type: FETCH_RECENT_REQUEST });
  return spotifyApi
    .getMyRecentlyPlayedTracks({ limit: 50 })
    .then(payload => {
      dispatch({ type: FETCH_RECENT_SUCCESS, payload });
    })
    .catch(() => {
      dispatch({ type: FETCH_RECENT_FAILURE });
    });
};

export const fetchUser = () => dispatch => {
  dispatch({ type: FETCH_USER_REQUEST });
  return spotifyApi
    .getMe()
    .then(payload => {
      dispatch({ type: FETCH_USER_SUCCESS, payload });
    })
    .catch(() => {
      dispatch({ type: FETCH_USER_FAILURE });
    });
};

export const fetchPlaylists =
  (country = null) =>
  dispatch => {
    dispatch({ type: FETCH_PLAYLISTS_REQUEST });
    return spotifyApi
      .getFeaturedPlaylists(
        country === null ? { limit: 4 } : { country, limit: 4 }
      )
      .then(payload => {
        dispatch({ type: FETCH_PLAYLISTS_SUCCESS, payload, country });
      })
      .catch(() => {
        dispatch({ type: FETCH_PLAYLISTS_FAILURE });
      });
  };

export const fetchNewReleases = () => dispatch => {
  dispatch({ type: FETCH_NEW_RELEASES_REQUEST });
  return spotifyApi
    .getNewReleases({ limit: 4 })
    .then(payload => {
      dispatch({ type: FETCH_NEW_RELEASES_SUCCESS, payload });
    })
    .catch(() => {
      dispatch({ type: FETCH_NEW_RELEASES_FAILURE });
    });
};

export const fillDummyData = dispatch => {
  window.localStorage.setItem('hash', '#dummydata');
  dispatch({ type: FILL_DUMMY_DATA });
  return null;
};

export const clearStorage = dispatch => {
  dispatch({ type: CLEAR_STORAGE_REQUEST });
  return null;
};
