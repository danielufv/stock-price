import axios from "axios";
import {
    REQUEST_CHART, 
    RECEIVE_CHART,
    RECEIVE_CHART_ERROR
} from './actionTypes';

const apiUrl = "https://api.iextrading.com/1.0/stock/"
const apiMethod = 'chart'

export default function fetchStockChart(symbol) {
    return (dispatch) => {
        dispatch(requestChart(symbol))
        return axios.get(`${apiUrl + symbol}/${apiMethod}`)
            .then((response) => {
                dispatch(receiveChart(response.data));
            })
            .catch((error) => {
                dispatch(handleErrorReceiveChart(error.response.data));
            });
    }
}

function requestChart(symbol) {
    return {
        type: REQUEST_CHART,
        symbol
    }
}

function receiveChart(chart) {
    return {
        type: RECEIVE_CHART,
        chart
    }
}

function handleErrorReceiveChart(error) {
    return {
        type: RECEIVE_CHART_ERROR,
        error
    }
}