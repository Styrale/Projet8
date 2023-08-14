import React from 'react'

import './App.scss';
import { Outlet } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';


function App() {
  return (

      <div className="App">
        <Navigation />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default App;
