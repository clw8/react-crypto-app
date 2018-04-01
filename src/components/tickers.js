import React, { Component } from 'react';
import './tickers.css';
import Cryptocurrency from './cryptocurrency'
import axios from 'axios'

class Tickers extends Component {
	constructor(props){
		super(props);
		this.state={
			data: [
            {
                id: "bitcoin",
            },
            {
                id: "ethereum",
            },
            {
                id: "ripple",
            },
            {
                id: "bitcoin-cash",
            },
            {
                id: "litecoin",
            },
            {
                id: "eos",
            },
            {
                id: "cardano",
            },
             {
                id: "stellar",
            },
             {
                id: "neo",
              },
							{
								id: "iota"
							}
        ]
		};
	}
	componentDidMount() {
	    this.fetchCryptocurrencyData();
	    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
	}
	changeView(id) {
		console.log('id' + id);
	}
	fetchCryptocurrencyData() {
	    axios.get("https://api.coinmarketcap.com/v1/ticker/")
	        .then(response => {
	            var wanted = this.state.data.map(currency => currency.id);
	            var result = response.data.filter(currency => wanted.includes(currency.id));
	            this.setState({ data: result});
	            	        	console.log(this.state.data);

	        })
	        .catch(err => console.log(err));
	}

	render() {
		 var tickers = this.state.data.map((currency) =>
                <Cryptocurrency changeView={this.changeView} data={currency} key={currency.id}/>
            );
            return (
                <div className="tickers-container">
                    <ul className="tickers">{tickers}</ul>
               </div>
            );
	}

}

export default Tickers
