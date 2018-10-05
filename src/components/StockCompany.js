import React, {Component} from 'react';

class StockCompany extends Component {
    render() {
        const { info, isFetching, error } = this.props

        return (
            <div>
                {error && <span>Failed to return company info: {error}</span>}
                {isFetching && <span>Loading company info...</span>}
                {!isFetching && !info && !error && <span>No company info to show</span>}
                {info && 
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th width="25%">Company name</th>
                                <td>{info.companyName}</td>
                            </tr>
                            <tr>
                                <th width="25%">Exchange</th>
                                <td>{info.exchange}</td>
                            </tr>
                            <tr>
                                <th width="25%">CEO</th>
                                <td>{info.CEO}</td>
                            </tr>
                            <tr>
                                <th width="25%">Website</th>
                                <td>{info.website}</td>
                            </tr>
                            <tr>
                                <th width="25%">Description</th>
                                <td>{info.description}</td>
                            </tr>
                        </tbody>
                    </table>}
            </div>
        )
    }
}

export default StockCompany;