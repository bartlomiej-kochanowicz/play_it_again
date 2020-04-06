import { FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAILURE } from 'actions';

const initialState = {
  topArtists: [],
  topTracks: [],
  recent: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS: {
      window.localStorage.setItem('topArtists',JSON.stringify(action.payload.items));
      return {
        ...state,
        topArtists: [...action.payload.items],
      };
    }
    case FETCH_ARTISTS_FAILURE: {
      return {
        ...state,
        topArtists: [],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
