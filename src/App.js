import React from 'react';
import profileImage from './img/0.jpg';
import './App.css';

function App() {
  return ( < div className = "App" >
    <
    h1 > My React app < /h1>     <
    h2 > Author: Dorsaf jaballah < /h2>  <
    img src = {
      profileImage
    }
    alt = "profile-image" / >
    <
    h3 > Contact US < /h3> <
    form >
    <
    label className = "block" >
    First Name <
    /label> <
    input type = "text"
    className = "block" / >
    <
    label className = "block" >
    Last Name <
    /label> <
    input type = "text"
    className = "block" / >
    <
    label className = "block" >
    Email:
    <
    /label> <
    input type = "email"
    className = "block" / >

    <
    button type = "submit"
    class = "btn btn-primary" > Submit < /button> <
    /form>



    <
    /div>
  );
}
export default App;