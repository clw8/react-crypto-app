import React, { Component } from 'react';
import axios from 'axios';
import './crypto-details.css';
import { Link } from "react-router-dom";

class CryptoDetail extends Component {
    constructor(props){
        super(props);
        this.state= {
            data: this.props.location.state
        }
    }

    componentDidMount(){
        axios.get('https://api.coinmarketcap.com/v2/global/').then(
            response => {
            var result = this.state.data
            result.bitcoin_percentage_of_market_cap = response.data.data.bitcoin_percentage_of_market_cap;
            this.setState({ data: result});
            }
        )
    }

    render(){
        const { id, name, rank, available_supply, market_cap_usd, price_usd, price_btc } = this.state.data;
        return (
            <div className="crypto-detail container">
            <Link to="/">Back to index</Link>
              <div className="header">
                <h1>{name}</h1>
                <div className="crypto-side-header">
                    <p>Price: ${ price_usd }</p>
                    <p>Rank: {rank}</p>
                </div>
              </div>
                <p>Supply: ${ parseInt(available_supply, 0) }</p>
                <p>Market Capitalization: ${ market_cap_usd }</p>
                    { name === "Bitcoin" ? <p>BTC Percentage of Market Cap{ this.state.data.bitcoin_percentage_of_market_cap}</p> :  <p>Price in BTC: { price_btc }BTC</p> }
                    <a className="cmc-link" href={"https://coinmarketcap.com/currencies/" + id }>{name} on CoinMarketCap.com</a>
                    <div className="crypto-image"></div>
            </div>
          );
    }
}

export default CryptoDetail;