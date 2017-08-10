import {CATEGORIES_LOAD_FAILURE, CATEGORIES_LOAD_SUCCESS} from '../actionCreators/actionTypes';

const defaultState = {
    list: [],
    isLoading: true
};
export const categories = (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_LOAD_SUCCESS:
            return {...state, ...payload};
        case CATEGORIES_LOAD_FAILURE:
            return {...state};
        default:
            return state;
    }
};