import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyNav from './components/MyNav';
import { Component } from 'react';
import Section from './components/Section';


class App extends Component {
  render(){

    return (
      <div className='App'>
        <MyNav logo="EpiBooks" href="https://www.google.it/?hl=it" HrefName="Home" href2="https://www.youtube.com/" HrefName2="About" href3="https://www.npmjs.com/" HrefName3="Browser"/>

        <Section Sottotitolo="Benvenuti nella nostra Libreria" descriptionAlert="Approfitta del Black-Friday!" />
      </div>
       
     
     
  
      
     
    )
  }


}

export default App
