import {
  FETCH_JOBS,
  SET_JOB_QUERY,
} from '../actions/types';

const INITIAL_STATE = { results: [], query: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      // console.log('fetch job lancééé', action.payload);
      return action.payload;
    case SET_JOB_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}
