import { changeParameter } from '../../../redux/appdashboard/actions';
import * as types from '../../../redux/appdashboard/actionTypes';


describe('Actions', () => {

  it('Should return CHANGE_PARAMETER action for a given parameter and value', () => {

    const action = changeParameter('reza', 'naeemi');

    expect(action).toEqual({
      type: types.CHANGE_PARAMETER,
      parameter: 'reza',
      value: 'naeemi'
    });

  });

});