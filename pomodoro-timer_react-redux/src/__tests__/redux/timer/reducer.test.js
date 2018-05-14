import reducer from '../../../redux/timer/reducer';
import * as types from '../../../redux/timer/actionTypes';


describe('Timer reducer', () => {

  let state = {};

  describe('START', () => {

    it('Should set isRunning to true', () => {

      state = reducer(state, {
        type: types.START
      });

      expect(state.isRunning).toBe(true);

    });
        
  });


  describe('Stop and Reset', () => {

    it('Should set isRunning to false', () => {

      state = reducer(state, {
        type: types.STOP_RESET
      });

      expect(state.isRunning).toBe(false);

    });
        
  });

});