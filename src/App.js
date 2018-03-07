import React, { Component } from 'react';
import './App.css';
import defaultRollImg from './img/4.jpg';

class App extends Component {
  render() {

    function zaSalla(){
      var result = Math.floor(Math.random() * 6) + 1;
      console.log(result)
      document.getElementById("sonucText").innerHTML = result + " Attınız";
      document.getElementById("zarResimId").setAttribute("src",require('./img/' +result +'.jpg'))
    }

    return (
      <div className="App">

       <h2 id="sonucText">Henüz zar Atmadınız</h2>
      <img id="zarResimId" className="zarResim" src={defaultRollImg}/>
      <button onClick={zaSalla}>Zar Salla</button>
     



      </div>
    );
  }
}

export default App;
