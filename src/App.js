import React, { Component } from 'react';

import Header from './components/Header';
import MenuLateral from './components/MenuLateral';

import Config from './config';

import Routes from './routes.js'

class App extends Component {
  setEstadoMenu = estadoMenu => {
    this.setState({ estadoMenu });
  };

  state = {
    estadoMenu: "en",
    setEstadoMenu: this.setEstadoMenu,
  };

  


  render() {
    return (

      <div className="App">
        <Config.Provider value={this.state}>
          <h1>{this.state.estadoMenu}</h1>
          <Header />
          <div id="wrapper" className="container haside">
            <div className="row block page p-home">
              <MenuLateral />
              <Routes/>
              <script type="text/javascript" src="jquery224.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.2/mobile-detect.min.js"></script>
            </div>
          </div>
        </Config.Provider>

      </div>
    );
  }

}

export default App;
