import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import * as settings from '../../__app_settings__';

import '../../styles/App.css';

import AppDashboardContainer from '../containers/AppDashboardContainer';
import TimerContainer from '../containers/TimerContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>{settings.APP_TITLE}</title>
        </Helmet>
        <header className="App-header">
          <h1 className="App-title">{settings.APP_TITLE}</h1>
        </header>
        <p className="App-intro">
          Description and Instructions
        </p>
        <div>
          <TimerContainer />
          <AppDashboardContainer />
        </div>
      </div>
    );
  }
}

export default App;
