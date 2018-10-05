import React, {Component} from 'react';
import PropTypes from 'prop-types'

class StockSearch extends Component {
    render() {
        const { value, onChange, onClick } = this.props

        return (
            <div className="form-group row">
                <input type="text" onChange={e=>onChange(e.target.value)} name="symbol" value={value} className="form-control col-4 mr-1" 
                    placeholder="Enter the stock symbol" id="stockSymbol"></input>
                <button onClick={()=>{onClick()}} className="btn btn-primary">Send</button>
            </div>
        )
    }
}

StockSearch.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

export default StockSearch;