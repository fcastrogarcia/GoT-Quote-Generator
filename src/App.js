import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: "",
      isLoaded: false
    }
    this.fetchData = this.fetchData.bind(this);

    }

  componentDidMount() {
    this.fetchData();
    }

  fetchData = () => {
      fetch('https://got-quotes.herokuapp.com/quotes')
        .then(result => result.json())
        .then(data => {
          this.setState({
            quote: data.quote,
            character: data.character,
            isLoaded: true
          })
        }
      )
    }


  render() {
    return this.state.isLoaded ? (
      <div className="App">
          <div id="quote-container">
            <blockquote className="blockquote text-right">
              <p className="mb-0">{this.state.quote}</p>
              <footer className="blockquote-footer">{this.state.character}</footer>
            </blockquote>
            <div id="buttons">
            <a id="tweet-quote" href={'https://twitter.com/intent/tweet?text='+'"'+this.state.quote+'"   '+this.state.character}
            target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
            <button id="new-quote" type="button" onClick={this.fetchData}>New Quote</button>
            </div>
          </div>
      </div>
    ) : (
      <div className="App">
        <div className="loader"></div>
      </div>
    )
  }
}

export default App;
