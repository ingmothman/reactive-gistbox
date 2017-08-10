import {ITEMS_INIT, ITEMS_INIT_SUCCESS, ITEMS_INIT_FAILURE, ITEMS_FILTER_INIT} from '../config/constants';


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
        case ITEMS_INIT:
            return [...state, ...payload];
        case ITEMS_INIT_SUCCESS:
            return [...state, ...payload.list];
    }
    return state;

};