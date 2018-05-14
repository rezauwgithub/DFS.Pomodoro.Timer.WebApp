/*
  Reducers hold the store's state (this initialState object defines it).
  Reducers also handle plain object actions and modify their state (immutably) accordingly.
  This is the only way to change the store's state.
  The other exports in this file are Selectors, which is business logic that digests parts 
  of the store's state for easier comsumption by views.
*/

import * as types from './actionTypes';


const initialState = {
  isRunning: false
};


export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.START:
      return {  
        ...state,
        isRunning: true
      }
    
    case types.STOP_RESET:
      return {
        ...state,
        isRunning: false
      }

    default:
      return state;
      
  }
}



// Selectors

export const getIsRunning = (state) => {
  return state.timer.isRunning;
}