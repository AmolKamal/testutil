import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#2a294a';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  } 
  const toggleGreen =()=>{
    if(mode === 'light')
    {
      setMode('green');
      document.body.style.backgroundColor = 'rgb(26, 133, 58)';
      showAlert("Green Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
     <>
    <Navbar title="TestUtils" abouttext="About me" mode ={mode} toggleGreen={toggleGreen} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
      
      <TextForm showAlert = {showAlert} heading  = "Enter your text here" mode = {mode}/>
            
          
    </div>
      
     </>
  );
}

export default App;
