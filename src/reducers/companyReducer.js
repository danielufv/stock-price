import {
    REQUEST_COMPANY,
    RECEIVE_COMPANY, 
    RECEIVE_COMPANY_ERROR
} from './../actions/actionTypes';

export default function companyInfo(state = {isFetching: false, error: '', info: ''}, action) {
    switch(action.type) {
        case REQUEST_COMPANY:
            return Object.assign({}, state, {
                isFetching: true,
                error: ''
            })
        case RECEIVE_COMPANY:
            return Object.assign({}, state, {
                isFetching: false,
                error: '',
                info: action.info
            })
        case RECEIVE_COMPANY_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                info: ''
            })
        default:
            return state 
    }
}