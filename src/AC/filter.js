import {REMOVE_ITEM, INIT_ITEMS, INIT_ITEM} from '../config/constants';


export const changeFilter = () => {
    return {
        type: REMOVE_ITEM
    }
};
export const initItems = (items) => {
    return {
        type: INIT_ITEMS,
        payload: {
            items
        }
    }
};
export const initItem = (item) => {
    return {
        type: INIT_ITEM,
        payload: {
            item
        }
    }
};