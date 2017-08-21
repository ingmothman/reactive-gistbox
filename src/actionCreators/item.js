import axios from 'axios';
import {
    ITEM_LOAD, ITEM_LOAD_SUCCESS, ITEM_LOAD_FAILURE,
    ITEM_REMOVE, ITEM_REMOVE_SUCCESS, ITEM_REMOVE_FAILURE,
} from './actionTypes';

export const loadItem = (id) => {
    return (dispatch) => {
        if (id > 0) {
            dispatch({type: ITEM_LOAD, payload: {id: id}});

            axios.get(`http://localhost:9914/items/${id}`)
                .then((response) => {
                    dispatch({
                        type: ITEM_LOAD_SUCCESS,
                        payload: {
                            item: response.data,
                            activeId: response.data.id,
                            isLoading: false
                        },
                        meta: {
                            requestedId: id
                        }
                    })
                })
                .catch(() => {
                    dispatch({type: ITEM_LOAD_FAILURE})
                });
        }
    }
};

export const removeItem = (id) => {
    return (dispatch) => {
        if (id > 0) {
            dispatch({type: ITEM_REMOVE, payload: {id: id}});

            axios.delete(`http://localhost:9914/items/${id}`)
                .then((response) => {
                    dispatch({
                        type: ITEM_REMOVE_SUCCESS,
                        payload: {
                            item: {},
                            activeId: 0,
                            isLoading: false
                        },
                        meta: {
                            requestedId: id
                        }
                    })
                })
                .catch(() => {
                    dispatch({type: ITEM_REMOVE_FAILURE})
                });
        }
    }

};