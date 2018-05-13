import reducer from '../../../redux/appdashboard/reducer';
import * as types from '../../../redux/appdashboard/actionTypes';


describe('AppDashboard reducer', () => {

  let state = {};

  describe('CHANGE_PARAMETER', () => {

    it('Should set parameter to value as integer', () => {

      state = reducer(state, {
        type: types.CHANGE_PARAMETER,
        parameter: 'reza',
        value: '1'
      });

      expect(state.reza).toBe(1);

    });


    it('Should set parameter to 0 when value is less than zero', () => {

      state = reducer(state, {
        type: types.CHANGE_PARAMETER,
        parameter: 'reza',
        value: '-1'
      });

      expect(state.reza).toBe(0);

    });
        
  });

});