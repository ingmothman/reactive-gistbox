import {combineReducers} from 'redux';

import {item} from './item';
import {items} from './items';
import {categories} from './categories';
import {preloader} from './preloader';

export default combineReducers({
    item,
    items,
    categories,
    preloader
});