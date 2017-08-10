import {ITEM_LOAD_SUCCESS, ITEM_LOAD_FAILURE} from '../config/constants';

const defaultState = {
    item: {},
    activeId: 1,
    isLoading: true,
};
export const item = (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ITEM_LOAD_SUCCESS:
            return {...state, ...payload};
        case ITEM_LOAD_FAILURE:
            return {...state};

        default:
            return state;
    }
};