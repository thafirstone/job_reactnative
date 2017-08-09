// http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=java&l=austin%2C+tx&v=2&format=json
import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { FETCH_JOBS } from './types';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  q: 'javascript',
  latlong: 1,
  radius: 10,
};

const buildJobUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region) => async (dispatch) => {
  // const result = await axios.get('');
  try {
    const zip = await reverseGeocode(region);
    // console.log(zip);
    const url = buildJobUrl(zip);
    // console.log(url);
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
