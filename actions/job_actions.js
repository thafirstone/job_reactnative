// http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=java&l=austin%2C+tx&v=2&format=json
import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import _ from 'lodash';
import { FETCH_JOBS, SET_JOB_QUERY, LIKE_JOB, CLEAR_LIKED_JOBS } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  q: 'javascript',
  latlong: 1,
  radius: 10,
};

const buildJobUrl = (zip, queryDefault) => {
  if (!_.isEmpty(queryDefault)) {
    console.log(`la nouvelle query est: ${queryDefault}`);
    JOB_QUERY_PARAMS.q = queryDefault;
  }
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, query, callback) => async (dispatch) => {
  try {
    const zip = await reverseGeocode(region);
    // console.log(zip);
    const url = buildJobUrl(zip, query);
    // console.log(url);
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const jobQueryChange = (query) => (dispatch) => {
  dispatch({ type: SET_JOB_QUERY, payload: query });
};

export const likeJob = (job) => (dispatch) => {
  dispatch({ type: LIKE_JOB, payload: job });
};

export const clearLikedJobs = (job) => (dispatch) => {
  dispatch({ type: CLEAR_LIKED_JOBS });
};
