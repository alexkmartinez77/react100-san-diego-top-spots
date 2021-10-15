import React, { Component } from 'react';
import Header from './header';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      topspots: [],
    }
  }

  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className="container">
          <Header />
          {this.state.topspots.map((topspot) => 
            <TopSpot key={topspot.id} obj={topspot} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
