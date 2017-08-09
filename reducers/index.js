import { combineReducers } from 'redux';
import auth from './auth_reducer';
import job from './job_reducers';
import likeJobs from './like_reducer';

export default combineReducers({
  auth,
  job,
  likeJobs,
});
