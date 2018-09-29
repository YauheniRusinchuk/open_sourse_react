import React from 'react';
import Hello from './hello'
import Detail from './detail'
import {Switch, Route} from 'react-router-dom'


class Main extends React.Component {
  render(){
    return(
    <div className='main_container'>
      <Switch>
         <Route exact path = '/' component={Hello} />
         <Route path = '/category/:ct/' component={Detail} />
      </Switch>
    </div>
    );
  }
}

export default Main;
