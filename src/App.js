import './App.css';
import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
// import About from './components/about';

// import React,{useState} from 'react';
// import React from "react";

import Textform from './components/Textform';
import Alert from './components/Alert';



  // Your component code here


// export default App;


// import { useState } from 'react';

function App() {
  const[mode,setMode]=useState('light');
  // mode={darkMode};
  const[changeorange,setChangeOrange]=useState('norange');
  const[changepink,setChangePink]=useState('npink');
  const showOrange = () => {
    if (changeorange === 'orange') {
      setChangeOrange('norange');
    } else {
      setChangeOrange('orange');
    }
    document.body.style.backgroundColor = changeorange === 'norange' ? 'orange' : 'white';
  };
  
  const showPink = () => {
    if (changepink === 'pink') {
      setChangePink('npink');
    } else {
      setChangePink('pink');
    }
    document.body.style.backgroundColor = changepink === 'npink' ? 'pink' : 'white';
  };
  
  


  
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
setAlert(
  {
    msg:message,
    type:type,
  
  }

)
setTimeout(()=>{
  setAlert(null)
},1500

);
  }
  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#2c2b3b';
      showAlert("dark mode has been enabled","sucsess");
      document.title='Textutiles-dark Mode'
      setInterval(()=>
     { document.title='Textutiles is amazing website'},2000)
     setInterval(()=>
     { document.title='install textutiles now'},1500)
    
  }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","sucsess");
      document.title='Textutiles-light Mode'

    }
  }

 return (
 <>

  {/* <Router> */}
<Navbar title="Textutiles" aboutText="About Textutils" mode={mode} toogleMode={toogleMode} showOrange={showOrange} showPink={showPink} changeorange={changeorange} changepink={changepink}/>
<Alert alert={alert}/>

{/* <Navbar /> */}

<div className="container my-3">
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          {/* <Route exact path="/">
            
          </Route>
//  </Switch> */} 
{/* <About/> */}
</div>
 {/* </Router> */}
<Textform showAlert={showAlert}
 heading="Enter the text to analyse" mode={mode} />
</>
  );
}

export default App;


