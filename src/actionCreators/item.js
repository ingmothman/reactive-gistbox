import axios from 'axios';
import {ITEM_LOAD, ITEM_LOAD_SUCCESS, ITEM_LOAD_FAILURE} from '../config/constants';

export const loadItem = (id) => {
    return (dispatch) => {
        dispatch({type: ITEM_LOAD, payload: {id: id}});

        axios.get(`http://localhost:9914/items/${id}`)
            .then((response) => {
                dispatch({
                    type: ITEM_LOAD_SUCCESS,
                    payload: {
                        item: response.data,
                        activeId: response.data.id,
                        isLoading: false
                    }
                })
            })
            .catch(() => {
                dispatch({type: ITEM_LOAD_FAILURE})
            });
    }

};