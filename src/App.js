// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('dark');
  const togglemode =() =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return ( 
    <>

       <NavBar title="TextConvertor" mode={mode} togglemode={togglemode}/>
       <Form title=" new project" mode={mode}/>
    </>
    

  );
}

export default App;
