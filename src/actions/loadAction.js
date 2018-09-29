import GetApi from './getApi';
import * as types from './actionTypes';

export function loadData() {
  return function(dispatch) {
    return GetApi.getNewApi().then((data) => {
      console.log("loadDatafunc:",data)
      dispatch(loadDataSucces(data));
    }).catch((error)=>{
      throw(error);
    })
  }
}


export function loadDataSucces(data) {
  return {type: types.LOAD_DATA, data}
}
