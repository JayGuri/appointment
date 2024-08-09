
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home';

const App = () => {
  return (
    <Router>
  

        <div >
          <Routes>
            <Route path="/" element={<Home />} />
          
          </Routes>
        </div>
    </Router>
  );
};

export default App;
