import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



const App = () => {
  const [mode, setMode] =  useState('light');
  const [text, setText] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () =>{
    if(mode === "light"){
      setMode('dark')
      setText('dark')
      document.title = "TextMod - Dark";
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
      showAlert("Dark mode enabled", "success");
      
    }
    else{
      setMode('light')
      setText('light')
      document.title = "TextMod - Light";
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Dark mode disabled" , "warning");
    }
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<div>
        <Navbar title= "TextMod" mode={mode} text={text} toggleMode = {toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
        <Text heading = "Try TextMod- It's a free site to analyze your text." mode = {mode} showAlert = {showAlert} />
        </div>
      </div>} />

      <Route path="/about" element={<div>
        <Navbar title= "TextMod" mode={mode} text={text} toggleMode = {toggleMode} />
        <Alert alert={alert} />
        <About mode={mode} text={text} toggleMode = {toggleMode} /> 
        </div>} />
      </Routes>

    </Router>
      {/* <div>
        <Navbar title= "TextUtils" mode={mode} text={text} toggleMode = {toggleMode} />
        <About /> 
        </div>
        <Alert alert={alert} />
        <div className="container my-5">
        <Text heading = "Modify Text" mode = {mode} showAlert = {showAlert} />
        </div>
      </div>

      <About /> */}
    </>
  )
}

export default App

