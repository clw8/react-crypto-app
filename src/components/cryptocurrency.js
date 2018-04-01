import React, { Component } from 'react';
    import './cryptocurrency.css';

    class Cryptocurrency extends Component {
      handleClick(id){
        this.props.changeView(id);
      }
        render() {
            var {
                id,
                name,
                symbol,
                price_usd,
                percent_change_1h,
                percent_change_24h,
                percent_change_7d,
            } = this.props.data;
            return (
                <li className={"cryptocurrency " + id}>
                  <a onClick={() => this.handleClick(id)}>
                    <p className="cryptocurrency-name">{name} ({symbol})</p>
                    <h1>${ (+price_usd).toFixed(2) }</h1>
                    <p><span className={percent_change_1h<0 ? "isRed" : "isGreen"}>{percent_change_1h}% </span>1hr</p>
                    <p><span className={percent_change_24h<0 ? "isRed" : "isGreen"}>{percent_change_24h}% </span>24hrs</p>
                    <p><span className={percent_change_7d<0 ? "isRed" : "isGreen"}>{percent_change_7d}% </span>7days</p>
                    </a>
                </li>
            );
        }
    }

    export default Cryptocurrency;
