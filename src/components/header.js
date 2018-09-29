import React from 'react'
import Logo from './assets/newspaper.png'
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render(){
    return(
      <div className='header_container'>
        <Link to='/'>
          <img src={Logo} alt='LOGOTYPE' />
        </Link>
      </div>
    )
  }
}

export default Header;
