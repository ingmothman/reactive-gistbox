import {CATEGORIES_LOAD_FAILURE, CATEGORIES_LOAD_SUCCESS} from '../config/constants';

const defaultState = {
    list: [],
    isLoading: true,
    activeId: 'all'
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