/* eslint-disable no-param-reassign */

import produce from 'immer';

import {
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  FETCH_RECENT_SUCCESS,
  FETCH_RECENT_FAILURE,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_FAILURE,
  FETCH_NEW_RELEASES_SUCCESS,
  FETCH_NEW_RELEASES_FAILURE,
  CLEAR_STORAGE_REQUEST,
  FILL_DUMMY_DATA,
} from 'actions';

import {
  artistsLongTerm,
  artistsMediumTerm,
  artistsShortTerm,
  tracksLongTerm,
  tracksMediumTerm,
  tracksShortTerm,
  recent,
  me,
  recommendPlaylistsByCountry,
  recommendPlaylists,
  newReleases,
} from 'dummyData';

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
  recommendPlaylists: [],
  recommendPlaylistsByCountry: [],
  newReleases: [],
  user: {},
};

const rootReducer = (state = initialState, action = null) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_ARTISTS_SUCCESS: {
        draft.topArtists[action.time] = [...action.payload.items];
        break;
      }
      case FETCH_ARTISTS_FAILURE: {
        draft.topArtists[action.time] = 'error';
        break;
      }
      case FETCH_TRACKS_SUCCESS: {
        draft.topTracks[action.time] = [...action.payload.items];
        break;
      }
      case FETCH_TRACKS_FAILURE: {
        draft.topTracks[action.time] = 'error';
        break;
      }

      case FETCH_RECENT_SUCCESS: {
        draft.recent = [...action.payload.items];
        break;
      }
      case FETCH_RECENT_FAILURE: {
        draft.recent = 'error';
        break;
      }
      case FETCH_USER_SUCCESS: {
        draft.user = { ...action.payload };
        break;
      }
      case FETCH_USER_FAILURE: {
        draft.user = 'error';
        break;
      }
      case FETCH_PLAYLISTS_SUCCESS: {
        if (action.country === 'PL') {
          draft.recommendPlaylistsByCountry = { ...action.payload };
        } else if (action.country === null) {
          draft.recommendPlaylists = { ...action.payload };
        }
        break;
      }
      case FETCH_PLAYLISTS_FAILURE: {
        draft.recommendPlaylistsByCountry = 'error';
        draft.recommendPlaylists = 'error';
        break;
      }
      case FETCH_NEW_RELEASES_SUCCESS: {
        draft.newReleases = [...action.payload.albums.items];
        break;
      }
      case FETCH_NEW_RELEASES_FAILURE: {
        draft.newReleases = 'error';
        break;
      }
      case FILL_DUMMY_DATA: {
        draft.topArtists = {
          long_term: [...artistsLongTerm.items],
          medium_term: [...artistsMediumTerm.items],
          short_term: [...artistsShortTerm.items],
        };
        draft.topTracks = {
          long_term: [...tracksLongTerm.items],
          medium_term: [...tracksMediumTerm.items],
          short_term: [...tracksShortTerm.items],
        };
        draft.recent = [...recent.items];
        draft.recommendPlaylists = { ...recommendPlaylists };
        draft.recommendPlaylistsByCountry = { ...recommendPlaylistsByCountry };
        draft.newReleases = [...newReleases.albums.items];
        draft.user = { ...me };
        break;
      }
      case CLEAR_STORAGE_REQUEST: {
        draft = [];
        break;
      }

      default:
        return draft;
    }

    return null;
  });

export default rootReducer;
