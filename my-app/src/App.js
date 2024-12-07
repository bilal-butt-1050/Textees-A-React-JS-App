import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  const [lightMode, darkMode] = useState(true);
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  

  const handleMode = ()=>{
    darkMode(!lightMode);

    if(!lightMode){
        setbtnText("Enable Dark Mode");
        document.body.classList.remove("mode");
        showAlert("Light Mode Enabeld", "success")
        document.title = "Textees - Light Mode"
    }
    else{
        setbtnText("Enable Light Mode");
        document.body.classList.add("mode");
        showAlert("Dark Mode Enabeld", "success")
        document.title = "Textees - Dark Mode"
    }
}

  const showAlert = (msg, type)=>{
        setAlert({
          msg: msg,
          type: type
        })
        
        setTimeout(()=>{
          setAlert(null)
        },2000);
  }

  return (
    <>
    <Router>
    <Navbar title = "Testees"  toggleMode={handleMode} display={btnText}/>
    <Alerts alert ={alert}/>
    <Routes>
      <Route path="/" element={<TextForm heading = "Enter text here" theme={!lightMode} showAlert = {showAlert}/>} />
      <Route path="/about" element={<About theme={!lightMode}/> } />
    </Routes>
    </Router>
    </>
  ); 
}

export default App;