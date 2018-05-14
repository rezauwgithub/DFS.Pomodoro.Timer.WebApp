import { connect } from 'react-redux';
import Timer from '../presentational/Timer';


const mapStateToProps = (state) => {
  return {
    minutesPerRound: state.appdashboard.minutesPerRound,
    minutesPerShortBreak: state.appdashboard.minutesPerShortBreak,
    minutesPerLongBreak: state.appdashboard.minutesPerLongBreak,
    numOfRounds: state.appdashboard.numOfRounds,
    isRunning: state.timer.isRunning
  }
};


export default connect(
  mapStateToProps, 
)(Timer);