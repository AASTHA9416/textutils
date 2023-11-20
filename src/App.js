// App.js

// CSS file
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';


import Textform from './components/Textform';

function App() {
 return (
 <>

<Navbar title="Textutiles" aboutText="About Textutils"/>
{/* <Navbar /> */}
<div className="container my-3">

<Textform heading="Enter the text to analyse"/>
<About/>
</div>
</>
  );
}

export default App;
