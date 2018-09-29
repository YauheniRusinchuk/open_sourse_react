import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
  render(){
    return (
      <div className='nav_bar_container'>
      {this.props.category.map((v)=>{
        return(
          <Link key={v} to={`/category/${v}`}>{v}</Link>
        )
      })}
    </div>
    );
  }
}

export default Navigation;
