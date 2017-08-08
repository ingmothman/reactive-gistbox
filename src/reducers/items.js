import {INIT_ITEMS} from '../reducers/items';

export default (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case INIT_ITEMS:
            const {items} = payload;
            return Array.prototype.concat(state,items);
            break;
        default:
            return state;
    }
}