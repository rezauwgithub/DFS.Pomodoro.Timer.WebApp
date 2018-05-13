import { connect } from 'react-redux';
import AppDashboard from '../presentational/AppDashboard';

import * as appdashboardActions from '../../redux/appdashboard/actions';


const mapStateToProps = (state) => {
  return {
    minutesPerRound: state.appdashboard.minutesPerRound,
    minutesPerShortBreak: state.appdashboard.minutesPerShortBreak,
    minutesPerLongBreak: state.appdashboard.minutesPerLongBreak,
    numOfRounds: state.appdashboard.numOfRounds,
    isRunning: state.appdashboard.isRunning
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
    }
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AppDashboard);