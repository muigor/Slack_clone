import React, { useState } from "react"
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useSelector,useStore } from 'react-redux';
import { SET_USER } from "./features/store";

function App() {
  const user = useSelector((state)=>state.user_info.user);

  console.log(user);
  return (
    <div className="App">
      <Router>
        { !user ?(<Login/>):(
        <>  
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Routes>

            <Route path="/room/:roomId" element={<Chat/>}/>
              
          
            
            <Route path="/" element={<Chat/>}/>
            
          </Routes>
        </div>
        </> 
      
        )}
        </Router>
        
    </div>
  );
}

export default App;
