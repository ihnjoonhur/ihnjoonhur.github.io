import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./login";
import { Register } from "./register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={() => toggleForm("register")}/> : <Register onFormSwitch={() => toggleForm("login")}/>  
      }
    </div>
  );
}

export default App;

