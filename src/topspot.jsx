import React from 'react';

export class TopSpot extends React.Component{
  render(){
    let {name, description, location: [long, lat],} = this.props.obj;
    return (
      <div className="row rounded bg-light m-2 p-2">
        <div className="well">
          <h4>{name}</h4>
          <p>{description}</p>
          <a href={`https://maps.google.com/?q=${long},${lat}`}><buton></buton></a>
        <div className="row">
          <div className="col text-center">
            <a className="googleLink" href={`https://www.google.com/maps?q=${long},${lat}`} target="_blank">
              <button type="button" className="btn btn-info">
                  <span className="material-icons redFont">location_on</span> 
                  <span className="blueFont prompt">G</span>
                  <span className="orangeFont prompt">o</span>
                  <span className="orangeFont prompt">o</span>
                  <span className="blueFont prompt">g</span>
                  <span className="greenFont prompt">l</span>
                  <span className="redFont prompt">e</span>
                  <span className="blackFont prompt"> Map It</span>
                </button>
              </a>
            </div>
        </div>
        </div>
      </div>
  
    )
  }
}

export default TopSpot;