import {
    REQUEST_CHART, 
    RECEIVE_CHART, 
    RECEIVE_CHART_ERROR
} from './../actions/actionTypes';

export default function chartByStock(state = {isFetching: false, error: '', chart: ''}, action) {
    switch(action.type) {
        case REQUEST_CHART:
            return Object.assign({}, state, {
                isFetching: true,
                error: ''
            })
        case RECEIVE_CHART:
            return Object.assign({}, state, {
                isFetching: false,
                error: '',
                chart: action.chart
            })
        case RECEIVE_CHART_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                chart: ''
            })
        default:
            return state 
    }
}