import {CATEGORIES_LOAD_SUCCESS} from '../config/constants';

const defaultState = {
    list: [],
    isLoading: true,
    activeId: 'all'
};
export const categories = (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_LOAD_SUCCESS:
            const {categories} = payload;
            return [...state, ...categories];
        default:
            return state;
    }
};