import React from 'react';
import Home from "./pages/Home";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './components/assets/css/style.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  AOS.init();
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;

