import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/about';

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

  const toogleMode = () => {
  

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2c2b3b';
      document.body.style.color = 'white'; // Set text color to white
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Textutiles - Dark Mode';
  
      // setInterval(()=>
    //  { document.title='Textutiles is amazing website'},2000)
    //  setInterval(()=>
    //  { document.title='install textutiles now'},1500)
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'; // Set text color to black
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Textutiles - Light Mode';
    }
  };
  
 return (
 <>

  <Router>
<Navbar title="Textutiles" aboutText="About Textutils" mode={mode} toogleMode={toogleMode} />
<Alert alert={alert} mode={mode}/>

{/* <Navbar /> */}

<div className="container my-3">
 <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route> 
          <Route exact path="/">
            
<Textform showAlert={showAlert}
 heading="Try Textutiles - word counter,character counter,Remove extra spaces" mode={mode} />
          </Route>
</Switch>  
{/* <About/> */}
</div>
 </Router>
</>
  );
}

export default App;


