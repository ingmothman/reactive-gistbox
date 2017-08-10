import axios from 'axios';
import {ITEMS_INIT, ITEMS_INIT_SUCCESS, ITEMS_INIT_FAILURE} from '../config/constants';
import filter from 'just-filter-object';


export const loadItems = (filters) => {
    return (dispatch) => {
        dispatch({type: ITEMS_INIT, payload: {filters: filters}});

        // todo:  find a solution to cancel the previous and unfinished requests.
        filters = filter(filters, (key, value) => value !== "all");
        axios.get(`http://localhost:9914/items`)
            .then((response) => {
                dispatch({
                    type: ITEMS_INIT_SUCCESS,
                    payload: {
                        list: response.data,
                        isLoading: false
                    }
                })
            })
            .catch(() => {
                dispatch({type: ITEMS_INIT_FAILURE})
            });
    }
};