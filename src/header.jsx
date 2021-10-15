import React from 'react';

export class Header extends React.Component{
 render(){
   return (
     <div className="row">
          <h1 className="row display text-center">San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
     </div>
   )
 }
}

export default Header;