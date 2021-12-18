import React, { useState } from 'react';

import './App.css';

import Controls from './Controls';
import LapsList from './LapsList';
import Display from './Display';

const App = () => {

  const [time, setTime] = useState({ ms: 0, ss: 0, mm: 0, hh: 0 });
  const [myInterval, setMyInterval] = useState();
  const [startBtnActive, setStartBtnActive] = useState(true);
  const [laps, setLaps] = useState([]);
  const [place, setPlace] = useState(1);

  let currentMs = time.ms;
  let currentSs = time.ss;
  let currentMm = time.mm;
  let currentHh = time.hh;

  const counter = () => {
    if (currentMm === 60) {
      currentHh++;
      currentMm = 0;
    }
    if (currentSs === 60) {
      currentMm++;
      currentSs = 0;
    }
    if (currentMs === 100) {
      currentSs++;
      currentMs = 0;
    }
    currentMs++;

    setTime({ ms: currentMs, ss: currentSs, mm: currentMm, hh: currentHh })

  }

  const onStartHandler = () => {
    if (startBtnActive === false) {
      return
    };
    setStartBtnActive(false);
    setMyInterval(setInterval(counter, 10));
  };

  const onPauseHandler = () => {
    clearInterval(myInterval);
    setStartBtnActive(true);
  }

  const onResetHandler = () => {
    clearInterval(myInterval);
    setStartBtnActive(true);
    setTime({ ms: 0, ss: 0, mm: 0, hh: 0 });
    setLaps([]);
    setPlace(1);
  }

  const onLapHandler = () => {
    setLaps([
      ...laps,
      { id: Math.random(), position: place, result: { hours: time.hh, minutes: time.mm, seconds: time.ss, miliseconds: time.ms, } }])
    setPlace(place + 1);
  }

  return (
    <div className="App">
      <Display time={time} />
      <Controls onStartHandler={onStartHandler} onPauseHandler={onPauseHandler} onLapHandler={onLapHandler} onResetHandler={onResetHandler} />
      <LapsList laps={laps} />
    </div>
  );
}

export default App;