import axios from 'axios';
import {ITEMS_LOAD, ITEMS_LOAD_SUCCESS, ITEMS_LOAD_FAILURE, ITEMS_FILTER_CHANGE} from './actionTypes';
import filter from 'just-filter-object';
import {apiUrl} from "../helpers";

export const loadItems = (filters) => {
    return (dispatch) => {
        dispatch({type: ITEMS_LOAD, payload: {filters: filters, isLoading: true}});

        // todo:  find a solution to cancel the previous and unfinished requests.
        const params = filter(filters, (key, value) => value !== "all");
        axios.get(apiUrl('/items'), {params})
            .then((response) => {
                dispatch({
                    type: ITEMS_LOAD_SUCCESS,
                    payload: {
                        filters,
                        list: response.data,
                        isLoading: false
                    },
                    meta: {
                        requestedFilters: filters
                    }
                })
            })
            .catch(() => {
                dispatch({type: ITEMS_LOAD_FAILURE})
            });
    }
};


export const filterChanged = (changedFilters) => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(
            {
                type: ITEMS_FILTER_CHANGE,
                payload: {
                    changedFilters: changedFilters
                }
            }
        );
        dispatch(loadItems({
            ...state.items.filters,
            ...changedFilters
        }));
    }
};

