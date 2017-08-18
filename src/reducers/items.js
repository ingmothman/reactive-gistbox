import {ITEMS_LOAD, ITEMS_LOAD_FAILURE, ITEMS_LOAD_SUCCESS, ITEMS_FILTER_CHANGE} from '../actionCreators/actionTypes';

import shallowEqual from 'shallowequal';

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
        case ITEMS_LOAD:
        case ITEMS_FILTER_CHANGE:
            return {...state, ...payload};
        case ITEMS_LOAD_SUCCESS:
            if (shallowEqual(state.filters, action.meta.requestedFilters)) {
                return {...state, ...payload};
            }
            return state;
        case ITEMS_LOAD_FAILURE:
            return {...state};
        default:
            return state;
    }
};