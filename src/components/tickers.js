import React, { Component } from 'react';
import './tickers.css';
import Cryptocurrency from './cryptocurrency'


class Tickers extends Component {
	constructor(props){
        //no props are passed to Tickers class, so no need to pass the argument props
        super(props);
		this.state={
            data: this.props.data,
		};
    }

    
	render() {
		 var tickers = this.state.data.map((currency) =>
                <Cryptocurrency changeView={this.changeView} data={currency} key={currency.name}/>
            );
            return (
                <div className="tickers-container">
                    <table className="tickers">
                        <thead>
                            <tr>
                                <th>Cryptocurrency</th>
                                <th>Price</th>
                                <th>1hr %</th>
                                <th>24hr %</th>
                                <th>7 day %</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tickers}
                        </tbody>
                    </table>
               </div>
            );
	}

}

export default Tickers
