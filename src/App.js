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
            <button type="button" className="btn btn-primary btn-lg" onClick={this.fetchData}>New Quote</button>
          </div>
      </div>
    ) : (
      <div className="App">
      
      </div>
    )
  }
}

export default App;
