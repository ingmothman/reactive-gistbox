import {ITEMS_LOAD_FAILURE, ITEMS_LOAD_SUCCESS} from '../config/constants';


const defaultFilters = {
    _sort: 'created',
    _order: 'asc',
    isPublic: 'all',
    category: 'all',
};

const defaultState = {
    list: [],
    isLoading: true,
    filters: defaultFilters
};

export const items = (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ITEMS_LOAD_SUCCESS:
            return {...state, ...payload};
        case ITEMS_LOAD_FAILURE:
            return {...state};
        default:
            return state;
    }

};