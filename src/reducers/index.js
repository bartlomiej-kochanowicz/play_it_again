import { FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAILURE,CLEAR_STORAGE_REQUEST } from 'actions';

const initialState = {
  topArtists: [],
  topTracks: [],
  recent: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS: {
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
    case CLEAR_STORAGE_REQUEST: {
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
