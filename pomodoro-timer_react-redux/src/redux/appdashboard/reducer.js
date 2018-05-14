/*
  Reducers hold the store's state (this initialState object defines it).
  Reducers also handle plain object actions and modify their state (immutably) accordingly.
  This is the only way to change the store's state.
  The other exports in this file are Selectors, which is business logic that digests parts 
  of the store's state for easier comsumption by views.
*/

import * as settings from '../../__app_settings__';
import * as types from './actionTypes';


const initialState = {
  minutesPerRound: settings.DEFAULT_MINUTES_PER_ROUND,
  minutesPerShortBreak: settings.DEFAULT_MINUTES_PER_SHORT_BREAK,
  minutesPerLongBreak: settings.DEFAULT_MINUTES_PER_LONG_BREAK,
  numOfRounds: settings.DEFAULT_NUM_OF_ROUNDS
};


export default function reduce(state = initialState, action = {}) {

  switch (action.type) {

    case types.CHANGE_PARAMETER:

      const intValue = parseInt(action.value, 10);

      return {
        ...state, 
        [action.parameter]: (Number.isNaN(intValue) || intValue < 0) ? 0 : intValue
      }

    default:
      return state;
      
  }
}



// Selectors

export const getMinutesPerRound = (state) => {
  return state.appdashboard.minutesPerRound;
}

export const getMinutesPerShortBreak = (state) => {
  return state.appdashboard.minutesPerShortBreak;
}

export const getMinutesPerLongBreak = (state) => {
  return state.appdashboard.minutesPerLongBreak;
}

export const getNumOfRounds = (state) => {
  return state.appdashboard.numOfRounds;
}


