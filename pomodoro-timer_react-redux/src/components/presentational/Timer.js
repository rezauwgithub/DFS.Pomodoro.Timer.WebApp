import React, { Component } from 'react';
import DigitalCounter from './DigitalCounter';


export default class Timer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      digitalCounter: props.minutesPerRound
    };
  }


  componentWillReceiveProps(nextProps) {

    if (nextProps.isRunning) {
      

    } else {
      this.updateDigitalCounter(nextProps.minutesPerRound);
    }

  }


  minutesPerRound(currentRound, numOfRounds, minutesPerRound, minutesPerShortBreak, minutesPerLongBreak) {
    this.runRound(minutesPerRound, () => {
      this.break(currentRound + 1, numOfRounds, minutesPerRound, minutesPerShortBreak, minutesPerLongBreak)
    });
  }


  break(currentRound, numOfRounds, minutesPerRound, minutesPerShortBreak, minutesPerLongBreak) {
    const minutesForBreak = (currentRound % numOfRounds === 0) ? minutesPerLongBreak : minutesPerShortBreak;

    this.runBreak(minutesForBreak, () => {
        this.minutesPerRound(currentRound + 1, numOfRounds, minutesPerRound, minutesPerShortBreak, minutesPerLongBreak);
    });
  }


  runBreak(minutes, callback) {

    this.updateDigitalCounter(minutes);

    new Promise(resolve => setTimeout(
      resolve, (minutes * 60 * 1000)
    ).then(() => {
      if (this.props.isRunning) {



        callback();
      }
    }));
  }


  updateDigitalCounter(val) {
    this.setState({
      digitalCounter: val
    });
  }


  render() {
    return (
      <DigitalCounter
        minutes={this.state.digitalCounter}
        isRunning={this.props.isRunning}
      />
    );
  }


}