import React, { Component } from 'react';
import './App.css';
import Joke from './components/Joke';

class App extends Component {
  // constructor method will load first
  constructor(props){
    super(props);
    this.state = {
      jokes: []
    }
  }

  // componentDidMount will 'force' our app to load and will load third
  componentDidMount() {
    this.fetchJokes()
  }

  fetchJokes = () => {
    // fetch method will get the information from the server
    fetch('https://official-joke-api.appspot.com/random_ten')
      // once that is loaded, we convert that response into a json format
      .then(res => res.json())
      // once that is done, we tell our app what to do with that information 
      .then(data => this.setState({ jokes: data }))
  }

  // render method will load second
  render() {
    return (
      <div className="App">
        { this.state.jokes.map(joke => <Joke {...joke} key={joke.id} />) }
      </div>
    );
  }
}

export default App;
