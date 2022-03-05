import React from 'react';

export class Option extends React.Component{
 render(){

   return (
    <option>{this.props.ticker}</option>
   )
 }
}

export default Option;