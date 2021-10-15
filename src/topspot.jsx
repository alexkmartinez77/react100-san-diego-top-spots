import React from 'react';

export class TopSpot extends React.Component{
  render(){
    let {name, description, location: [long, lat],} = this.props.obj;
    return (
      <div className="card rounded bg-light m-2 p-2">
        <h4>{name}</h4>
        <p>{description}</p>
        <a href={`https://www.google.com/maps?q=${long},${lat}`}>Google Map It</a>
      </div>
  
    )
  }
}

export default TopSpot;