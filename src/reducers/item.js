import {ITEM_LOAD, ITEM_LOAD_SUCCESS, ITEM_LOAD_FAILURE} from '../config/constants';

const defaultState = {
    item: {},
    activeId: 0
};
export const item = (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ITEM_LOAD_SUCCESS:
            const {item} = payload;
            return {...item};
        case ITEM_LOAD_FAILURE:
            return state;

        default:
            return state;
    }
};