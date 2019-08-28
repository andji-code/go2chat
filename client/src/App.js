import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const[arr,setArr]=useState(null);
  useEffect(()=>{
    Axios.get('/api/getArr').then(res=>setArr(res.data));
  })
  return (
    <div className="App">
      {arr?arr:"no array"}
    </div>
  );
}

export default App;
