import produce from 'immer';

import {
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  FETCH_RECENT_SUCCESS,
  FETCH_RECENT_FAILURE,
  CLEAR_STORAGE_REQUEST,
} from 'actions';

const initialState = {
  topArtists: {
    long_term: [],
    medium_term: [],
    short_term: [],
  },
  topTracks: {
    long_term: [],
    medium_term: [],
    short_term: [],
  },
  recent: [],
};

const rootReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_ARTISTS_SUCCESS: {
        // eslint-disable-next-line no-param-reassign
        draft.topArtists[action.time] = [...action.payload.items];
        break;
      }
      case FETCH_ARTISTS_FAILURE:{
        // eslint-disable-next-line no-param-reassign
        draft.topArtists[action.time] = [];
        break;
      }
      case FETCH_TRACKS_SUCCESS: {
        // eslint-disable-next-line no-param-reassign
        draft.topTracks[action.time] = [...action.payload.items];
        break;
      }
      case FETCH_TRACKS_FAILURE:{
        // eslint-disable-next-line no-param-reassign
        draft.topTracks[action.time] = [];
        break;
      }

      case FETCH_RECENT_SUCCESS: {
        // eslint-disable-next-line no-param-reassign
        draft.recent = [...action.payload.items];
        break;
      }
      case FETCH_RECENT_FAILURE: {
        // eslint-disable-next-line no-param-reassign
        draft.recent = [];
        break;
      }
      case CLEAR_STORAGE_REQUEST: {
        // eslint-disable-next-line no-param-reassign
        draft = [];
        break;
      }

      default:
        return draft;
    }
  });

/* const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS: {
      console.log(state);
      return {
        ...state,
        topArtists:{
          ...state.topArtists,
          [action.time]:[...action.payload.items],
        }
      };
    }
    case FETCH_ARTISTS_FAILURE: {
      return {
        ...state,
        topArtists: [],
      };
    }
    case FETCH_TRACKS_SUCCESS: {
      return {
        ...state,
        topTracks: [...action.payload.items],
      };
    }
    case FETCH_TRACKS_FAILURE: {
      return {
        ...state,
        topTracks: [],
      };
    }
    case FETCH_RECENT_SUCCESS: {
      return {
        ...state,
        recent: [...action.payload.items],
      };
    }
    case FETCH_RECENT_FAILURE: {
      return {
        ...state,
        recent: [],
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
}; */

export default rootReducer;
