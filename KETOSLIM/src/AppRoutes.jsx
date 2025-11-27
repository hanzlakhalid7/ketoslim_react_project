import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Card from './components/Card';
import Sales from './components/Sales';
import { ParameterContext } from './components/ParameterContext';

function AppRoutes() {
  const [formData, setFormData] = useState({});
  
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('mode') === 'true';
    } catch (e) {
      return false;
    }
  });
  return (
    <ParameterContext.Provider value={{ formData, setFormData, mode, setMode }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Result" element={<Card />} />
        <Route path="/Sales" element={<Sales />} />
      </Routes>
    </ParameterContext.Provider>
  );
}
export default AppRoutes;
