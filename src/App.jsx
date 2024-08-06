
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import User from './components/user';
import Appointment from './components/appointment';
import Confirmation from './components/confirmation';

const App = () => {
  return (
    <Router>
  

        <div >
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/success" element={<Confirmation />} />
          </Routes>
        </div>
    </Router>
  );
};

export default App;
