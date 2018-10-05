import { combineReducers } from 'redux';
import selectedSymbol from './searchReducer'
import priceByStock from './priceReducer'
import companyInfo from './companyReducer'
import chartByStock from './chartReducer'

export default combineReducers({
    selectedSymbol,
    priceByStock,
    companyInfo,
    chartByStock
});