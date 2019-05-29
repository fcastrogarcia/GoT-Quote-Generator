import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: "",
      isLoaded: false
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://got-quotes.herokuapp.com/quotes")
      .then(result => result.json())
      .then(data => {
        this.setState({
          quote: data.quote,
          character: data.character,
          isLoaded: true
        });
      });
  };

  render() {
    const { isLoaded, quote, character } = this.state;

    return isLoaded ? (
      <div className="App">
        <div id="quote-container">
          <blockquote className="blockquote text-right">
            <p className="mb-0">{quote}</p>
            <footer className="blockquote-footer">{character}</footer>
          </blockquote>
          <div id="buttons">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text="${
                this.state.quote
              }"   ${character}`}
              target="_blank"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
            <button id="new-quote" type="button" onClick={this.fetchData}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="App">
        <div className="loader" />
      </div>
    );
  }
}

export default App;
