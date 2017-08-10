import axios from 'axios';
import {CATEGORIES_LOAD, CATEGORIES_LOAD_SUCCESS, CATEGORIES_LOAD_FAILURE} from '../config/constants';

export const loadCategories = () => {
    return (dispatch) => {
        dispatch({type: CATEGORIES_LOAD});
        // todo:  find a solution to cancel the previous and unfinished requests.
        axios.get(`http://localhost:9914/categories`)
            .then((response) => {
                dispatch({
                    type: CATEGORIES_LOAD_SUCCESS,
                    payload: {
                        list: response.data,
                        isLoading: false
                    }
                })
            })
            .catch(() => {dispatch({type: CATEGORIES_LOAD_FAILURE});});
    }

};