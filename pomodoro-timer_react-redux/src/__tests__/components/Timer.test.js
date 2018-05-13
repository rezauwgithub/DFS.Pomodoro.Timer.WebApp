import React from 'react';
import { shallow } from 'enzyme';

import Timer from '../../components/presentational/Timer';
import DigitalCounter from '../../components/presentational/DigitalCounter';
import DigitalCounterDisplay from '../../components/presentational/DigitalCounterDisplay';


describe('Timer', () => {

  let wrapper, counterView;

  beforeEach(() => {
    jest.useFakeTimers();

    wrapper = shallow(
      <Timer
         minutesPerRound={25}
         minutesPerShortBreak={5}
         minutesPerLongBreak={20}
         numOfRounds={2}
         isRunning={false} 
      /> 

    );

  });




  it('Should not start after receiving isRunning as false', () => {

    wrapper.setProps({
      isRunning: false
    });

    expect(setTimeout).not.toHaveBeenCalled();

  });


  it('Should reset counter after receiving isRunning as false', () => {

    wrapper.setProps({
      minutesPerRound: 14,
      isRunning: false
    });

    expect(wrapper.state('digitalCounter')).toBe(14);

  });


  it('Should render DigitalCounter passing needed props', () => {

    wrapper.setProps({
      isRunning: false
    });

    expect(wrapper.contains(
      <DigitalCounter minutes={25} isRunning={false} counterView={counterView} />
    )).toBe(true);

  });



});