import { connect } from 'react-redux';
import AppDashboard from '../presentational/AppDashboard';

import * as appdashboardActions from '../../redux/appdashboard/actions';
import * as timerActions from '../../redux/timer/actions';

const mapStateToProps = (state) => {
  return {
    minutesPerRound: state.appdashboard.minutesPerRound,
    minutesPerShortBreak: state.appdashboard.minutesPerShortBreak,
    minutesPerLongBreak: state.appdashboard.minutesPerLongBreak,
    numOfRounds: state.appdashboard.numOfRounds,
    isRunning: state.timer.isRunning
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    changeParameter: (event) => {
      
      event.preventDefault();

      dispatch(
        appdashboardActions.changeParameter(
          event.target.name, event.target.value
        )
      )
    },

    start: (event) => {
      event.preventDefault();
      dispatch(timerActions.start);
    },

    pause: (event) => {
      event.preventDefault();
      dispatch(timerActions.pause);
    }


  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AppDashboard);