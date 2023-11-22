// App.js

// CSS file
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/about';
import React, { useState } from 'react'

// import React,{useState} from 'react';




import Textform from './components/Textform';
// import { useState } from 'react';

function App() {
  const[mode,setMode]=useState('light');
  // mode={darkMode};

  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }

 return (
 <>

<Navbar title="Textutiles" aboutText="About Textutils" mode={mode} toogleMode={toogleMode}/>
{/* <Navbar /> */}
<div className="container my-3">

<Textform heading="Enter the text to analyse" mode={mode} />
{/* <About/> */}
</div>
</>
  );
}

export default App;
