import React from 'react';
import Option from './option';

export class SelectList extends React.Component{
 render(){
   console.log(this.props.array);
   return (
     <div>
       <select name='list'>
       {this.props.array.map((ticker, i) => 
            <Option key={ticker.id} ticker={ticker.name} />
          )}
       </select>
     </div>
   )
 }
}

export default SelectList;