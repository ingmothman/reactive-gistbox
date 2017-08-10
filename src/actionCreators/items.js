import axios from 'axios';
import {ITEMS_LOAD, ITEMS_LOAD_SUCCESS, ITEMS_LOAD_FAILURE, ITEMS_FILTER_CHANGE} from '../actionCreators/actionTypes';
import filter from 'just-filter-object';


export const loadItems = (filters) => {
    return (dispatch) => {
        dispatch({type: ITEMS_LOAD, payload: {filters: filters, isLoading: true}});

        // todo:  find a solution to cancel the previous and unfinished requests.
        const params = filter(filters, (key, value) => value !== "all");
        axios.get(`http://localhost:9914/items`, {params})
            .then((response) => {
                dispatch({
                    type: ITEMS_LOAD_SUCCESS,
                    payload: {
                        list: response.data,
                        isLoading: false
                    }
                })
            })
            .catch(() => {
                dispatch({type: ITEMS_LOAD_FAILURE})
            });
    }
};


export const filterChanged = (filters) => {
    return (dispatch) => {
        dispatch({type: ITEMS_FILTER_CHANGE, payload: {filters: filters}});
    }
};