import {
    REQUEST_PRICE, 
    RECEIVE_PRICE,
    RECEIVE_PRICE_ERROR
} from './../actions/actionTypes';

export default function priceByStock(
    state = {
        isFetching: false, 
        error: '', 
        prices: {}
    }, action) {
    switch(action.type) {
        case REQUEST_PRICE:
            return Object.assign({}, state, {
                isFetching: true,
                error: ''
            })
        case RECEIVE_PRICE:
            return Object.assign({}, state, {
                isFetching: false,
                error: '',
                prices: action.prices
            })
        case RECEIVE_PRICE_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                prices: {}
            })
        default:
            return state 
    }
}