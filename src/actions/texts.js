import { ADD_TEXT, REMOVE_TEXT, GET_TEXTS } from './index';

export const addText = payload => {
  return {
    type: ADD_TEXT,
    payload
  };
};

export const removeText = id => {
  return {
    type: REMOVE_TEXT,
    payload: id
  };
};

export const getTexts = payload => {
  return {
    type: GET_TEXTS,
    action: payload
  };
};
