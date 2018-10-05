import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSymbol, fetchStockPrice, fetchStockCompany, fetchStockChart} from '../actions/index.js';
import {StockSearch, StockPrice, StockCompany, StockChart} from '../components/index.js';

class App extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(symbol) {
        this.props.dispatch(selectSymbol(symbol))
    }

    handleClick() {
        const {selectedSymbol, dispatch} = this.props
        dispatch(fetchStockPrice(selectedSymbol))
        dispatch(fetchStockCompany(selectedSymbol))
        dispatch(fetchStockChart(selectedSymbol))
    }

    render() {
        const { selectedSymbol, priceByStock, companyInfo, chartByStock} = this.props
        return (
            <div className="card">
                <h4 className="card-header">
                    Get stock prices and company details
                </h4>
                <div className="card-body">
                    <StockSearch value={selectedSymbol} onChange={this.handleChange} onClick={this.handleClick} />
                    <StockPrice prices={priceByStock.prices} error={priceByStock.error} isFetching={priceByStock.isFetching} />
                    <StockCompany info={companyInfo.info} error={companyInfo.error} isFetching={companyInfo.isFetching} />
                    <StockChart chart={chartByStock.chart} error={chartByStock.error} isFetching={chartByStock.isFetching} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(App);