import {SELECT_SYMBOL} from './actionTypes';

export default function selectSymbol(symbol) {
    return {
        type: SELECT_SYMBOL,
        symbol
    }            
}