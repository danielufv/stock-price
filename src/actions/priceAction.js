import axios from "axios";
import {
    REQUEST_PRICE, 
    RECEIVE_PRICE,
    RECEIVE_PRICE_ERROR
} from './actionTypes';

const apiUrl = "https://api.iextrading.com/1.0/stock/"
const apiMethod = 'quote'

export default function fetchStockPrice(symbol) {
    return (dispatch) => {
        dispatch(requestPrice(symbol))
        return axios.get(`${apiUrl + symbol}/${apiMethod}`)
            .then((response) => {
                const prices = (({latestPrice, change, changePercent}) => 
                    ({latestPrice, change, changePercent}))(response.data)
                dispatch(receivePrice(prices));
            })
            .catch((error) => {
                dispatch(handleErrorReceivePrice(error.response.data));
            });
    }
}

function requestPrice(symbol) {
    return {
        type: REQUEST_PRICE,
        symbol
    }
}

function receivePrice(prices) {
    return {
        type: RECEIVE_PRICE,
        prices
    }
}

function handleErrorReceivePrice(error) {
    return {
        type: RECEIVE_PRICE_ERROR,
        error
    }
}
