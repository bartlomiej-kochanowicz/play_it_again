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

export const CLEAR_STORAGE_REQUEST = 'CLEAR_STORAGE_REQUEST';

export const fetchArtists = (time) => (dispatch) => {
  dispatch({ type: FETCH_ARTISTS_REQUEST });
  return spotifyApi
    .getMyTopArtists({ limit: 50, time_range: time })
    .then((payload) => {
      dispatch({ type: FETCH_ARTISTS_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_ARTISTS_FAILURE });
    });
};

export const fetchTracks = (time) => (dispatch) => {
  dispatch({ type: FETCH_TRACKS_REQUEST });
  return spotifyApi
    .getMyTopTracks({ limit: 50, time_range: time })
    .then((payload) => {
      dispatch({ type: FETCH_TRACKS_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_TRACKS_FAILURE });
    });
};

export const fetchRecent = () => (dispatch) => {
  dispatch({ type: FETCH_RECENT_REQUEST });
  return spotifyApi
    .getMyRecentlyPlayedTracks({ limit: 50 })
    .then((payload) => {
      dispatch({ type: FETCH_RECENT_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_RECENT_FAILURE });
    });
};

export const clearStorage = () => (dispatch) => {
  dispatch({ type: CLEAR_STORAGE_REQUEST });
  return null;
};
