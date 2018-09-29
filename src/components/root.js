import React, {Fragment} from 'react';
import Header from './header'
import Navigation from './navigation'
import Search from './search'
import Main from './main'
import categories from './categorylist'

class Root extends React.Component {
  render(){
    return(
      <Fragment>
        <Header />
        <Navigation category={categories} />
        <Main />
        <Search />
      </Fragment>
    );
  }
}

export default Root;
