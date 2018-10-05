import {SELECT_SYMBOL} from './../actions/actionTypes';

export default function selectedSymbol(state = '', action) {
    switch (action.type) {
        case SELECT_SYMBOL:
            return action.symbol
        default:
            return state
    }
}