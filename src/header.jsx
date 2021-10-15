import React from 'react';

export class Header extends React.Component{
 render(){
   return (
     <div className="card rounded bg-light mb-2 mx-2 mt-4 p-2">
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
     </div>
   )
 }
}

export default Header;