import React, {Component} from 'react'
import './css/styles.css'
import Jumbotron from './components/pages/Jumbotron'
import Footer from './components/pages/Footer'
import Nav from './components/pages/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Jumbotron/>
        <Footer/>
      </div>
    );
  }
}

export default App;
