import {ITEMS_LOAD, ITEMS_LOAD_FAILURE, ITEMS_LOAD_SUCCESS, ITEMS_FILTER_CHANGE} from '../actionCreators/actionTypes';


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
            console.log('state',state);
            console.log('payload',payload);
            return {
                ...state,
                ...payload
            };
        case ITEMS_LOAD_SUCCESS:
            return {...state, ...payload};
        case ITEMS_LOAD_FAILURE:
            return {...state};
        default:
            return state;
    }
};