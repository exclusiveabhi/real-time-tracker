import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import RiderLogin from './components/RiderLogin';
import RiderSignup from './components/RiderSignup';
import MapView from './components/MapView';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/rider-login" element={<RiderLogin />} />
          <Route path="/rider-signup" element={<RiderSignup />} />
          <Route path="/map" element={<MapView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
