import React, { Component } from 'react';
import Header from './header';
import axios from 'axios';

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
          <div className="row">
            <div className="col">
              <pre>
                { JSON.stringify(this.state.topspots, null, 2) }
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
