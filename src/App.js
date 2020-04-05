import React from 'react';
import profileImage from './img/0.jpg';
import './App.css';

function App() {
  return ( <
    div className = "App" >
    <
    h1 > My React app < /h1> <
    h2 > author: Dorsaf jaballah < /h2> <
    img src = {
      profileImage
    }
    alt = "profile-image" / >
    <
    /div>
  );
}

export default App;