import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function load(state=initialState.data, action) {
  switch(action.type) {
    case types.LOAD_DATA:
      console.log(action.data)
      return action.data
    default:
      return state;
  }
}
