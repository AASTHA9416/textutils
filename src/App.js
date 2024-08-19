

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About'; // Ensure this matches your file name
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2c2b3b';
      document.body.style.color = 'white'; // Set text color to white
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'; // Set text color to black
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="Textutiles" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} />

      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


