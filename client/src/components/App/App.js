import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import s from './App.module.css';
import Login from '../Login';

function App() {
  return (
    <div className={s.app}>
      <Login />
    </div>
  );
}

export default App;
