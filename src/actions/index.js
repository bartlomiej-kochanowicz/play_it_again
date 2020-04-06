import spotifyApi from 'api';

export const FETCH_ARTISTS_REQUEST = 'FETCH_ARTISTS_REQUEST';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAILURE = 'FETCH_ARTISTS_FAILURE';

export const fetchArtists = (number) => (dispatch,number) => {
  dispatch({ type: FETCH_ARTISTS_REQUEST });

  return spotifyApi.getMyTopArtists({limit:50,time_range:'long_term'})
    .then((payload) => {
      dispatch({ type: FETCH_ARTISTS_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_ARTISTS_FAILURE });
    });
};
