import React from 'react';
import { shallow } from 'enzyme';

import AppDashboard from '../../components/presentational/AppDashboard';


describe('AppDashboard', () => {

  let wrapper;

  const start = jest.fn();
  const stopReset = jest.fn();
  const changeParameter = jest.fn();


  beforeEach(() => {
    wrapper = shallow(
      <AppDashboard 
        minutesPerRound={25}
        minutesPerShortBreak={5}
        minutesPerLongBreak={20}
        numOfRounds={2}
        isRunning={false}
        start={start}
        stopReset={stopReset}
        changeParameter={changeParameter}
      />
    );
  });


  it('Should enable form and start when isRunning is set to false', () => {

    wrapper.setProps({
      isRunning: false
    });

    expect(wrapper.find("[name='minutesPerRound']").prop('disabled')).toBe(false);
    expect(wrapper.find("[value='Start']").prop('disabled')).toBe(false);

  });


  it('Should disable the form and start after isRunning is set to true again', () => {

    wrapper.setProps({
      isRunning: true
    });

    expect(wrapper.find("[name='minutesPerRound']").prop('disabled')).toBe(true);
    expect(wrapper.find("[value='Start']").prop('disabled')).toBe(true);

  });


  it('Should call the Start function after form is submitted', () => {

    wrapper.find('form').simulate('submit');

    expect(start).toBeCalled();

  });


  it('Should call the stopReset function after the Stop and Reset button is clicked', () => {

    wrapper.find('button').simulate('click');

    expect(stopReset).toBeCalled();

  });


  it('Should call the changeParameter function after a field is modified', () => {

    wrapper.find("[name='minutesPerRound']").simulate('change');

    expect(changeParameter).toBeCalled();

  });

});