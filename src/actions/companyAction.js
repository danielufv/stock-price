import axios from "axios";
import {
    REQUEST_COMPANY, 
    RECEIVE_COMPANY,
    RECEIVE_COMPANY_ERROR
} from './actionTypes';

const apiUrl = "https://api.iextrading.com/1.0/stock/"
const apiMethod = 'company'

export default function fetchStockCompany(symbol) {
    return (dispatch) => {
        dispatch(requestCompany(symbol))
        return axios.get(`${apiUrl + symbol}/${apiMethod}`)
            .then((response) => {
                dispatch(receiveCompany(response.data));
            })
            .catch((error) => {
                dispatch(handleErrorReceiveCompany(error.response.data));
            });
    }
}

function requestCompany(symbol) {
    return {
        type: REQUEST_COMPANY,
        symbol
    }
}

function receiveCompany(info) {
    return {
        type: RECEIVE_COMPANY,
        info
    }
}

function handleErrorReceiveCompany(error) {
    return {
        type: RECEIVE_COMPANY_ERROR,
        error
    }
}