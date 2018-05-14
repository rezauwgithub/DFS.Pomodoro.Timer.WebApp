import React from 'react';


const FormElement = (props) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <input disabled={props.disabled} type="number" name={props.name} value={props.value} onChange={props.onChange} />
  </div>
);


export default (props) => (
  <div>
    <form onSubmit={props.start}>
      <div>
        <FormElement label="# of minutes per round: " name="minutesPerRound" value={props.minutesPerRound} onChange={props.changeParameter} disabled={props.isRunning} />
        <FormElement label="# of minutes per short break: " name="minutesPerShortBreak" value={props.minutesPerShortBreak} onChange={props.changeParameter} disabled={props.isRunning} />
        <FormElement label="# of minutes per long break: " name="minutesPerLongBreak" value={props.minutesPerLongBreak} onChange={props.changeParameter} disabled={props.isRunning} />
        <FormElement label="# of rounds" name="numOfRounds" value={props.numOfRounds} onChange={props.changeParameter} disabled={props.isRunning} />
      </div>
      <div>
        <input type="submit" disabled={props.isRunning} value="Start" />
      </div>
    </form>
    <div>
      <button onClick={props.pause} disabled={!props.isRunning}>Pause</button>
    </div>
  </div>
);