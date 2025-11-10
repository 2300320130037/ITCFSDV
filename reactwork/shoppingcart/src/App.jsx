import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Registration from './Component/Registration';
import Dashboard from './Component/Dashboard';
import Mainlayout from './Component/Mainlayout';

function App() {
  return (
    <> {/* React Fragment */}
      <BrowserRouter>
        <Routes>
          {/* Define the route and its component */}
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mainlayout" element={<Mainlayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;