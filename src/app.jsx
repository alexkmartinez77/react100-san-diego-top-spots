import React, { Component } from 'react';
import Header from './header';
import axios from 'axios';
import TopSpot from './topspot';
import SelectList from './selectList';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      topspots: [],
    }
  }

  componentWillMount() {

    axios
    .get('https://www.cccareerssdts.demo.coolify.io/')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));

  }

  render() {
    return (
      <div className='App'>
        <div className="container">        
          <Header />
          <SelectList array={this.state.topspots}/>
          {this.state.topspots.map((topspot) => 
            <TopSpot key={topspot.id} obj={topspot} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
