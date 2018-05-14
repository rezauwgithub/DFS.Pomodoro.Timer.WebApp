import React from 'react';



const formatInt = (value) => {
  return value.toString().padStart(2, "0");
};


const ConfigElement = (props) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <input disabled={props.disabled} type="number" step="1" min="0" defaultValue={formatInt(props.value)} name={props.name} onChange={props.onChange} />
  </div>
);


export default (props) => (
  <div>
    <div>
      <button onClick={ (props.isRunning) ? props.stopReset : props.start}>{(props.isRunning) ? 'Stop and Reset' : 'Start' }</button>
    </div>
    <br />
    <div>
      <ConfigElement label="# of minutes per round: " name="minutesPerRound" value={props.minutesPerRound} onChange={props.changeParameter} disabled={props.isRunning} />
      <ConfigElement label="# of minutes per short break: " name="minutesPerShortBreak" value={props.minutesPerShortBreak} onChange={props.changeParameter} disabled={props.isRunning} />
      <ConfigElement label="# of minutes per long break: " name="minutesPerLongBreak" value={props.minutesPerLongBreak} onChange={props.changeParameter} disabled={props.isRunning} />
      <ConfigElement label="# of rounds: " name="numOfRounds" value={props.numOfRounds} onChange={props.changeParameter} disabled={props.isRunning} />
    </div>
  </div>
);