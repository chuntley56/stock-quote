import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// const symbol = 'FB';

class StockChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bid: '',
      ask: '',
      instrument: '',
      popularity: ''
    };
  }

 //  componentDidMount() {
 //     // const stockQuoteUrl = 'https://api.robinhood.com/quotes/?symbols=FB';
 //     // fetch(stockQuoteUrl)
 //     // .then(data => {return data.json()})
 //     //  .then(results => this.setState({ bid: results.results[0].bid_price, ask: results.results[0].ask_price, instrument: results.results[0].instrument.split('instruments/')[1].replace(/\/$/, "")}));
 //
 // const popularityUrl = '/instruments/popularity/?ids=ebab2398-028d-4939-9f1d-13bf38f81c50';
 //
 //     fetch(popularityUrl)
 //     // .then(data => {return data.json()})
 //     .then(results => console.log(results))
 //
 //
 //
 //  }



componentDidMount() {
    fetch('/instruments/popularity/?ids=ebab2398-028d-4939-9f1d-13bf38f81c50')
      .then(resp => {
        console.log('======success=======');
        resp.blob().then(re => {
          var FR = new FileReader();
          FR.onload = event => {
            console.log(FR.result);
          };
          FR.readAsText(re);
        });
      })
      .catch(err => {
        console.log('======failure=======');
        console.log(err);
      });
  }




  //
  // componentDidUpdate() {
  //   const popularityUrl = `https://api.robinhood.com/instruments/popularity/?ids=${this.state.instrument}`;
  //   fetch('https://api.robinhood.com/instruments/popularity/?ids=ebab2398-028d-4939-9f1d-13bf38f81c50')
  //    .then(data => {return data.json()})
  //    // .then(results => this.setState({ popularity: results.results[0].num_open_positions}))
  //         .then(results => console.log(results.results[0].num_open_positions))
  // }

  render() {
    const {bid, ask, instrument, popularity} = this.state;
    return (
      <div>
      <div>
      Bid: {bid}<br />
      Ask: {ask}<br />
      Instrument: {instrument}<br />
      Popularity: {popularity}
      </div>
      </div>

    );
  }


}

export default StockChart;
