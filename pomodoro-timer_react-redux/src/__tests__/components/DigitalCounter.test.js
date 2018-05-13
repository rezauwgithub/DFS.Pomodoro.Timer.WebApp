import React from 'react';
import { shallow } from 'enzyme';

import DigitalCounter from '../../components/presentational/DigitalCounter';
import DigitalCounterDisplay from '../../components/presentational/DigitalCounterDisplay';


describe('Digital Counter', () => {
  
  let wrapper;

  beforeEach(() => {
    jest.useFakeTimers();

    wrapper = shallow(
      <DigitalCounter
        minutes={24}
        isRunning={false}
      />
    );

  });


  it('Update should be running, minutes and seconds when receiving props', () => {

    wrapper.setProps({
        isRunning: true,
        minutes: 24
    });


    expect(wrapper.state('isRunning')).toBe(true);
    expect(wrapper.state('minutes')).toBe(24);
    expect(wrapper.state('seconds')).toBe(0);

  });


  it('Should render digital counter display passing props to it.', () => {

    expect(wrapper.contains(
      <DigitalCounterDisplay minutes={24} seconds={0} isRunning={false} />
    )).toBe(true);

  });


});