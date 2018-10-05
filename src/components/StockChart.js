import React, {Component} from 'react';
import { AreaChart, Area, Label, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class StockChart extends Component {
    render() {
        const { chart, isFetching, error } = this.props

        return (
            <div>
                {error && <span>Failed to return chart: {error}</span>}
                {isFetching && <span>Loading chart...</span>}
                {!isFetching && !chart && !error && <span>No chart to show</span>}
                {chart && 
                <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">Closing prices (last month)</h5>
                        <div className="card-text">
                            <ResponsiveContainer width={'100%'} height={300}>
                                <AreaChart data={chart} margin={{ top: 0, right: 0, left: 0, bottom: 25 }}>>
                                    <defs>
                                        <linearGradient id="closePr" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="label">
                                        <Label value="Days" offset={-20} position="insideBottom" />
                                    </XAxis>
                                    <YAxis label={{ value: 'Prices', angle: -90, position: 'insideLeft' }}/>
                                    <Tooltip/>
                                    <Area type="monotone" dataKey="close" stroke="#82ca9d" fillOpacity={1} fill="url(#closePr)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>     
                </div>}
            </div>
        )
    }
}

export default StockChart;