import React from 'react';

export class Header extends React.Component{
 render(){
   return (
     <div className="row">
       <div col>
          <h1 className="row display text-center">San Diego Top Spots</h1>
          <p className="row">A list of the top 30 places to see in San Diego, California.</p>
       </div>
     </div>
   )
 }
}

export default Header;