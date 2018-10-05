import React, {Component} from 'react';
import NumberFormat from 'react-number-format';

class StockResult extends Component {
    render() {
        const { isFetching, error  } = this.props
        const { latestPrice, change, changePercent} = this.props.prices

        return (
            <div>
                {error && <span>Failed to return price: {error}</span>}
                {isFetching && <span>Loading price...</span>}
                {!isFetching && !latestPrice && !error && <span>No price to show</span>}
                {latestPrice && 
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr className="table-warning">
                                <th width='60%'>Latest Price</th>
                                <th width='20%'>Var</th>
                                <th width='20%'>%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <NumberFormat value={latestPrice} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} 
                                        decimalSeparator={','} decimalScale={2} fixedDecimalScale prefix={'$'} />
                                </td>
                                <td>
                                    {change > 0 && <span>+</span>}
                                    <NumberFormat value={change} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} 
                                        decimalSeparator={','} decimalScale={2} fixedDecimalScale/>
                                </td>
                                <td>
                                    {change > 0 && <span>+</span>}
                                    <NumberFormat value={changePercent * 100} displayType={'text'} thousandSeparator={'.'} 
                                        decimalSeparator={','} decimalScale={2} fixedDecimalScale/>
                                </td>
                            </tr>
                        </tbody>
                    </table>}
            </div>
        )
    }
}

export default StockResult;