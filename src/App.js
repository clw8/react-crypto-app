import React, { Component } from 'react';
import './App.css';
import Tickers from './components/tickers.js';
import axios from 'axios';
import Modal from './components/modal.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
                  coins: ["bitcoin", "ethereum", "ripple", "bitcoin-cash", "litecoin", "eos", "cardano", "stellar", "neo", "iota"],
                  modal: false
                }
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount(){
    this.fetchCryptocurrencyData();
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 20000);
  }

  fetchCryptocurrencyData() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/")
        .then(response => {
              var result = response.data.filter(currency => this.state.coins.includes(currency.id));
              this.setState({ data: result});
              
        })
        .catch(err => console.log(err));
  }

  showModal(){
    this.setState({modal: true});
  }
  closeModal(){
    this.setState({modal: false});
  }

  renderView(){
    if(this.state.hasOwnProperty("data")){
      return <Tickers data={this.state.data} />
    } 
    else{
      return <div>Please wait..</div>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Cryptocurrency Ticker</h2>
          <button onClick={this.showModal}>About</button>
        </header>
        <Modal modal={this.state.modal} closeModal={this.closeModal}/>
        { this.renderView() }
      </div>
    );
  }
}

export default App;
