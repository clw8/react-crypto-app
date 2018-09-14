import React, { Component } from 'react';
import './cryptocurrency.css';
import { Link } from "react-router-dom";


    class Cryptocurrency extends Component {

      renderTd(content){
          return (
              <td>
                <Link to={ { pathname: `crypto/${this.props.data.id}`, state:  this.props.data} }>
                  { content } 
                </Link>
              </td>
          )
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
                    <tr className={"cryptocurrency " + id }>
                        {this.renderTd(`${name} (${symbol})`)}
                        {this.renderTd(`$${ (+price_usd).toFixed(2) }`)}
                        {this.renderTd(<span className={percent_change_1h<0 ? "isRed" : "isGreen"}>{percent_change_1h}% </span>)}
                        {this.renderTd(<span className={percent_change_24h<0 ? "isRed" : "isGreen"}>{percent_change_24h}% </span>)}
                        {this.renderTd(<span className={percent_change_7d<0 ? "isRed" : "isGreen"}>{percent_change_7d}% </span>)}                       
                    </tr>
            );
        }
    }

    export default Cryptocurrency;
