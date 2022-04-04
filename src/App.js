// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import { useState } from 'react'

function App() {
  const [mode, setmode] = useState('');
  return (
    <>
       <NavBar title="TextConvertor"/>
       <Form/>
    </>
  
  );
}

export default App;
