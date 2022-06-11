import React from 'react';
import LeftBar from './components/LeftBar/LeftBar';
import Mainpage from './components/MainPage/Mainpage';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className='main'>
        <LeftBar/>
        <Mainpage/>
      </div>
    </div>
  );
}

export default App;
