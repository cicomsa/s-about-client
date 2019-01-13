import { ADD_TODAYS, GET_TODAYS, REMOVE_TODAYS } from './index';
import * as request from 'superagent';
import { baseUrl } from '../constants';

export const getTodays = () => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .get(`${baseUrl}/todays`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
        type: GET_TODAYS,
        payload: response.body.todays
      })
    )
    .catch(err => console.log(err));
};

export const addTodays = todays => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .post(`${baseUrl}/todays`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(todays)
    .then(response =>
      dispatch({
        type: ADD_TODAYS,
        payload: response.body
      })
    );
};

export const deleteTodays = todaysId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  request
    .delete(`${baseUrl}/todays/${todaysId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(todaysId)
    .then(response =>
      dispatch({
        type: REMOVE_TODAYS,
        payload: todaysId
      })
    )
    .catch(err => console.log(err));
};
