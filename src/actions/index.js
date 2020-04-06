import spotifyApi from 'api';

export const FETCH_ARTISTS_REQUEST = 'FETCH_ARTISTS_REQUEST';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAILURE = 'FETCH_ARTISTS_FAILURE';

export const CLEAR_STORAGE_REQUEST = 'CLEAR_STORAGE_REQUEST';

export const fetchArtists = (time) => (dispatch) => {
  dispatch({ type: FETCH_ARTISTS_REQUEST });
  return spotifyApi.getMyTopArtists({limit:50,time_range:time})
    .then((payload) => {
      dispatch({ type: FETCH_ARTISTS_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_ARTISTS_FAILURE });
    });
};

export const clearStorage = () => (dispatch) => {
  dispatch({type:CLEAR_STORAGE_REQUEST});
  return null;
};
