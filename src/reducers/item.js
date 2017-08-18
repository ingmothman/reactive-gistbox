import {ITEM_LOAD, ITEM_LOAD_SUCCESS, ITEM_LOAD_FAILURE} from '../actionCreators/actionTypes';

const defaultState = {
    item: {},
    activeId: 1,
    isLoading: true,
};
export const item = (state = defaultState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ITEM_LOAD:
            return {
                ...state,
                isLoading: true,
                activeId: payload.id
            };
        case ITEM_LOAD_SUCCESS:
            if (state.activeId === action.meta.requestedId) {
                return {...state, ...payload};
            }
            return state;
        case ITEM_LOAD_FAILURE:
            return {...state};

        default:
            return state;
    }
};