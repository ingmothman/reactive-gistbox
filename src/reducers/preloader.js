import {
  ITEMS_LOAD_SUCCESS, CATEGORIES_LOAD_SUCCESS,
} from '../actionCreators/actionTypes';

const defaultState = {
  isPreloading: true,
  list: [
    {
      id: ITEMS_LOAD_SUCCESS,
      text: 'Loading Items...',
      finishedPreloading: false,
    },
    {
      id: CATEGORIES_LOAD_SUCCESS,
      text: 'Loading Categories...',
      finishedPreloading: false,
    },
  ],
};
export const preloader = (state = defaultState, action) => {
  const { type, payload } = action;
  let actionCatched = false;
  let activeLoadersCount = state.list.length;
  const filteredList = state.list.filter((item) => {
    if (item.id === type) {
      item.finishedPreloading = true;
      actionCatched = true;
    }
    if (item.finishedPreloading === true) {
      activeLoadersCount -= 1;
    }
    return true;
  });

  if (actionCatched) {
    return {
      ...state,
      isPreloading: !(activeLoadersCount === 0),
      list: filteredList,
    };
  }
  return state;
};

