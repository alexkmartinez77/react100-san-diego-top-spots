import React from 'react';

export class Header extends React.Component{
 render(){
   return (
     <div>
      <div className="card rounded bg-light mb-2 mx-2 mt-4 p-2 " style={{backgroundImage: `url("https://i.stack.imgur.com/B6fEt.png")`}}>
            <h1 className="promptFont display-1">San Diego Top Spots</h1>
      </div>
      <div className="m-2 p-2">
        <h5 className="promptFont whiteFont">A list of the top 30 places to see in San Diego, California.</h5>
      </div>
     </div>
   )
 }
}

export default Header;