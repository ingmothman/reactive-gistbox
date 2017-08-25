import {
  ITEM_LOAD, ITEM_LOAD_SUCCESS, ITEM_LOAD_FAILURE,
  ITEM_REMOVE, ITEM_REMOVE_SUCCESS, ITEM_REMOVE_FAILURE,
} from '../actionCreators/actionTypes';


const defaultState = {
  item: {},
  activeId: 0,
  isLoading: false,
};
export const item = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    // LOAD
    case ITEM_LOAD:
      return {
        ...state,
        isLoading: true,
        activeId: payload.id,
      };
    case ITEM_LOAD_SUCCESS:
      if (state.activeId === action.meta.requestedId) {
        return { ...state, ...payload };
      }
      return { ...state };
    case ITEM_LOAD_FAILURE:
      return state;
    // REMOVE
    case ITEM_REMOVE:
      return {
        ...state,
        isLoading: true,
        activeId: 0,
      };
    case ITEM_REMOVE_SUCCESS:
      return { ...state, ...payload };
    case ITEM_REMOVE_FAILURE:
      return state;
    default:
      return state;
  }
};

