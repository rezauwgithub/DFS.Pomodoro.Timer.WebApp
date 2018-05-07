import React from 'react';
import { shallow } from 'enzyme';

import DigitalCounter from '../components/DigitalCounterDisplay.js';


describe('Digital Counter Display', () => {
  
  it('Should render formatted minutes & seconds', () => {

    const wrapper = shallow( 
      <DigitalCounter 
        minutes={24} 
        seconds={4} 
      />
    );

    expect(wrapper.find('span').text()).toBe("24:04");

  });

});