import React, { Component } from 'react';
import DigitalCounterDisplay from './DigitalCounterDisplay';


export default class DigitalCounter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      minutes: props.minutes,
      seconds: 0
    };
  }


  componentDidMount() {
    
    setInterval(() => {

      if (this.props.isRunning) {
        if (this.state.seconds === 0) {
          this.setState({
            minutes: this.state.minutes - 1,
            seconds: 59
          })
        }
        else {
          this.setState({
            seconds: this.state.seconds - 1
          });
        }
      }

    }, 1000);

  }


  componentWillReceiveProps(nextProps) {
    
    this.setState({
      isRunning: nextProps.isRunning,
      minutes: nextProps.minutes,
      seconds: 0
    });

  }


  render() {
    return (
      <DigitalCounterDisplay
        isRunning = {this.props.isRunning}
        minutes = {this.state.minutes}
        seconds = {this.state.seconds}
      />
    );
  }

}