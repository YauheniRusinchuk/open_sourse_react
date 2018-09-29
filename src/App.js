import React, { Component,Fragment } from 'react';
import './App.css';
import Root from './components/root';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadData} from './actions/loadAction';

const store = configureStore();

store.dispatch(loadData());

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Provider store={store}>
            <Root />
          </Provider>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
