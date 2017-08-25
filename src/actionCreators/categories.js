import axios from 'axios';
import { CATEGORIES_LOAD, CATEGORIES_LOAD_SUCCESS, CATEGORIES_LOAD_FAILURE } from './actionTypes';
import { apiUrl } from '../helpers';

export const loadCategories = () => {
  return (dispatch) => {
    dispatch({ type: CATEGORIES_LOAD });
    // todo:  find a solution to cancel the previous and unfinished requests.
    axios.get(apiUrl('/categories'))
      .then((response) => {
        dispatch({
          type: CATEGORIES_LOAD_SUCCESS,
          payload: {
            list: response.data,
            isLoading: false,
          },
        });
      })
      .catch(() => {
        dispatch({ type: CATEGORIES_LOAD_FAILURE });
      });
  };
};
